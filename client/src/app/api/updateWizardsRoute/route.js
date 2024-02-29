import { NextRequest, NextResponse } from "next/server";
import pool from "../db-connector/route.js";
const db = pool;

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

  const conn = await db.getConnection();
  const updateWizard = await conn.query(updateQuery);
  conn.end();

  return NextResponse.json({ message: "Updated wizard!" }, { status: 200 });
}
