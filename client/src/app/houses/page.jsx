"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import AddHouse from "../components/addHouse/AddHouse";
import { MdDeleteForever } from "react-icons/md";

export default function Houses() {
  const [houseInfo, setHouseInfo] = useState([]);

  // fetch house names on page load
  useEffect(() => {
    const fetchHouseInfo = async () => {
      const res = await fetch("/api/houseInfo", {
        method: "GET",
      });
      const houses = await res.json();
      console.log(houses);
      setHouseInfo(houses);
    };

    fetchHouseInfo();
  }, []);

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

  const dummyHouseData = [
    { house_name: "Gryffindor", house_founder: "Godric Gryffindor" },
    { house_name: "Hufflepuff", house_founder: "Helga Hufflepuff" },
    { house_name: "Ravenclaw", house_founder: "Rowena Ravenclaw" },
    { house_name: "Slytherin", house_founder: "Salazar Slytherin" },
  ];

  return (
    <>
      {dummyHouseData && (
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
                {dummyHouseData.map((house, index) => {
                  return (
                    <HouseRow
                      name={house.house_name}
                      founder={house.house_founder}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <AddHouse />
        </div>
      )}
    </>
  );
}
