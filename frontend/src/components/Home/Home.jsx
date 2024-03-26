import Header from "../Header/header";
import Footer from "../Footer/footer";
import Slides from "../Slides/slides";
import one from "../assets/images/slide1.png"
import two from "../assets/images/slide2.png"
import './Home.css'
import ObjSlides from "../ObjSlides/ObjSlides";

function Home () {
    let images = [one, two]
    let cards = [{
            image: images[0],
            url: 'http://google.com',
            text: 'Jerry Lewis'
        },
        {
            image: images[1],
            url: 'http://google.com',
            text: 'Joe Sherman'
        },
        {
            image: images[0],
            url: 'http://google.com',
            text: 'Joerewr Sherman'
        },
        {
            image: images[1],
            url: 'http://google.com',
            text: 'Joe Shermrewrean'
        },
        {
            image: images[0],
            url: 'http://google.com',
            text: 'Joe Shermanewr'
        },
        {
            image: images[1],
            url: 'http://google.com',
            text: 'Joe Shermanewr'
        },
        {
            image: images[0],
            url: 'http://google.com',
            text: 'Joe Shermanewr'
        },
        {
            image: images[1],
            url: 'http://google.com',
            text: 'Joe Shermanewr'
        },]
    return (
        <>
            <Header/>
            <div className={'main_slide bordered'}>
                <Slides images={images} height={300} width={1000} as={50}/>
                <ObjSlides cards={cards} height={300} width={1000} as={50}/>
            </div>
            <Footer/>
        </>
    );
} export default Home