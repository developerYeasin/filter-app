import React, { useCallback } from "react";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ inputSearch, setInputSearch, changeInput }) => {
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 300);
    };
  };

  const optimisedVersion = useCallback(debounce(changeInput), []);

  const changeHangle = (e) => {
    optimisedVersion(e);
    setInputSearch(e.target.value);
  };

  return (
    <div className="border-b-2 border-solid border-[#888] py-4 pl-2 flex items-center ">
      <SearchIcon className="" />
      <input
        type="text"
        placeholder="woodland Hills"
        value={inputSearch}
        onChange={changeHangle}
        className="text-[25px] border-0 focus:outline-0 ml-6 w-full "
      />
    </div>
  );
};

export default SearchBar;
