import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizza from "../components/Pizza";
import Skeleton from "../components/Pizza/Skeleton";
import { useEffect, useState } from "react";

export default function Home({ searchValue, setSearchValue }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "raiting",
  });

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const res = await fetch(
        `https://63a388c89704d18da09112fd.mockapi.io/items?${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${sortType.sortProperty}&order=desc `
      );
      const item = await res.json();
      setItems(item);
      setIsLoading(false);
    }
    fetchData();
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  const coffeeItems = items.filter((obj) => {
    if (obj.title.includes(searchValue)) {
      return true;
    }
    return false;
  });
  return (
    <>
      <div className="content__top">
        <Categories
          valueId={categoryId}
          onClickCategory={(id) => setCategoryId(id)}
        />
        <Sort sortType={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {/* {items.map((obj, id) => (
              <Skeleton {...obj} key={id} />
            ))} */}
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj, id) => <Pizza {...obj} key={id} />)}
      </div>
    </>
  );
}
