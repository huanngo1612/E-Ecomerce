import { useRef, useState } from "react";
import { Container, Row, Col, FormGroup, Label } from "reactstrap";
import addImage from "../../../assets/images/addImage.png";
import imgDefault from "../../../assets/images/img_default.png";
import Helmet from "../../Helmet/Helmet";
import "./AddAuction.scss";

function AddAuction() {
  const nameRef = useRef();
  const decRef = useRef();
  const priceStartRef = useRef();
  const priceRef = useRef();
  const bidRef = useRef();
  const durationdRef = useRef();

  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    console.log(e.target.files);
    let reader = new FileReader();
    let file = e.target.files[0];
    if (!file) {
      return;
    }

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const dueDate = currentDate.setHours(
      currentDate.getDate() + durationdRef.current.value
    );
    console.log(durationdRef.current.value);
    console.log(currentDate.setHours(currentDate.getHours()));
    localStorage.setItem("duration", JSON.stringify(dueDate));
  };

  return (
    <Helmet title="Add Product">
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex  justify-content-center">
                <h3>Đăng sản phẩm </h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <FormGroup className="form-group">
                <Label>Tên sản phẩm</Label>
                <input
                  type="text"
                  placeholder="Tên sản phẩm"
                  required
                  ref={nameRef}
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Label>Thêm mô tả chi tiết sản phẩm</Label>
                <input
                  type="text"
                  placeholder="Mô tả sản phẩm"
                  required
                  ref={decRef}
                />
              </FormGroup>
              <FormGroup className="form-group">
                <input
                  id="file"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => handleImageChange(e)}
                />
                <Label className="add-img" htmlFor="file">
                  <img src={addImage} alt="addImage" />
                  <span>Add an Image</span>
                </Label>
                <img
                  id="image"
                  className="image-product"
                  src={preview ? preview : imgDefault}
                  alt="preview"
                />
              </FormGroup>
            </Col>
            <Col lg="4">
              <FormGroup className="form-group">
                <Label>Giá khởi điểm</Label>
                <input
                  type="text"
                  placeholder="Nhập giá khởi điểm"
                  required
                  ref={priceStartRef}
                />
                <Label>Bước giá</Label>
                <input
                  type="text"
                  placeholder="Nhập bước giá"
                  required
                  ref={bidRef}
                />
                <Label>Giá mua ngay</Label>
                <input
                  type="text"
                  placeholder="Nhập giá mua ngay"
                  required
                  ref={priceRef}
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Label>Danh mục</Label>
                <select name="dropdown">
                  <option value="Physics">Physics</option>
                  <option value="Maths">Maths</option>
                </select>
              </FormGroup>
              <FormGroup className="form-group">
                <Label>Số giờ</Label>
                <input
                  type="text"
                  placeholder="Nhập số giờ"
                  required
                  ref={durationdRef}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <div className="d-flex justify-content-end">
                <button className="btn-add-product" onClick={submitForm}>
                  Thêm
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default AddAuction;
