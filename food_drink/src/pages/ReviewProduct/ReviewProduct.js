import React from "react";
import "./ReviewProduct.css";
import Footer from "../../components/Footer/Footer";
// import Menu from "../../components/Menu";
class ReviewProduct extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          {/* <div className="block-item">
            <div className="block_1 col-md-4">
              <div className="img_1">
                <img></img>
              </div>
              <div>
                <h4>Tháng 6 năm 2020</h4>
                <p>Nước trái cây tự nhiên giúp thanh lọc cơ thể</p>
                <p className="content">
                  Nó mặc định là safari của tôi nhưng muốn đổi nó thành chrome.
                  Tôi đã xem xét các ưu tiên, nhưng dường như không có một lựa
                  chọn nào cho việc đó. Có ý kiến ​​gì không?
                </p>
              </div>
              <div>
                <a href="#">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="block_2 col-md-4">
              <div className="img_1">
                <img></img>
              </div>
              <div>
                <h4>Tháng 6 năm 2020</h4>
                <p>Nước trái cây tự nhiên giúp thanh lọc cơ thể</p>
                <p className="content">
                  Nó mặc định là safari của tôi nhưng muốn đổi nó thành chrome.
                  Tôi đã xem xét các ưu tiên, nhưng dường như không có một lựa
                  chọn nào cho việc đó. Có ý kiến ​​gì không?
                </p>
              </div>
              <div>
                <a href="#">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="block_3 col-md-4">
              <div className="img_1">
                <img></img>
              </div>
              <div>
                <h4>Tháng 6 năm 2020</h4>
                <p>Nước trái cây tự nhiên giúp thanh lọc cơ thể</p>
                <p className="content">
                  Nó mặc định là safari của tôi nhưng muốn đổi nó thành chrome.
                  Tôi đã xem xét các ưu tiên, nhưng dường như không có một lựa
                  chọn nào cho việc đó. Có ý kiến ​​gì không?
                </p>
              </div>
              <div>
                <a href="#">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="block_4 col-md-4">
              <div className="img_1">
                <img></img>
              </div>
              <div>
                <h4>Tháng 6 năm 2020</h4>
                <p>Nước trái cây tự nhiên giúp thanh lọc cơ thể</p>
                <p className="content">
                  Nó mặc định là safari của tôi nhưng muốn đổi nó thành chrome.
                  Tôi đã xem xét các ưu tiên, nhưng dường như không có một lựa
                  chọn nào cho việc đó. Có ý kiến ​​gì không?
                </p>
              </div >
              <div>
                <a href="#">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-3 item-block">
              <div className="item">
                <img src="./images/products/product_1.jpg" alt="review"></img>
                <div className="content">
                    <p>Tháng 6 năm 2020</p>
                    <h3>Trà sữa hương tự nhiên</h3>
                    <p>
                      Mỗi một hành động nhỏ của các bạn như thu gom, xử lý chất
                      thải...
                    </p>
                    <a href="#">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 item-block">
              <div className="item">
                <img src="./images/products/product_2.jpg" alt="review"></img>
                <div className="content">
                    <p>Tháng 6 năm 2020</p>
                    <h3>Trà sữa hương tự nhiên</h3>
                    <p>
                    Mừng ngày Quốc Tế Thiếu Nhi 1/6.
                    </p>
                    <a href="#">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 item-block">
              <div className="item">
                <img src="./images/products/product_3.jpg" alt="review"></img>
                <div className="content">
                    <p>Tháng 6 năm 2020</p>
                    <h3>Trà sữa hương tự nhiên</h3>
                    <p>
                      Mỗi một hành động nhỏ của các bạn như thu gom, xử lý chất
                      thải...
                    </p>
                    <a href="#">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 item-block">
              <div className="item">
                <img src="./images/products/product_5.jpg" alt="review"></img>
                <div className="content">
                    <p>Tháng 6 năm 2020</p>
                    <h3>Trà sữa hương tự nhiên</h3>
                    <p>
                      Mỗi một hành động nhỏ của các bạn như thu gom, xử lý chất
                      thải...
                    </p>
                    <a href="#">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row row2">
            <div className="col-md-3 item-block">
              <div className="item">
                <img src="./images/products/product_1.jpg" alt="review"></img>
                <div className="content">
                    <p>Tháng 6 năm 2020</p>
                    <h3>Trà sữa hương tự nhiên</h3>
                    <p>
                      Mỗi một hành động nhỏ của các bạn như thu gom, xử lý chất
                      thải...
                    </p>
                    <a href="#">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 item-block">
              <div className="item">
                <img src="./images/products/product_2.jpg" alt="review"></img>
                <div className="content">
                    <p>Tháng 6 năm 2020</p>
                    <h3>Trà sữa hương tự nhiên</h3>
                    <p>
                      Mỗi một hành động nhỏ của các bạn như thu gom, xử lý chất
                      thải...
                    </p>
                    <a href="#">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 item-block">
              <div className="item">
                <img src="./images/products/product_3.jpg" alt="review"></img>
                <div className="content">
                    <p>Tháng 6 năm 2020</p>
                    <h3>Trà sữa hương tự nhiên</h3>
                    <p>
                      Mỗi một hành động nhỏ của các bạn như thu gom, xử lý chất
                      thải...
                    </p>
                    <a href="#">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
              </div >
            </div>
            <div className="col-md-3 item-block">
              <div className="item">
                <img src="./images/products/product_5.jpg" alt="review"></img>
                <div className="content">
                    <p>Tháng 6 năm 2020</p>
                    <h3>Trà sữa hương tự nhiên</h3>
                    <p>
                      Mỗi một hành động nhỏ của các bạn như thu gom, xử lý chất
                      thải...
                    </p>
                    <a href="#">
                      <i className="fas fa-arrow-right ten"></i>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ReviewProduct;
