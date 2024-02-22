"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const EditWizard = ({ name, house, graduated }) => {
  const [changeName, setChangeName] = useState(name);
  const [changeHouse, setChangeHouse] = useState(house);
  const [changeGraduted, setChangeGraduated] = useState(graduated);

  useEffect(() => {
    // get wizard row based on name and house
  }, []);

  return (
    <>
      <div>
        <form>
          <h3>Update Wizard</h3>
          <div className={styles.formInputGroup}>
            <label>Wizard Name:</label>
            <input
              type="text"
              value={changeName}
              onChange={(e) => {
                setChangeName(e.target.value());
              }}
            ></input>
          </div>
          <div className={styles.formInputGroup}>
            <label>Wizard House:</label>
            <input
              type="text"
              value={changeHouse}
              onChange={(e) => {
                setChangeHouse(e.target.value());
              }}
            ></input>
          </div>
          <div className={styles.formInputGroup}>
            <label>Graduated?</label>
            <select
              value={changeGraduted}
              onChange={(e) => {
                setChangeGraduated(e.target.value());
              }}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <button type="submit">Edit Wizard</button>
        </form>
      </div>
    </>
  );
};

export default EditWizard;
