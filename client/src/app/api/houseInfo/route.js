import { NextRequest, NextResponse } from "next/server";
const db = require("../db-connector/route.js");

export async function GET(req) {
  const selectQuery = "SELECT house_name, house_founder FROM Houses;";

  const conn = await db.pool.getConnection();
  const houseInfo = await conn.query(selectQuery);
  console.log(houseInfo);
  conn.release();

  return Response.json(houseInfo);
}

export async function POST(req, res) {
  const house = await req.json();
  console.log(house);
  const newHouseName = house.houseName;
  const newHouseFounder = house.houseFounder;

  const insertQuery = `INSERT INTO Houses(house_name, house_founder) VALUES ('${newHouseName}', '${newHouseFounder}');`;

  const conn = await db.pool.getConnection();
  const insertHouse = await conn.query(insertQuery);
  console.log(insertHouse);
  conn.release();

  return NextResponse.json(
    { message: "Added house to database!" },
    { status: 200 }
  );
}
