import React from "react";
import '../common-carousel/carousel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const CarouselControl = (props) => {
    return(
        <>
                <Carousel
                responsive={responsive}
                >             
                {props.serviceData.map(data => {
                    return(
                        <>
                            <div className="carousel-wrapper">
                                    <div className="m-b-20">
                                        <span><i className={data["icn_name"]} style = {{fontSize : "2.5rem",color: "blue"}}></i></span>
                                    </div>
                                    <div className="m-b-20">
                                        <h6 className = "carousel-title">{data["carousel_title"]}</h6>
                                    </div>
                                    <div className="slider-list-content">
                                        <p className = "carousel-info">{data["carousel_info"]}</p>
                                    </div>
                            </div>
                        </>
                    )
                })}
                </Carousel>
        </>
    )
}

export default CarouselControl