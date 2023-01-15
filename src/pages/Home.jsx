import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCategoryId } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizza from "../components/Pizza";
import Skeleton from "../components/Pizza/Skeleton";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

export default function Home() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  console.log("id category", categoryId);

  // const setCategoryId = () => {};

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "raiting",
  });

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    async function fetchData() {
      const res = await fetch(
        `https://63a388c89704d18da09112fd.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortType.sortProperty}&order=desc${search} `
      );
      const item = await res.json();
      setItems(item);
      setIsLoading(false);
    }
    fetchData();
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);
  const pizzas = items
    // .filter((obj) => {
    //   if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // })
    .map((obj) => <Pizza {...obj} key={obj.id} />);

  const sceletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <>
      <div className="content__top">
        <Categories valueId={categoryId} onClickCategory={onClickCategory} />
        <Sort sortType={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sceletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
}
