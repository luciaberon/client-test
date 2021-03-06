import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Articles } from '../types/Data';

const Headlines:React.FC<Articles> = (props) => { 

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number, e: any) => {
      setIndex(selectedIndex);
    };
    
    return (
        <Carousel className="newSlider" activeIndex={index} onSelect={handleSelect}>
            { props.articles.slice(0,10).map((item,index) => {
                return (
                <Carousel.Item className="item" key={index}>
                    <img
                        className="d-block w-100"
                        src={item.urlToImage ? `${item.urlToImage}` :  "https://im-media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/2020-04/ap_paper.jpg?itok=pevRrI3j"}
                    />
                    <Carousel.Caption>
                        <h3 className="title">{item.title}</h3>
                        <p className="description">{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                )
            })}
        </Carousel>
    )
}
export default Headlines;