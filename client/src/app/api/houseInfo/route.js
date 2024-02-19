import { NextRequest, NextResponse } from "next/server";
import pool from "../db-connector/route.js";
const db = pool;

export async function GET(req) {
  const query = "SELECT house_name, house_founder FROM Houses;";

  const conn = await db.getConnection();
  const houseInfo = await conn.query(query);
  console.log(houseInfo);
  conn.release();

  return Response.json(houseInfo);
}
