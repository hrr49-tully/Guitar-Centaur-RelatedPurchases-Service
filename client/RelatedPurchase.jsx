import React from 'react';
import Ratings from './Ratings.jsx';

class RelatedPurchase extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li><a href="/"><img src={this.props.data.image_url} alt="image of a guitar"/></a></li>
        <li><a href="/">{this.props.data.title}</a></li>
        <li>${this.props.data.cost}</li>
        <li><Ratings id={this.props.data.id}/></li>
      </ul>
    );
  }
}

export default RelatedPurchase;