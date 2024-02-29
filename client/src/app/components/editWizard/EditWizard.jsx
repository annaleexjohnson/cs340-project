"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { IoIosCloseCircle } from "react-icons/io";

import { useAppContext } from "../../context/index.js";

const EditWizard = ({ name, house, graduated }) => {
  const { editWizardModal, setEditWizardModal } = useAppContext();
  const [changeName, setChangeName] = useState(name);
  const [changeHouse, setChangeHouse] = useState(house);
  const [changeGraduated, setChangeGraduated] = useState(graduated);
  const [loading, setLoading] = useState("");

  const updateWizard = async (e) => {
    e.preventDefault();

    setLoading("Loading...");

    await fetch("/api/updateWizardsRoute", {
      method: "POST",
      body: JSON.stringify({
        newName: changeName,
        newHouse: changeHouse,
        newGraduated: changeGraduated,
        originalName: name,
        originalHouse: house,
        originalGraduated: graduated,
      }),
    }).then((res) => {
      setLoading("");

      if (res.status === 200) {
        alert("Updated wizard");
      } else {
        alert("Couldn't update wizard :(");
      }
    });

    setEditWizardModal(false);
  };

  return (
    <>
      <div className={styles.editWizardContainer}>
        <div
          className={styles.closeEditModal}
          onClick={() => {
            setEditWizardModal(false);
          }}
        >
          <IoIosCloseCircle />
        </div>
        <h3>Update Wizard</h3>

        <form>
          <div className={styles.formInputGroup}>
            <label>Wizard Name:</label>
            <input
              type="text"
              value={changeName}
              onChange={(e) => {
                setChangeName(e.target.value);
              }}
            ></input>
          </div>
          <div className={styles.formInputGroup}>
            <label>Wizard House:</label>
            <input
              type="text"
              value={changeHouse}
              onChange={(e) => {
                setChangeHouse(e.target.value);
              }}
            ></input>
          </div>
          <div className={styles.formInputGroup}>
            <label>Graduated?</label>
            <select
              onChange={(e) => {
                setChangeGraduated(e.target.value);
              }}
            >
              <option value={1}>--</option>
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>

          <div>{loading}</div>
        </form>
        <button
          onClick={(e) => {
            updateWizard(e);
          }}
        >
          Edit Wizard
        </button>
      </div>
    </>
  );
};

export default EditWizard;
