"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import HouseDisplay from "@/components/houseDisplay/houseDisplay";

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

  return (
    <>
      {/* {houseInfo ? (
        <div>
          <h1>Houses</h1>
        </div>
      ) : (
        <span>loading</span>
      )} */}

      <div className={styles.container}>
        <h1>Hogwarts Houses</h1>

        <div className={styles.addHouseContainer}>
          <h3>Add a House</h3>

          <form className={styles.addHouseForm}>
            <div className={styles.addHouseInput}>
              <label>House Name:</label>
              <input type="text" placeholder="Hogwarts"></input>
            </div>
            <div className={styles.addHouseInput}>
              <label>House Founder:</label>
              <input type="text" placeholder="Dumbledore"></input>
            </div>
            <button>Add House</button>
          </form>
        </div>
        <div className={styles.displayHousesContainer}>
          <h3>List of Houses:</h3>
          <table className={styles.displayHousesTable}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Founder</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td>Gryffindor</td>
                <td>Godric Gryffindor</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Hufflepuff</td>
                <td>Helga Hufflepuff</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Ravenclaw</td>
                <td>Rowena Ravenclaw</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Slytherin</td>
                <td>Salazar Slytherin</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
