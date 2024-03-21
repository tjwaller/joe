import './header.css'
import icon from '../assets/images/joe.png'
function Header() {
    return (
        <div className="header">
            <div className={'left'}>
                <a href="/"><img id="img_logo" src={icon} alt={'Logo'}/></a>
                <a href="/"><img id="img_logo" src={icon} alt={'Logo'}/></a>
            </div>
            <div className={'right'}>
                    <a href="/Login">Login</a>
            </div>
        </div>
    );
}

export default Header;