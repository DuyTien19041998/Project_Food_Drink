import React from 'react';
import ProductSlider from "../../components/ProductSlider/ProductSlider"

class ProductCategory extends React.Component {

    render() {
        let { id, name } = this.props
        return (

            <div className="product_milk_tea">
                <div class="container">
                    <div class="row">
                        <div className="title">
                            <h2>{name}</h2>
                            <a href="#a">Xem thêm <i class="fas fa-chevron-right"></i></a>
                        </div>
                        <ProductSlider onClickSlider={id} />
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductCategory;
