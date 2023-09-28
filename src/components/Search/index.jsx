import React, { useContext } from "react";
// import { BiSearch, BiX } from "react-icons/bi";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";
import { SearchContext } from "../../App";
import { useRef, useCallback, useState } from "react";

export default function Search() {
  const [value, setValue] = useState("");
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 300),
    []
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className={styles.root}>
      {/* <BiSearch className={styles.icon} /> */}
      <input
        ref={inputRef}
        value={value}
        placeholder="поиск"
        onChange={onChangeInput}
        className={styles.input}
      />
      {/* {value && <BiX onClick={onClickClear} className={styles.iconCloce} />} */}
    </div>
  );
}
