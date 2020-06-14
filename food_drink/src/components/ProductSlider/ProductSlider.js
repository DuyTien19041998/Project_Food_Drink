import React from "react"
import "./ProductSlider.css"

class ProductSlider extends React.Component {

    render() {
        var myCarousel = this.props.onClickSlider
        return (
            <div class="well">
                <div id={myCarousel} class="carousel slide" data-interval="0">
                    <div class="carousel-inner">
                        <div class="item active">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="thumbnail">
                                        <span className="like_product"><i class="fas fa-heart"></i></span>
                                        <img src="./images/products/product_1.jpg" alt="Slide11" />
                                        <a href="#adasd" className="detailt_product">Xem chi tiết</a>
                                        <div class="caption">
                                            <h4>Trà tửa</h4>
                                            <p>35K</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="thumbnail">
                                        <span className="like_product"><i class="fas fa-heart"></i></span>
                                        <img src="./images/products/product_2.jpg" alt="Slide11" />
                                        <a href="#adasd" className="detailt_product">Xem chi tiết</a>
                                        <div class="caption">
                                            <h4>Trà tửa</h4>
                                            <p>35K</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="thumbnail">
                                        <span className="like_product"><i class="fas fa-heart"></i></span>
                                        <img src="./images/products/product_3.jpg" alt="Slide11" />
                                        <a href="#adasd" className="detailt_product">Xem chi tiết</a>
                                        <div class="caption">
                                            <h4>Trà tửa</h4>
                                            <p>35K</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="thumbnail">
                                        <span className="like_product"><i class="fas fa-heart"></i></span>
                                        <img src="./images/products/product_5.jpg" alt="Slide11" />
                                        <a href="#adasd" className="detailt_product">Xem chi tiết</a>
                                        <div class="caption">
                                            <h4>Trà tửa</h4>
                                            <p>35K</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="thumbnail">
                                        <img src="./images/products/product_5.jpg" alt="Slide21" />
                                        <div class="caption">
                                            <h4>Trà tửa</h4>
                                            <p>35K</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="thumbnail">
                                        <img src="./images/products/product_6.jpg" alt="Slide22" />
                                        <div class="caption">
                                            <h4>Trà tửa</h4>
                                            <p>35K</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="thumbnail">
                                        <img src="./images/products/product_1.jpg" alt="Slide23" />
                                        <div class="caption">
                                            <h4>Trà tửa</h4>
                                            <p>35K</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="thumbnail">
                                        <img src="./images/products/product_2.jpg" alt="Slide24" />
                                        <div class="caption">
                                            <h4>Trà tửa</h4>
                                            <p>35K</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="thumbnail">
                                        <img src="./images/products/product_5.jpg" alt="Slide21" />
                                        <div class="caption">
                                            <h4>Trà tửa</h4>
                                            <p>35K</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="thumbnail">
                                        <img src="./images/products/product_6.jpg" alt="Slide22" />
                                        <div class="caption">
                                            <h4>Trà tửa</h4>
                                            <p>35K</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="thumbnail">
                                        <img src="./images/products/product_1.jpg" alt="Slide23" />
                                        <div class="caption">
                                            <h4>Trà tửa</h4>
                                            <p>35K</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="thumbnail">
                                        <img src="./images/products/product_2.jpg" alt="Slide24" />
                                        <div class="caption">
                                            <h4>Trà tửa</h4>
                                            <p>35K</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="left carousel-control-custom" href={`#${myCarousel}`} data-slide="prev"><i class="fa fa-chevron-left fa-2x"></i></a>
                    <a class="right carousel-control-custom" href={`#${myCarousel}`} data-slide="next"><i class="fa fa-chevron-right fa-2x"></i></a>
                </div>
            </div>

        )
    }


}

export default ProductSlider;