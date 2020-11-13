import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.getData = this.getData.bind(this);
    this.getData();
  }

  getData() {
    $.get('/api/getitem', (data) => {
      this.setState({data: data});
    });
  }

  render() {
    return (
      <div id="wrapper">
        <ol>
        {
          this.state.data.map((item, key) => {
            return <li>
              <ul>
                <li>{item.title}</li>
                <li>{item.description}</li>
                <li>{item.overview}</li>
                <li>{item.specs}</li>
                <li><img src={item.image_url}/></li>
              </ul>
            </li>
          })
        }
        </ol>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));