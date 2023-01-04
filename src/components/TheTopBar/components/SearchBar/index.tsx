import "./index.scss";

import { useState } from "react";
import { showToast } from "../../../../utils/showToast";
import { useShowDropDown } from "../../hooks/useShowDropDown";
import searchImg from "../../images/search.svg";
import Dropdown from "../Dropdown";

function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const { showDropDown, setShowDropDown } = useShowDropDown();
  function search() {
    if (!keyword) return showToast("关键词为空", "warning");
    setShowDropDown(false);
  }
  return (
    <div 
      className="c-the_top_bar-middle-search_bar"
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="text"
        placeholder="搜索"
        value={keyword}
        onFocus={()=>{
          setShowDropDown(true);
        }}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && search()}
      />
      <img src={searchImg} className="icon" onClick={search}/>
      {showDropDown && <Dropdown/>}
    </div>
  );
}

export default SearchBar;
