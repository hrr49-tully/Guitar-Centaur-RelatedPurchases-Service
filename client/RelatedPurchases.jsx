import React from 'react';
import $ from 'jquery';

import Slider from './Slider.jsx';

class RelatedPurchases extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="relatedPurchases">
        <h2>Related Purchases</h2>
        <Slider handleItemChange={this.props.handleItemChange} relatedData={this.props.relatedData}/>
      </div>
    );
  }
}

export default RelatedPurchases;