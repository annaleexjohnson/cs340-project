"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const AddHouse = () => {
  const [houseName, setHouseName] = useState("");
  const [houseFounder, setHouseFounder] = useState("");

  const addHouse = async (e) => {
    e.preventDefault();
    console.log(houseName, houseFounder);

    fetch("/api/houseInfo", {
      method: "POST",
      body: JSON.stringify({
        houseName: houseName,
        houseFounder: houseFounder,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      console.log(res);

      if (res.status === 200) {
        alert("Added wizard to database!");
      }
    });
  };

  return (
    <>
      <div className={styles.addHouseContainer}>
        <h2>Add New House</h2>
        <form className={styles.addHouseForm} onSubmit={addHouse}>
          <div className={styles.formInputGroup}>
            <label>House Name:</label>
            <input
              type="text"
              placeholder="Hogwarts"
              onChange={(e) => {
                setHouseName(e.target.value);
              }}
            ></input>
          </div>

          <div className={styles.formInputGroup}>
            <label>House Founder:</label>
            <input
              type="text"
              placeholder="Dumbledore"
              onChange={(e) => {
                setHouseFounder(e.target.value);
              }}
            ></input>
          </div>

          <button type="submit">Add House</button>
        </form>
      </div>
    </>
  );
};

export default AddHouse;
