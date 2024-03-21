import './home.css'
import Listing from '../Listing/listing';
import Side from "../Side/side";
import vid from '../assets/BgVid.mp4'
import slide1 from '../assets/images/slide1.png'
import slide2 from '../assets/images/slide2.png'
import slide3 from '../assets/images/slide3.png'
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { Link } from 'react-router-dom';
import Slides from '../Slides/slides'

function Home() {
    const dataset = [{
        title: "Who is Joe?",
        content: "Joe is a marketplace website tailored specifically for students, offering a wide range of products and services to meet their needs."
    }, {
        title: "Best deals on Joe",
        content: "Our platform provides students with access to exclusive deals and discounts on various products and services, helping them save money while getting the items they need."
    }, {
        title: "The story behind Joe",
        content: "Joe was founded in 2015 by a group of college students who saw the need for a convenient and affordable marketplace catering to the student community. It all started when one of the founders struggled to find affordable textbooks for his classes."
    }];
    const images = [slide1, slide2, slide3];
    return (
        <>
            <Header/>
            <div className={'home_wrap'}>
                <div className="video-container">
                    <div className={'caption'}>
                        <Link to='/Login'>Get Started</Link>
                    </div>
                    <video autoPlay muted loop>
                        <source src={vid} type="video/mp4" />
                    </video>
                </div>
                <div className={'content_wrap'}>
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className={'listing_grid'}>
                            {Listing(dataset[index])}
                        </div>
                    ))}
                </div>
                <Slides images={images}/>
                <div className={'about_cont'}>
                    <h2>
                        Our Mission
                    </h2>
                    <p>
                        Our mission at Joe is to empower students by providing a seamless and secure platform for accessing essential products and services. We understand the challenges students face, and we strive to make their lives easier by offering exclusive deals, discounts, and a wide range of resources tailored to their needs. Through innovation and dedication, we aim to create a vibrant community where students can thrive academically, socially, and financially.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
}


export default Home;