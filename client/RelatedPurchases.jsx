import React from 'react';
import $ from 'jquery';

import RelatedPurchase from './RelatedPurchase.jsx';

class RelatedPurchases extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedData: []
    };

    this.getRelatedPurchases = this.getRelatedPurchases.bind(this);
    this.getRelatedPurchases(this.props.id);
  }

  getRelatedPurchases(itemId) {
    $.get('/api/getrelatedpurchases', {id: itemId}, (data) => {
      this.setState({relatedData: data});
    });
  }

  render() {
    return (
      <div id="relatedPurchases">
        <h2>Related Purchases</h2>
        <ul>
          {
            this.state.relatedData.map((data, key) => {
              return <li className="relatedPurchase"><RelatedPurchase data={data}/></li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default RelatedPurchases;