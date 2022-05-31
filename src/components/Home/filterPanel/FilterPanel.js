import React from "react";
import { categoryList, ratingList } from "../../../contents";
import CatagoriesPage from "./catagories/CatagoriesPage";
import CusinesFilter from "./cusines/CusinesFilter";
import SliderRange from "./sliderRange/SliderRange";

const FilterPanel = ({
  handleCategory,
  selectedCategory,
  handleStart,
  selectedStart,
  handleCusines,
  cusines,
  value,
  changePrice,
  clearFun,
}) => {
  return (
    <div className="w-full">
      <div className="text-right">
        <h4 onClick={clearFun}>Cleaer all</h4>
      </div>
      <div className="">
        <h4 className="text-lg font-semibold pl-3 capitalize py-2 my-3 bg-slate-500">
          Category
        </h4>
        <CatagoriesPage
          handleCategory={handleCategory}
          categoryList={categoryList}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold pl-3 capitalize py-2 my-3 bg-slate-500">
          Cusines
        </h4>
        <CusinesFilter cusines={cusines} handleCusines={handleCusines} />
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold pl-3 capitalize py-2 my-3 bg-slate-500">
          Range
        </h4>
        <div className="px-4 mt-10">
          <SliderRange value={value} changePrice={changePrice} />
        </div>
      </div>
      <div className="mt-5">
        <h4 className="text-lg font-semibold pl-3 capitalize py-2 my-3 bg-slate-500">
          start
        </h4>
        <CatagoriesPage
          handleCategory={handleStart}
          categoryList={ratingList}
          selectedCategory={selectedStart}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
