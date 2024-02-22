"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const EditInstance = ({ spellName, wizardName, notes }) => {
  const [changeSpell, setChangeSpell] = useState(spellName);
  const [changeWizard, setChangeWizard] = useState(wizardName);
  const [changeNotes, setChangeNotes] = useState(notes);

  useEffect(() => {
    // get type row based on name and house
  }, []);

  return (
    <>
      <div>
        <form>
          <h3>Update Instance</h3>
          <div className={styles.formInputGroup}>
            <label>Spell Name:</label>
            <input
              type="text"
              value={changeSpell}
              onChange={(e) => {
                setChangeSpell(e.target.value());
              }}
            ></input>
          </div>
          <div className={styles.formInputGroup}>
            <label>Wizard Name:</label>
            <input
              type="text"
              value={changeWizard}
              onChange={(e) => {
                setChangeWizard(e.target.value());
              }}
            ></input>
          </div>
          <div className={styles.formInputGroup}>
            <label>Notes:</label>
            <input
              type="text"
              value={changeNotes}
              onChange={(e) => {
                setChangeNotes(e.target.value());
              }}
            ></input>
          </div>

          <button type="submit">Edit Instance</button>
        </form>
      </div>
    </>
  );
};

export default EditInstance;
