import "../Categories/Categories.scss";
import cat1 from "../../../assets/images/cat1.png";
import cat2 from "../../../assets/images/cat2.png";
import cat3 from "../../../assets/images/cat3.png";
import cat4 from "../../../assets/images/cat4.png";
import cat5 from "../../../assets/images/cat5.png";
import cat6 from "../../../assets/images/cat6.png";

function Categories() {
  const data = [
    {
      cateImg: cat1,
      cateName: "Fashion",
    },
    {
      cateImg: cat2,
      cateName: "Electronic",
    },
    {
      cateImg: cat3,
      cateName: "Cars",
    },
    {
      cateImg: cat5,
      cateName: "Home & Garden",
    },
    {
      cateImg: cat5,
      cateName: "Gifts",
    },
    {
      cateImg: cat5,
      cateName: "Music",
    },
    {
      cateImg: cat5,
      cateName: "Health & Beauty",
    },
    {
      cateImg: cat5,
      cateName: "Pets",
    },
    {
      cateImg: cat5,
      cateName: "Baby Toys",
    },
    {
      cateImg: cat5,
      cateName: "Groceries",
    },
    {
      cateImg: cat5,
      cateName: "Groceries",
    },
    {
      cateImg: cat5,
      cateName: "Groceries",
    },
    {
      cateImg: cat5,
      cateName: "Groceries",
    },
    {
      cateImg: cat5,
      cateName: "Groceries",
    },
    {
      cateImg: cat5,
      cateName: "Books",
    },
  ];
  return (
    <div className="category">
      {data.map((value, index) => {
        return (
          <div className="box" key={index}>
            <img src={value.cateImg} alt="" />
            <span>{value.cateName}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
