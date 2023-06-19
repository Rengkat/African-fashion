"use client";
import Display from "../../../components/Display";
import { useState } from "react";

const me = [1, 3, 4, 5, 6, 7, 8, 8, 2, 4, 6, 7];
const shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };

  let content;
  if (selectedCategory === "all") {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5 lg:my-8">
        {me.map((product) => {
          return (
            <>
              <Display />
            </>
          );
        })}
      </div>
    );
  } else if (selectedCategory === "men-native") {
    content = <div>Men Native</div>;
  } else if (selectedCategory === "women-native") {
    content = <div>Women Native</div>;
  } else if (selectedCategory === "men-cooperate") {
    content = <div>Men Cooperate</div>;
  } else if (selectedCategory === "women-cooperate") content = <div>Women Cooperate</div>;
  return (
    <div className="w-[95%] md:w-[95%] xl:w-[80%] mt-5 mx-auto">
      <div>
        <nav className="w-full flex flex-col lg:flex-row list-none text-[15px] font-light bg-slate-200">
          <div
            className="my-[2px] lg:my-0 hover:bg-slate-300 cursor-pointer py-3 uppercase px-4"
            onClick={() => handleCategoryClick("all")}>
            All Categories
          </div>
          <div
            className="my-[2px] lg:my-0 hover:bg-slate-300 cursor-pointer py-3 uppercase px-4"
            onClick={() => handleCategoryClick("men-native")}>
            Men Native Wears
          </div>
          <div
            className="my-[2px] lg:my-0 hover:bg-slate-300 cursor-pointer py-3 uppercase px-4"
            onClick={() => handleCategoryClick("men-cooperate")}>
            Men Cooperate Wears
          </div>
          <div
            className="my-[2px] lg:my-0 hover:bg-slate-300 cursor-pointer py-3 uppercase px-4"
            onClick={() => handleCategoryClick("women-native")}>
            Women Native Wears
          </div>
          <div
            className="my-[2px] lg:my-0 hover:bg-slate-300 cursor-pointer py-3 uppercase px-4"
            onClick={() => handleCategoryClick("women-cooperate")}>
            Women Cooperate Wears
          </div>
        </nav>
        <div className="">{content}</div>
      </div>
    </div>
  );
};

export default shop;
