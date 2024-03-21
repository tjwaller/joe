import React, {useEffect, useState} from "react";
import left from '../assets/images/left-arrow.png'
import right from '../assets/images/right-arrow.png'
function Slides (props) {
    const images = props.images;
    const [visibleIndex, setVisibleIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 10000);
        return () => clearInterval(timer);
    }, []);
    const handlePrev = () => {
        setVisibleIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };

    const handleNext = () => {
        setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
    };
    return (
        <div className={'slide_cont'}>
            <div className={'overlay_image'}>
                <div className={'left'} onClick={handlePrev}><img id={'left_icon'} src={left} alt="Left"/></div>
                <div className={'right'} onClick={handleNext}><img id={'right_icon'} src={right} alt="Right"/></div>
            </div>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    style={{ display: index === visibleIndex ? 'block' : 'none' }}
                    alt={`Slide ${index + 1}`}
                />
            ))}
        </div>
    );
} export default Slides