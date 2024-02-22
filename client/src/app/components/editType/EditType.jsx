"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const EditType = ({ name, description }) => {
  const [changeName, setChangeName] = useState(name);
  const [changeDescription, setChangeDescription] = useState(description);

  useEffect(() => {
    // get type row based on name and house
  }, []);

  return (
    <>
      <div>
        <form>
          <h3>Update Type</h3>
          <div className={styles.formInputGroup}>
            <label>Type Name:</label>
            <input
              type="text"
              value={changeName}
              onChange={(e) => {
                setChangeName(e.target.value());
              }}
            ></input>
          </div>
          <div className={styles.formInputGroup}>
            <label>Description:</label>
            <input
              type="text"
              value={changeDescription}
              onChange={(e) => {
                setChangeDescription(e.target.value());
              }}
            ></input>
          </div>

          <button type="submit">Edit Type</button>
        </form>
      </div>
    </>
  );
};

export default EditType;
