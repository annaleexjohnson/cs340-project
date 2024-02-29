import { NextRequest, NextResponse } from "next/server";
const db = require("../db-connector/route.js");

// Get list of wizards
export async function GET(req) {
  const selectQuery =
    "SELECT Wizards.wizard_name, Wizards.wizard_graduated, Houses.house_name FROM Wizards, Houses WHERE Wizards.wizard_house = Houses.house_id GROUP BY Wizards.wizard_name;";

  try {
    const conn = await db.pool.getConnection();
    const wizards = await conn.query(selectQuery);
    console.log(wizards);
    conn.release();
    return NextResponse.json(wizards);
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}

// Update wizard
export async function POST(req) {
  const wizard = await req.json();
  const newName = wizard.newName;
  const newHouse = wizard.newHouse;
  const newGraduated = wizard.newGraduated;
  const originalName = wizard.originalName;
  const originalHouse = wizard.originalHouse;
  const originalGraduated = wizard.originalGraduated;

  const updateQuery = `UPDATE Wizards SET wizard_name = '${newName}', wizard_graduated = ${newGraduated}, wizard_house = (SELECT house_id FROM Houses WHERE house_name = '${newHouse}') WHERE wizard_id = (SELECT wizard_id from Wizards WHERE wizard_name = '${originalName}' AND wizard_graduated = ${originalGraduated} AND wizard_house = (SELECT house_id FROM Houses WHERE house_name = '${originalHouse}'));`;

  const conn = await db.pool.getConnection();
  const updateWizard = await conn.query(updateQuery);
  conn.release();

  return NextResponse.json({ message: "Updated wizard!" }, { status: 200 });
}
