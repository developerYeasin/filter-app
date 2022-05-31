import React, { useEffect, useState } from "react";
import FilterPanel from "../../components/Home/filterPanel/FilterPanel";
import List from "../../components/Home/list/List";
import SearchBar from "../../components/Home/searchBar/SearchBar";
import { dataList } from "../../contents";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStart, setSelectedStart] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [allListItem, setAllListItem] = useState(dataList);
  const [searchInput, setSearchInput] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [selectCusines, setSelectCusines] = useState([
    { id: 1, checked: false, label: "american" },
    { id: 2, checked: false, label: "italian" },
    { id: 3, checked: false, label: "chinese" },
  ]);

  const handleCategory = (value, id) =>
    !value ? null : setSelectedCategory(value);

  const handleStart = (value, id) => (!value ? null : setSelectedStart(value));

  const handleCusines = (id) => {
    const newCusines = selectCusines.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setSelectCusines(newCusines);
  };
  const hanldeChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilter = () => {
    let updatedList = dataList;

    if (selectedStart) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedStart)
      );
    }
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    const checkedCusines = selectCusines
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (checkedCusines.length > 0) {
      updatedList = updatedList.filter((item) =>
        checkedCusines.includes(item.cuisine)
      );
    }

    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    console.log(updatedList);
    setAllListItem(updatedList);
  };

  useEffect(() => {
    applyFilter();
  }, [
    selectedStart,
    selectedCategory,
    selectCusines,
    selectedPrice,
    searchInput,
  ]);

  console.log(allListItem);

  const clearFun = () => {
    setSelectedCategory(null);
    setSelectedStart(null);
    setSelectedPrice([1000, 5000]);
    setAllListItem(dataList);
    setSearchInput("");
    setInputSearch("");
    setSelectCusines([
      { id: 1, checked: false, label: "american" },
      { id: 2, checked: false, label: "italian" },
      { id: 3, checked: false, label: "chinese" },
    ]);
  };

  return (
    <div className="flex flex-col h-screen">
      <SearchBar
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        changeInput={(e) => setSearchInput(e.target.value)}
      />

      <div className="flex flex-1 overflow-y-auto ">
        <div className=" basis-[280px] overflow-y-auto  border-r border-solid ">
          <FilterPanel
            handleCategory={handleCategory}
            selectedCategory={selectedCategory}
            handleStart={handleStart}
            selectedStart={selectedStart}
            cusines={selectCusines}
            handleCusines={handleCusines}
            value={selectedPrice}
            changePrice={hanldeChangePrice}
            clearFun={clearFun}
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          <List allListItem={allListItem} />
        </div>
      </div>
    </div>
  );
};

export default Home;
