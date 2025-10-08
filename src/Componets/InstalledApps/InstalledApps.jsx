import React from "react";
import { getDataToLs } from "../../Utility/addToLS";
import CartItem from "./CartItem";
const InstalledApps = () => {
  console.log(getDataToLs());
  return (
    <div className="space-y-4">
      {getDataToLs().map((app) => (
        <CartItem />
      ))}
    </div>
  );
};

export default InstalledApps;
