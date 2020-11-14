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
        <RelatedPurchases id={1}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));