import Header from "../Header/header";
import Footer from "../Footer/footer";
import Slides from "../Slides/slides";
import one from "../assets/images/slide1.png"
import two from "../assets/images/slide2.png"
import './Home.css'

function Home () {
    let images = [one, two]
    return (
        <>
            <Header/>
            <div className={'main_slide'}>
                <Slides images={images} height={300} width={1000} as={50}/>
            </div>
            <Footer/>
        </>
    );
} export default Home