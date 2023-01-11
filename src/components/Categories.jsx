import React from "react";

function Categories({ valueId, onClickCategory }) {
  const categories = ["Все", "Кофе", "Чай", "Десерты"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={valueId === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
