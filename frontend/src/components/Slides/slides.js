import React, { useEffect, useState } from "react";
import left from '../assets/images/left-arrow.png'
import right from '../assets/images/right-arrow.png'

function Slides(props) {
    const { images, height, width, as } = props;
    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);
        return () => clearInterval(timer);
    }, [images.length]);

    const handlePrev = () => {
        setVisibleIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setVisibleIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    let ah = height / 2 - 25;
    return (
        <div className={'slide_cont'} style={{ height: height + 'px', width: width + 'px' }}>
            <div className={'overlay_image'} style={{width: width + 'px', height: height + 'px'}}>
                <div style={{ width: as + 'px', position: 'absolute', left: 0, top: ah + 'px'}} onClick={handlePrev}><img id={'left_icon'} src={left} alt="Left" /></div>
                <div style={{ width: as + 'px', position: 'absolute', left: width + 'px', top: ah + 'px'}} onClick={handleNext}><img id={'right_icon'} src={right} alt="Right" /></div>
            </div>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    style={{ display: index === visibleIndex ? 'block' : 'none', height: height, width: width }}
                    alt={`Slide ${index + 1}`}
                />
            ))}
        </div>
    );
}

export default Slides;
