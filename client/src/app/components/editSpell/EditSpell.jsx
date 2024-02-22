"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const EditSpell = ({ name, type, description }) => {
  const [changeName, setChangeName] = useState(name);
  const [changeType, setChangeType] = useState(type);
  const [changeDescription, setChangeDescription] = useState(description);

  useEffect(() => {
    // get spell row based on name
  }, []);

  const dummyTypeData = [
    { type_name: "Transfiguration" },
    { type_name: "Charm" },
    { type_name: "Jinx" },
    { type_name: "Hex" },
    { type_name: "Curse" },
    { type_name: "Counter-spell" },
    { type_name: "Healing spell" },
  ];

  const TypeOption = ({ name }) => {
    return (
      <React.Fragment>
        <option>{name}</option>
      </React.Fragment>
    );
  };

  return (
    <>
      <div>
        <form>
          <h3>Update Spell</h3>
          <div className={styles.formInputGroup}>
            <label>Spell Name:</label>
            <input
              type="text"
              value={changeName}
              onChange={(e) => {
                setChangeName(e.target.value());
              }}
            ></input>
          </div>
          <div className={styles.formInputGroup}>
            <label>Type:</label>
            <select
              type="text"
              value={changeType}
              onChange={(e) => {
                setChangeType(e.target.value());
              }}
            >
              {dummyTypeData.map((type) => {
                return <TypeOption name={type.type_name} />;
              })}
            </select>
          </div>
          <div className={styles.formInputGroup}>
            <label>Description:</label>
            <input
              value={changeDescription}
              onChange={(e) => {
                setChangeDescription(e.target.value());
              }}
            ></input>
          </div>
          <button type="submit">Edit Wizard</button>
        </form>
      </div>
    </>
  );
};

export default EditSpell;
