import React, { useContext } from "react";
import { BiSearch, BiX } from "react-icons/bi";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";
import { useRef } from "react";

export default function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };
  return (
    <div className={styles.root}>
      <BiSearch className={styles.icon} />
      <input
        ref={inputRef}
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
