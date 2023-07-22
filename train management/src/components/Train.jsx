import React from "react";
import Getlist from "./Getlist";

const MenuCard = ({ setTrain }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {setTrain.map((curElem) => {
          const { trainName, trainNumber, seatsAvailable, price } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{trainNumber}</span>
                    <span className="card-author subtle"> {trainName}</span>
                    <h2 className="card-title"> {seatsAvailable.sleeper} </h2>
                    <span className="card-description subtle">
                      {price}
                    </span>
                </div>
              </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
