import { NextRequest, NextResponse } from "next/server";
import pool from "../db-connector/route.js";
const db = pool;

// Get houses for select option
export async function GET(req) {
  const selectQuery = "SELECT house_name FROM Houses;";

  const conn = await db.getConnection();
  const names = await conn.query(selectQuery);
  conn.release();

  return Response.json(names);
}
