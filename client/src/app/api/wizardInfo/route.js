import { NextRequest, NextResponse } from "next/server";
import pool from "../db-connector/route.js";
const db = pool;

// Get list of wizards
export async function GET(req) {
  const selectQuery =
    "SELECT wizard_name, wizard_graduated, wizard_house FROM Wizards;";

  const conn = await db.getConnection();
  const wizards = await conn.query(selectQuery);
  console.log(wizards);
  conn.release();

  return Response.json(wizards);
}
