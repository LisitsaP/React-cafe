import React, { useContext } from "react";
import { BiSearch, BiX } from "react-icons/bi";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

export default function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const onClickClear = () => {
    setSearchValue("");
    document.querySelector("input").focus();
  };
  return (
    <div className={styles.root}>
      <BiSearch className={styles.icon} />
      <input
        value={searchValue}
        placeholder="поиск"
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
      />
      {searchValue && (
        <BiX onClick={onClickClear} className={styles.iconCloce} />
      )}
    </div>
  );
}
