import React from 'react';

import styles from './css/SliderArrows.module.css';

class SliderArrowLeft extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleMove(-1, null);
  }

  render() {
    return (
      <div onClick={this.handleClick} id="relatedPurchasesSliderArrowLeft">&lt;</div>
    );
  }
}

export default SliderArrowLeft;