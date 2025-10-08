import React, { useEffect, useState } from "react";
import { getDataToLs, removeToLS } from "../../Utility/addToLS";
import CartItem from "./CartItem";
const InstalledApps = ({ data }) => {
  const [cart, setCart] = useState([]);
  //   const [sort, setSort] = useState("");
  useEffect(() => {
    const storedID = getDataToLs();
    const filterData = data.filter((d) => storedID.includes(d.id));
    setCart(filterData);
  }, []);

  const handleSort = (type) => {
    if (type == "Low-high") {
      const SortedList = [...cart].sort((a, b) => a.size - b.size);
      setCart(SortedList);
    } else if (type == "high-low") {
      const SortedList = [...cart].sort((a, b) => b.size - a.size);
      setCart(SortedList);
    }
  };
  const handleRemove = (id) => {
    removeToLS(id);
    const upadateCart = [...cart].filter((item) => item.id !== id);
    setCart(upadateCart);
  };
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium text-[#001931]">
          {cart.length} Apps found
        </p>
        <label>
          <select
            className="select"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="Low-high">Low-High</option>
            <option value="high-low">High-Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-4">
        {cart.map((app) => (
          <CartItem key={app.id} handleRemove={handleRemove} app={app} />
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
