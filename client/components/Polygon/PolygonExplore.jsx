import React, { Component } from 'react';
import PolygonNews from './PolygonNews.jsx';
import fetchPolygonNews from '../../lib/polygon.js';

class PolygonExplore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: []
    }
  }

  componentDidMount() {
    fetchPolygonNews(this);
  }

  render() {
    return (
      <div> 
        {this.state.contents.map((content) => 
          <PolygonNews content={ content } />
        )}  
      </div>
    );
  }
}


export default PolygonExplore;