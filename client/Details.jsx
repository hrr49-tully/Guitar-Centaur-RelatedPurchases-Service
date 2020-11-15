import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="details">
        <h2>Details</h2>
        <h3>Coverage</h3>
        <p>{this.props.details.coverage}</p>
        <h3>Overview</h3>
        <p>{this.props.details.overview}</p>
        <h3>Specifications</h3>
        <p>{this.props.details.specifications}</p>
      </div>
    );
  }
}

export default Details;