import React from 'react';
import "./HomePage.css"
import ProductSlider from "../../components/ProductSlider/ProductSlider"
import ProductCategory from "../../components/ProductCategory/ProductCategory"
import Footer from "../../components/Footer/Footer"

class HomePage extends React.Component {
    render() {
        let categorys = ["Trà sữa", "Sinh tố", "Cafe", "Điểm tâm"]
        return (
            <>
                <div className="banner">
                    <div id="carousel-example-generic" className="carousel slide" data-interval="false" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active">1</li>
                            <li data-target="#carousel-example-generic" data-slide-to="1">2</li>
                            <li data-target="#carousel-example-generic" data-slide-to="2">3</li>
                            <li data-target="#carousel-example-generic" data-slide-to="3">4</li>
                            <li data-target="#carousel-example-generic" data-slide-to="4">5</li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <img src="./images/banner1.jpg" alt="..." />
                                <div className="carousel-caption">
                                    ...
                            </div>
                            </div>
                            <div className="item">
                                <img src="./images/banner2.jpg" alt="..." />
                                <div className="carousel-caption">
                                    ...
                             </div>
                            </div>
                            <div className="item">
                                <img src="./images/banner3.jpg" alt="..." />
                                <div className="carousel-caption">
                                    ...
                            </div>
                            </div>
                            <div className="item">
                                <img src="./images/banner4.jpg" alt="..." />
                                <div className="carousel-caption">
                                    ...
                            </div>
                            </div>
                            <div className="item">
                                <img src="./images/banner5.jpg" alt="..." />
                                <div className="carousel-caption">
                                    ...
                            </div>
                            </div>

                        </div>
                        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div className="introduce">
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <div className="introduce_information">
                                    <h6>Bumba 소개</h6>
                                    <h2>Về Bumba</h2>
                                    <p>Bumba là thương hiệu trà sữa có nguồn gốc Việt Nam. Nguyên vật liệu được kiểm duyệt và nhập khẩu từ Singapore và Đài Loan. Là thương hiệu đại diện cho sản phẩm chất lượng và giá thành hợp lí.</p>
                                    <a href="#sad">Xem thêm</a>
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="introduce_img">
                                    <img src="./images/img_introduce.jpg" alt="images introduce" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productSlider">
                    <div class="container">
                        <div class="row">
                            <div className="title">
                                <h6>제품</h6>
                                <h2>Sản Phẩm Nổi Bật</h2>
                                <p>Chào các bạn đến với thiên đường vị giác của Bumba, Menu Bumba rất đa dạng món uống, dùng để đáp ứng khẩu vị "ưa chua chuộng béo" của bạn. Order và thưởng thức ngay nhé</p>
                            </div>
                            <ProductSlider onClickSlider={"ProductSlider"} />
                        </div>
                    </div>
                </div>
                {this.showProductCategory(categorys)}
                <div className="search_bumba">
                    <h2>#TraSuaBumba</h2>
                    <ul>
                        <li><img src="./images/searchs/search_1.jpg" alt="search"/></li>
                        <li><img src="./images/searchs/search_2.jpg" alt="search"/></li>
                        <li><img src="./images/searchs/search_3.jpg" alt="search"/></li>
                        <li><img src="./images/searchs/search_4.jpg" alt="search"/></li>
                        <li><img src="./images/searchs/search_5.jpg" alt="search"/></li>
                        <li><img src="./images/searchs/search_6.jpg" alt="search"/></li>
                    </ul>
                </div>
                <Footer/>
            </>
        );
    }
    showProductCategory = (categorys) => {
        let result = null;
        if (categorys.length > 0) {
            result = categorys.map((category, index) => {
                return (
                    <ProductCategory
                        key={index}
                        name={category}
                        id={index}
                    />
                )
            })
        }
        return result;
    }
}

export default HomePage;
