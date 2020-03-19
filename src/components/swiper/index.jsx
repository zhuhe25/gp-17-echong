import React, { Component } from 'react'
import AwesomeSwiper from 'react-awesome-swiper';
import { SwiperContainer } from "./styled"
class Swiper extends Component {
    render() {
        let { banners } = this.props;
        const config = {
            loop: true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazy: true,
            speed: 500,
            pagination: {
                el: '.swiper-pagination',
                bulletElement: 'li',
                hideOnClick: true,
                clickable: true,
            }
        };


        return (
            <SwiperContainer height="5.8rem">
                <AwesomeSwiper config={config} className="your-classname">
                    <div className="swiper-wrapper">
                        {
                            banners.map((item,index) => (
                                <div className="swiper-slide" key={index}>
                                    <img src={item.img_url} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </AwesomeSwiper>
            </SwiperContainer>
        )
    }
}
export default Swiper;