"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useAppContext } from "../../context/index";

const AddWizard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [house, setHouse] = useState(null);
  const [graduated, setGraduated] = useState(null);
  const [housesList, setHousesList] = useState(null);
  const { addWizardModal, setAddWizardModal } = useAppContext();

  useEffect(() => {
    const fetchHouseNames = async () => {
      await fetch("/api/houseInfo", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setHousesList(data.houseInfo);
        });
    };

    fetchHouseNames();
  }, []);

  const resetAddForm = () => {
    setFirstName("");
    setLastName("");
    setGraduated(null);
    setHouse(null);
  };

  const HouseOption = ({ houseName }) => {
    return (
      <React.Fragment>
        <option value={houseName}>{houseName}</option>
      </React.Fragment>
    );
  };

  const addWizard = async (e) => {
    e.preventDefault();
    await fetch("/api/addWizardsRoute", {
      method: "POST",
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        graduated: graduated,
        house: house,
      }),
    }).then((res) => {
      if (res.status === 200) {
        alert("Added wizard");
        setAddWizardModal(false);
        resetAddForm();
      } else {
        alert("Couldn't add wizard :(");
      }
    });
  };

  return (
    <>
      <div className={styles.addWizardContainer}>
        <div
          className={styles.closeAddModal}
          onClick={() => {
            resetAddForm();
            setAddWizardModal(false);
          }}
        >
          <IoIosCloseCircle />
        </div>
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
              required
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
              required
              value={lastName}
              type="text"
              placeholder="Potter"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            ></input>
          </div>

          {/* Hogwarts House */}
          {housesList && (
            <div className={styles.formInputGroup}>
              <label>House:</label>
              <select
                required
                value={house}
                onChange={(e) => {
                  setHouse(e.target.value);
                }}
              >
                <option>--</option>
                {housesList.map((house, index) => {
                  return (
                    <HouseOption key={index} houseName={house.house_name} />
                  );
                })}
              </select>
            </div>
          )}

          <div className={styles.formInputGroup}>
            <label>Graduated?</label>
            <select
              required
              onChange={(e) => {
                setGraduated(e.target.value);
              }}
            >
              <option value={0}>--</option>
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>

          <button
            type="submit"
            onClick={(e) => {
              addWizard(e);
            }}
          >
            Add Wizard
          </button>
        </form>
      </div>
    </>
  );
};

export default AddWizard;
