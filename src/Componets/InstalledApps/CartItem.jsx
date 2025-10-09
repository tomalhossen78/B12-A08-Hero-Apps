import React from "react";
import downlaodImg from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";
const CartItem = ({ app, handleRemove }) => {
  const { downloads, image, id, ratingAvg, size, title } = app;
  return (
    <div className="flex justify-between items-center bg-white py-2 px-4">
      <div className="flex items-center justify-between gap-2 md:gap-6">
        <img className="md:h-[60px] h-[50px] rounded-lg" src={image} alt="" />
        <div className="space-y-1 text-left">
          <h3 className="text-xl font-medium text-[#001931]">{title}</h3>
          <div className="flex justify-start gap-2 items-center">
            <div className="flex justify-center items-center gap-1">
              <img className="w-3" src={downlaodImg} alt="" />
              <p className="text-[#00D390]">{downloads / 1000000}M</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img className="w-3" src={ratingsImg} alt="" />
              <p className="text-[#FF8811]">{ratingAvg}</p>
            </div>
            <p className="text-[#627382]">{size}MB</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleRemove(id)}
        className="btn bg-[#00D390] text-white"
      >
        Uninstall
      </button>
    </div>
  );
};

export default CartItem;
