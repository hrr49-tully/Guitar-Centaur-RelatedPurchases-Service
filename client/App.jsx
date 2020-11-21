import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import styles from './css/index.module.css'

import Details from './Details.jsx';
import RelatedPurchases from './RelatedPurchases.jsx';
// component did mount
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      relatedData: [],
      details: []
    }

    this.handleItemChange = this.handleItemChange.bind(this);
    this.getRelatedPurchases = this.getRelatedPurchases.bind(this);

    // initial
    this.getRelatedPurchases(this.state.id);
    this.getDetails(this.state.id);
  }

  componentDidMount() {
    let item_id = window.location.pathname;
    // Remove the first forward slash
    item_id = item_id.split('');
    item_id.unshift();
    item_id = item_id.join('');

    this.handleItemChange(item_id);
  }

  handleItemChange(id) {
    this.setState({id: id});
    this.getRelatedPurchases(id);
    this.getDetails(id);
  }

  getRelatedPurchases(itemId) {
    $.get(`/api/related/getrelatedpurchases/${itemId}`, (data) => {
      this.setState({relatedData: data});
    });
  }

  getDetails(itemId) {
    $.get(`/api/related/getdetails/${itemId}`, (data) => {
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