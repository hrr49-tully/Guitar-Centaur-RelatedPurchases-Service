import React from 'react';
import $ from 'jquery';

class Ratings extends React.Component {
  constructor(props) {
    super(props);

    // TODO: fix static
    this.startFilled = `https://hrr49-fec-jw.s3.us-east-2.amazonaws.com/FEC/images/star0.png`;
    this.starEmpty = `https://hrr49-fec-jw.s3.us-east-2.amazonaws.com/FEC/images/star1.png`;

    this.state = {
      ratingCnt: 0,
      stars: []
    }

    this.getStars = this.getStars.bind(this);
    this.getStars();
    this.getRatingCount = this.getRatingCount.bind(this);
    this.getRatingCount();
  }

  getRatingCount() {
    $.get('/api/getratingcount', {id: this.props.id}, (data) => {
      console.log(data[0].score);
      this.setState({ratingCnt: Number(data[0].score)});
    });
  }

  getStars() {
    $.get('/api/getratingavg', {id: this.props.id}, (data) => {
      let starRating = Math.round(Number(data[0].score)) - 1;
      if (starRating > 5) {
        starRating = 5;
      } else if (starRating < 0) {
        starRating = 0;
      }

      let stars = [];
      for (let i = 0; i < 5; i++) {
        if (i < starRating) {
          stars.push(<img className="star" src={this.startFilled} alt ="filled star"/>);
        } else {
          stars.push(<img className="star" src={this.starEmpty} alt ="empty star"/>);
        }
      }

      this.setState({stars: stars});
    });
  }

  render() {
    return (
      <div className="ratings">
        <div className="ratingsAverage">{this.state.stars}</div>
        <div className="ratingsCount">({this.state.ratingCnt})</div>
      </div>
    );
  }
}

export default Ratings;