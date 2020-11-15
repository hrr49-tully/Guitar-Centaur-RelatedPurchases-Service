import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import RelatedPurchases from './RelatedPurchases.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="wrapper">
        <RelatedPurchases id={this.props.id}/>
      </div>
    );
  }
}

ReactDOM.render(<App id={11}/>, document.getElementById('app'));