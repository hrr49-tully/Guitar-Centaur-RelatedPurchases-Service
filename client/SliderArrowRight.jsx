import React from 'react';

import styles from './css/SliderArrows.module.css';

class SliderArrowRight extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleMove(1, null);
  }

  render() {
    return (
      <button onClick={this.handleClick} className={styles.relatedPurchasesSliderArrowRight} data-testid="arrowBtn">&gt;</button>
    );
  }
}

export default SliderArrowRight;