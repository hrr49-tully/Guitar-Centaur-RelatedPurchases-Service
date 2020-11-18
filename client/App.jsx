import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import styles from './css/index.module.css'

import Details from './Details.jsx';
import RelatedPurchases from './RelatedPurchases.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      relatedData: [],
      details: []
    }

    this.handleItemChange = this.handleItemChange.bind(this);
    this.getRelatedPurchases = this.getRelatedPurchases.bind(this);

    // initial
    this.getRelatedPurchases(this.state.id);
    this.getDetails(this.state.id);
  }

  handleItemChange(id) {
    this.setState({id: id});
    this.getRelatedPurchases(id);
    this.getDetails(id);
  }

  getRelatedPurchases(itemId) {
    $.get('/api/getrelatedpurchases', {id: itemId}, (data) => {
      this.setState({relatedData: data});
    });
  }

  getDetails(itemId) {
    $.get('/api/getdetails', {id: itemId}, (data) => {
      this.setState({details: data[0]});
    });
  }

  render() {
    return (
      <div className={styles.body}>
        <Details details={this.state.details}/>
        <RelatedPurchases id={this.state.id} handleItemChange={this.handleItemChange} relatedData={this.state.relatedData}/>
      </div>
    );
  }
}

export default App;