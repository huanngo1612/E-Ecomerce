import "./Categories.scss";

import dataCategory from "../../data/dataCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function Categories() {
  return (
    <div className="category-wrapper">
      <input
        type="checkbox"
        id="showCategories"
        className="showCategories"
        hidden
      />
      <label for="showCategories">
        <h4>
          Categories <FontAwesomeIcon icon={faChevronDown} />
        </h4>
      </label>
      <div className="category">
        {dataCategory.map((value, index) => {
          return (
            <div className="box" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
