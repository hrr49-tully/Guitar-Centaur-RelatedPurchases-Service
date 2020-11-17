import React from 'react';

import RelatedPurchase from './RelatedPurchase.jsx';

/* A SliderStack is used to divide up all the items into a certain amount */
class SliderStack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="relatedPurchasesSliderStack">
        {
          this.props.relatedData.map((data, key) => {
            return <RelatedPurchase data={data} key={key} handleItemChange={this.props.handleItemChange} resetStackPosition={this.props.resetStackPosition}/>
          })
        }
      </div>
    );
  }
}

export default SliderStack;