import React, { Component } from 'react';
import PolygonNews from './PolygonNews.jsx';
import fetchPolygonNews from '../../lib/polygon.js';
import Slider from 'react-slick';
import PrevArrow from '../Carousel/PrevArrow.jsx';
import NextArrow from '../Carousel/NextArrow.jsx';

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
    const settings = { 
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    }

    return (
      <div className='container'>
        {this.state.contents.length > 0 ?
          <Slider {...settings}> 
          {this.state.contents.map((content, index) => (
            <div data-index={index} key={index}><PolygonNews key={ content.title } content={ content }/></div>
          ))}
        </Slider> : null}
      </div>
    );
  }
}

export default PolygonExplore;

