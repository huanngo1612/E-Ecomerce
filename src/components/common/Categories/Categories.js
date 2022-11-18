import "../Categories/Categories.scss";
function Categories() {
  const data = [{ cateName: "Fashion" }];
  return (
    <div className="category">
      {data.map((value, index) => {
        return (
          <div className="box" key={index}>
            <span>{value.cateName}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
