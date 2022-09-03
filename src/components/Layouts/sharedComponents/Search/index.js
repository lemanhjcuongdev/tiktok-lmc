import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faCircleXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";

import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import styles from "./Search.module.scss";
import { useDebounce } from "~/hooks";
import * as searchServices from "~/apiServices/searchServices";

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [inputFocus, setinputFocus] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const inputDebounced = useDebounce(searchValue.trim(), 800);
  useEffect(() => {
    if (!inputDebounced.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchAPI = async () => {
      setLoading(true);

      const result = await searchServices.search(inputDebounced);
      setSearchResult(result);

      setLoading(false);
    };
    //async
    fetchAPI();
    //HTTP request
  }, [inputDebounced]);

  const handleClear = () => {
    inputRef.current.focus();
    setSearchValue("");
    setSearchResult([]);
  };
  const handleInputUnfocus = () => {
    setinputFocus(false);
  };

  return (
    <HeadlessTippy
      interactive
      zIndex={1}
      visible={inputFocus && searchValue.length > 0}
      onClickOutside={handleInputUnfocus}
      placement="bottom-start"
      render={(attrs) => (
        <div className={cx("search-results")} tabIndex="-1" {...attrs}>
          {inputDebounced &&
            !loading &&
            (searchResult.length > 0 ? (
              <PopperWrapper>
                <h4 className={cx("search-label")}>Accounts</h4>
                {searchResult.map((result) => (
                  <AccountItem key={result.id} data={result} />
                ))}
              </PopperWrapper>
            ) : (
              <PopperWrapper>{<h4 className={cx("search-label")}>No result 😧</h4>}</PopperWrapper>
            ))}
        </div>
      )}
    >
      <div className={cx("searchbar")}>
        {/* <form> */}
        <input
          ref={inputRef}
          type="text"
          placeholder="Search accounts, videos, more and more... "
          spellCheck={false}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onFocus={() => setinputFocus(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx("clear-btn")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx("loading")} icon={faCircleNotch} />}

        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        {/* </form> */}
      </div>
    </HeadlessTippy>
  );
}

export default Search;
