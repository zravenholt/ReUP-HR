import React, { Component } from 'react';
import IGNNews from './IGNNews.jsx';
import fetchIGNNews from '../../lib/IGN.js';

class IGNExplore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: []
    }
  }

  componentDidMount() {
    fetchIGNNews(this);
  }

  render() {
    return (
      <div className="Tile"> 
        {this.state.contents.map((content) => 
          <IGNNews content={ content } />
        )}  
      </div>
    );
  }
}


export default IGNExplore;