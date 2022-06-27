import React, { useEffect, useRef, useState } from "react";
import searchIcon from "../../../assets/images/search.png";
import { ReactComponent as XIcon } from "../../../assets/icon/close.svg";
import cs from "classnames";
import "./search-input.scss";
import CustomInput from "../CustomInput";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const SearchInput = (props) => {
  const { inputVal, handleChange } = props;
  const [searching, setSearching] = React.useState(inputVal);
  const [isInputOpen, setInputOpen] = useState(false);
  const searchRef = useRef();

  useOnClickOutside(searchRef, () => {
    closeSearchBar();
  });

  useEffect(() => {
    if (handleChange) handleChange(searching);
  }, [searching]);

  const openSearchBar = () => setInputOpen(true);

  const closeSearchBar = () => setInputOpen(!!searching);

  const clearSearch = (e) => {
    e.stopPropagation();
    setSearching("");
  };

  const handleSearchChange = ({ target: { value } }) => setSearching(value);

  return (
    <div
      className={cs("attribute-search-input", {
        ["transistion-search"]: isInputOpen,
      })}
      onClick={openSearchBar}
    >
      <img src={searchIcon} alt="search" className="mr-9 search-icon" />
      <CustomInput
        ref={searchRef}
        className="no-bordered"
        inputClassName="typography-14-regular c-grey-black-100"
        autoFocus={props.isAutoFocus}
        placeholder="Search"
        onChange={handleSearchChange}
        value={searching}
        {...props}
      />
      {isInputOpen && (
        <XIcon className="cursor-pointer" onClick={clearSearch} />
      )}
    </div>
  );
};

export default SearchInput;
