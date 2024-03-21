import './footer.css'

function Footer() {
    return (
        <div className={'footer'}>
            <div className={'wrap'}>
                <div className={'col'}>
                    <h2>Services</h2>
                    <ul className={'spaced-list'}>
                        <li>Textbook Rentals</li>
                        <li>Tutoring Services</li>
                        <li>Student Discounts</li>
                    </ul>
                </div>
                <div className={'col'}>
                    <h2>Support</h2>
                    <ul className={'spaced-list'}>
                        <li>How It Works</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={'col'}>
                    <h2>Partners</h2>
                    <ul className={'spaced-list'}>
                        <li>Student Union Bookstore</li>
                        <li>Tech Hub</li>
                        <li>Campus Dining Services</li>
                    </ul>
                </div>
                <div className={'col'}>
                    <h2>Legal</h2>
                    <ul className={'spaced-list'}>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div id={'copypalace'}>
                <p>
                    © 2024 Joe. All Rights Reserved. Duplication
                    and copy of this content is strictly prohibited. All rights reserved.
                </p>
            </div>
        </div>


    );
}

export default Footer;