import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizza from "../components/Pizza";
import Skeleton from "../components/Pizza/Skeleton";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

export default function Home() {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  // const sortType = useSelector((state) => state.filter.sort.sortProperty);
  console.log("id category", categoryId);

  // const setCategoryId = () => {};

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [currentPage, setCurrentPage] = React.useState(1);
  // const [sortType, setSortType] = React.useState({
  //   name: "популярности",
  //   sortProperty: "raiting",
  // });
  // "homepage": "https://LisitsaP.github.io/React-cafe", json

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    async function axiosData() {
      const res = await axios
        .get(
          `https://63a388c89704d18da09112fd.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort.sortProperty}&order=desc${search} `
        )
        .then((res) => {
          setItems(res.data);
          setIsLoading(false);
        });
    }
    axiosData();
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);
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
        {/* <Sort sortType={sortType} onChangeSort={(id) => setSortType(id)} /> */}
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sceletons : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
}
