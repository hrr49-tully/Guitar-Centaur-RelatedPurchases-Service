import React from 'react';
import Ratings from './Ratings.jsx';

import SliderStack from './SliderStack.jsx';
import SliderArrowLeft from './SliderArrowLeft.jsx';
import SliderArrowRight from './SliderArrowRight.jsx';
import SliderDot from './SliderDot.jsx';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.move = this.move.bind(this);

    this.state = {
      stackPosition: 0
    };

    this.stacks = [];
    this.resetStackPosition = this.resetStackPosition.bind(this);
  }

  resetStackPosition() {
    this.setState({stackPosition: 0});
  }

  move(amount, index) {
    // amount is ignored if an index is provided
    console.log('amount', amount);
    console.log('index', index);
    if (amount !== null && index === null) {
      // arrow slide
      if (amount > 0 && (this.state.stackPosition + amount) <= (this.stacks.length - 1)) {
        // increase
        // update state
        let currentPos = this.state.stackPosition;
        currentPos += amount;
        this.setState({stackPosition: currentPos});

      } else if (amount < 0 && (this.state.stackPosition + amount) >= 0) {
        // decrease
        // update state
        let currentPos = this.state.stackPosition;
        currentPos += amount; // amount should be negative
        this.setState({stackPosition: currentPos});

      }
    } else if (amount === null && index > -1) {
      // dot move

      if (index >= 0 && index <= this.stacks.length - 1) {
        // update state
        this.setState({stackPosition: index});
      }
    }
  }

  render() {
    // Split related data into stack chunks
    console.log('render+');
    this.stacks = [];
    for (let i = 0; i < this.props.relatedData.length; i += 5) {
      this.stacks.push(<SliderStack relatedData={this.props.relatedData.slice(i, i + 5)} key={i} handleItemChange={this.props.handleItemChange} resetStackPosition={this.resetStackPosition}/>);
    }

    return (
      <div>
        <SliderArrowLeft handleMove={this.move}/>
        <div id="relatedPurchasesSlider">
          {
            this.stacks.map((item, key) => {
              return item
            })
          }
        </div>
        <SliderArrowRight handleMove={this.move}/>
        <div id="relatedPurchasesSliderDots">
          {
            this.stacks.map((sliderStack, key) => {
              return <SliderDot stack={sliderStack} key={key} handleMove={this.move} index={key} stackPosition={this.state.stackPosition}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default Slider;