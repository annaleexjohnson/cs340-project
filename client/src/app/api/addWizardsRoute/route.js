import { NextRequest, NextResponse } from "next/server";
import pool from "../db-connector/route.js";
const db = pool;

// Get list of wizards
export async function POST(req) {
  const wizard = await req.json();
  const wizardName = wizard.name;
  const wizardGraduated = wizard.graduated;
  const wizardHouse = wizard.house;

  console.log(wizardName, wizardHouse, wizardGraduated);

  const insertQuery = `INSERT INTO Wizards (wizard_name, wizard_graduated, wizard_house) VALUES ('${wizardName}', ${wizardGraduated}, (SELECT house_id FROM Houses WHERE house_name ='${wizardHouse}'));`;

  try {
    const conn = await db.getConnection();
    const wizards = await conn.query(insertQuery);
    conn.release();
    return NextResponse.json({ message: "Added wizard!" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
