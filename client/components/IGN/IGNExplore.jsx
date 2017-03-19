import React, { Component } from 'react';
import IGNNews from './IGNNews.jsx';
import fetchIGNNews from '../../lib/IGN.js';
import Slider from 'react-slick';
import PrevArrow from '../Carousel/PrevArrow.jsx';
import NextArrow from '../Carousel/NextArrow.jsx';

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
      // customPaging: function(i) {
      //   return <a><img src={ content.urlToImage }/></a>
      // },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    }

    return (
      <div className='container'>
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
