import "../Product/DetailProduct.scss";
import Products from "../../data/dataProduct.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
function DetailProduct() {
  const { id } = useParams();
  const product = Products.find((product) => product.id === id);
  const [imgMain, setImgMain] = useState(product.image[0]);
  const handleChangImg = (e) => {
    setImgMain(e.target.currentSrc);
  };
  const img = product.image;

  return (
    <div className="detail-product-wrapper">
      <div className="product-img">
        <img src={imgMain} alt="" />
        <div className="small-img-group">
          {img.map((item, index) => (
            <div className="smaill-img-col" key={index}>
              <img src={item} onClick={handleChangImg} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="product-details">
        <h4> {product.name}</h4>
        <h2>{product.price}</h2>
        <input type="number" value="1" />
        <button>Add to Cart</button>
        <h4>Product Detais</h4>
        <span>{product.description}</span>
      </div>
    </div>
  );
}

export default DetailProduct;
