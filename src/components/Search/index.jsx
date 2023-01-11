import React from "react";
import { BiSearch, BiX } from "react-icons/bi";
import styles from "./Search.module.scss";

export default function Search({ searchValue, setSearchValue }) {
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
        <BiX onClick={() => setSearchValue("")} className={styles.iconCloce} />
      )}
    </div>
  );
}
