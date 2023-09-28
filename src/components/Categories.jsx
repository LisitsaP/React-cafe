import React from "react";

function Categories({ valueId, onClickCategory }) {
  const categories = ["Все", "Мясные", "Вегатерианская", "Гриль", "Острые"];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={valueId === i ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
