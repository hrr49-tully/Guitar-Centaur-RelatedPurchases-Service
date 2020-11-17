import React from 'react';

import styles from './css/RelatedPurchases.module.css';

import Slider from './Slider.jsx';

class RelatedPurchases extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.relatedPurchases}>
        <h2>Related Purchases</h2>
        <Slider handleItemChange={this.props.handleItemChange} relatedData={this.props.relatedData}/>
      </div>
    );
  }
}

export default RelatedPurchases;