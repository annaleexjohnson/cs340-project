"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import AddHouse from "../components/addHouse/AddHouse";
import { MdDeleteForever } from "react-icons/md";

export default function Houses() {
  // const [houseInfo, setHouseInfo] = useState({});

  // fetch house names on page load
  // useEffect(() => {
  //   const fetchHouseInfo = async () => {
  //     const res = await fetch("/api/houseInfo", {
  //       method: "GET",
  //     });
  //     const houses = await res.json();
  //     setHouseInfo(houses);
  //   };

  //   fetchHouseInfo();
  // }, []);

  const houseInfo = [
    { houseName: "Gryffindor", houseFounder: "Godric Gryffindor" },
    { houseName: "Hufflepuff", houseFounder: "Helga Hufflepuff" },
    { houseName: "Ravenclaw", houseFounder: "Rowena Ravenclaw" },
    { houseName: "Slytherin", houseFounder: "Salazar Slytherin" },
  ];

  const HouseRow = ({ name, founder }) => {
    return (
      <React.Fragment>
        <tr>
          <td>{name}</td>
          <td>{founder}</td>
          <td className={styles.deleteButton}>
            <MdDeleteForever />
          </td>
        </tr>
      </React.Fragment>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Hogwarts Houses</h1>
        <div className={styles.displayHousesContainer}>
          <h3>List of Houses:</h3>
          <table className={styles.displayHousesTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Founder</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {houseInfo.map((house, index) => {
                return (
                  <HouseRow
                    name={house.houseName}
                    founder={house.houseFounder}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <AddHouse />
      </div>
    </>
  );
}
