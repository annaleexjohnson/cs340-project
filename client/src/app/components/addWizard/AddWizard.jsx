"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const AddWizard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouseNames = async () => {
      const res = await fetch("/api/houseInfo", {
        method: "GET",
      });
      const houses = await res.json();
      console.log(houses);
      setHouses(houses);
    };

    fetchHouseNames();
  }, []);

  const addWizard = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.addWizardContainer}>
        <h2>Add New Witch or Wizard</h2>
        <form
          className={styles.addWizardForm}
          onSubmit={(e) => {
            addWizard(e);
          }}
        >
          {/* First Name */}
          <div className={styles.formInputGroup}>
            <label>First Name:</label>
            <input
              value={firstName}
              type="text"
              placeholder="Harry"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            ></input>
          </div>

          {/* Last Name */}
          <div className={styles.formInputGroup}>
            <label>Last Name:</label>
            <input
              value={lastName}
              type="text"
              placeholder="Potter"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            ></input>
          </div>

          {/* Hogwarts House */}
          <div className={styles.formInputGroup}>
            <label>House:</label>
            <select>
              {houses.map((house) => {
                return <option>{house.house_name}</option>;
              })}
            </select>
          </div>

          <div className={styles.formInputGroup}>
            <label>Graduated?</label>
            <select>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <button type="submit">Add Wizard</button>
        </form>
      </div>
    </>
  );
};

export default AddWizard;
