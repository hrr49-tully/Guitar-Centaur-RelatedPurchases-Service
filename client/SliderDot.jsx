import React from 'react';

class SliderDot extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleMove(null, this.props.index);
  }

  render() {
    let dot;
    if (this.props.stackPosition === this.props.index) {
      dot = <div onClick={this.handleClick} className="relatedPurchasesSliderDotActive"></div>
    } else {
      dot = <div onClick={this.handleClick} className="relatedPurchasesSliderDot"></div>
    }

    return (
      <span>{dot}</span>
    );
  }
}

export default SliderDot;