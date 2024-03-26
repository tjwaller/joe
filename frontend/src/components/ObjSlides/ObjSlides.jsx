import React, { useEffect, useState } from "react";
import left from '../assets/images/left-arrow.png'
import right from '../assets/images/right-arrow.png'
import './ObjSlides.css'

function ObjSlides(props) {
    const { cards, height, width, as } = props;
    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleIndex((prevIndex) => (prevIndex + 1) % Math.ceil(cards.length / 3));
        }, 10000);
        return () => clearInterval(timer);
    }, [cards.length]);

    const handlePrev = () => {
        setVisibleIndex((prevIndex) => (prevIndex - 1 + Math.ceil(cards.length / 3)) % Math.ceil(cards.length / 3));
    };

    const handleNext = () => {
        setVisibleIndex((prevIndex) => (prevIndex + 1) % Math.ceil(cards.length / 3));
    };

    let ah = height / 2 - 25;

    const startIndex = visibleIndex * 3;
    const endIndex = Math.min(startIndex + 3, cards.length);

    return (
        <div className={'slide_cont'} style={{ height: height + 'px', width: width + 'px' }}>
            <div className={'overlay_image'} style={{width: width + 'px', height: height + 'px'}}>
                <div style={{ width: as + 'px', position: 'absolute', left: 0, top: ah + 'px'}} onClick={handlePrev}><img id={'left_icon'} src={left} alt="Left" /></div>
                <div style={{ width: as + 'px', position: 'absolute', left: width + 'px', top: ah + 'px'}} onClick={handleNext}><img id={'right_icon'} src={right} alt="Right" /></div>
            </div>
            {cards.slice(startIndex, endIndex).map((card, index) => (
                <a key={index} href={card.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div style={{ height: height, width: width / 3, display: 'inline-block', padding: 10}}>
                        <img src={card.image} alt={`Slide ${startIndex + index + 1}`} style={{ height: '80%', width: '100%' }} />
                        <div style={{ textAlign: 'center', marginTop: '5px' }}>
                            <p>{card.text}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default ObjSlides;
