import React from "react";
import VaseCard from "./VaseCard";

const VaseList = ({ vases }) => {
  return (
    <div className=" ">
      {vases.map((vase) => (
        <VaseCard key={vase.number} vase={vase} />
      ))}
    </div>
  );
};

export default VaseList;
