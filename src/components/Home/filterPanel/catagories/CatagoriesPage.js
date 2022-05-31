const CatagoriesPage = ({ categoryList, handleCategory, selectedCategory }) => {
  return (
    <ul className="list-none">
      {categoryList.map((category) => (
        <li
          className={
            selectedCategory === category.value
              ? "bg-gray-900 text-white"
              : "text-gray-900"
          }
          key={category.id}
          onClick={() => handleCategory(category.value, category.id)}
        >
          {category.label}
        </li>
      ))}
    </ul>
  );
};

export default CatagoriesPage;
