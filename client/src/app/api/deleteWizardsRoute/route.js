import { NextResponse } from "next/server";
import pool from "../db-connector/route.js";
const db = pool;

// Get list of wizards
export async function DELETE(req) {
  const wizard = await req.json();
  const wizardName = wizard.name;
  console.log(wizardName);

  const deleteQuery = `DELETE FROM Wizards WHERE wizard_name = '${wizardName}';`;

  try {
    const conn = await db.getConnection();
    const deleteWizard = await conn.query(deleteQuery);
    conn.end();
    return NextResponse.json({ message: "Deleted wizard!" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
