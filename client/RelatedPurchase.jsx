import React from 'react';

class RelatedPurchase extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  render() {
    return (
      <ul>
        <li><a href="/"><img src={this.props.data.image_url} alt="image of a guitar"/></a></li>
        <li><a href="/">{this.props.data.title}</a></li>
        <li>${this.props.data.cost}</li>
        <li>{this.props.data.rating}</li>
      </ul>
    );
  }
}

export default RelatedPurchase;