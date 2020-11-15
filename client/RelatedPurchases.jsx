import React from 'react';
import $ from 'jquery';

import Slider from "react-slick";

import RelatedPurchase from './RelatedPurchase.jsx';

class RelatedPurchases extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      adaptiveHeight: true,
      arrows: true,
      className: 'slides'
    };

    return (
      <div id="relatedPurchases">
        <h2>Related Purchases</h2>
        <Slider {...settings} id="relatedPurchasesSlider">
          {
            this.props.relatedData.map((data, key) => {
              return <RelatedPurchase data={data} handleItemChange={this.props.handleItemChange}/>
            })
          }
        </Slider>
      </div>
    );
  }
}

export default RelatedPurchases;