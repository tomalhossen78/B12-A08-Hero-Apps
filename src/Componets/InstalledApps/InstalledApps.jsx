import React from "react";
import { getDataToLs } from "../../Utility/addToLS";
import CartItem from "./CartItem";
const InstalledApps = ({ data }) => {
  const storedID = getDataToLs();
  const filterData = data.filter((d) => storedID.includes(d.id));
  console.log(filterData);
  return (
    <div className="space-y-4">
      {filterData.map((app) => (
        <CartItem key={app.id} app={app} />
      ))}
    </div>
  );
};

export default InstalledApps;
