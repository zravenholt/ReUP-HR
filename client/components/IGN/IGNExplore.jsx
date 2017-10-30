import React, { Component } from 'react';
import IGNNews from './IGNNews.jsx';
import fetchIGNNews from '../../lib/IGN.js';
import Slider from 'react-slick';

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
    const settings = { 
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    }

    return (
      <div className='container'>
        <p className='IGNTitle'>IGN</p>
          {this.state.contents.length > 0 ?
            <Slider {...settings}> 
            {this.state.contents.map((content, index) => (
              <div data-index={index} key={index}><IGNNews key={ content.title } content={ content }/></div>
            ))}
          </Slider> : null}
      </div>
    );
  }
}

export default IGNExplore;
