import { NextRequest, NextResponse } from "next/server";
import pool from "../db-connector/route.js";
const db = pool;

// Get list of wizards
export async function GET(req) {
  const selectQuery =
    "SELECT Wizards.wizard_name, Wizards.wizard_graduated, Houses.house_name FROM Wizards, Houses WHERE Wizards.wizard_house = Houses.house_id GROUP BY Wizards.wizard_name;";

  const conn = await db.getConnection();
  const wizards = await conn.query(selectQuery);
  console.log(wizards);
  conn.release();

  return Response.json(wizards);
}
