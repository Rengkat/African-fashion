import React from "react";
import Stylist from "../../components/Stylist";
const stylists = [1, 2, 3, 4, 5, 0, 6, 7, 8, 9];
const sellers = () => {
  return (
    <div className="w-[95%] md:w-[95%] xl:w-[80%] mt-5 mx-auto">
      <h1 className="text-xl lg:text-4xl font-light">STYLISTS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
        {stylists.map((stylist) => {
          return (
            <>
              <Stylist />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default sellers;
