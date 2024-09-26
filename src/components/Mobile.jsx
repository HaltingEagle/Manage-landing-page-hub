import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import mainBackground from '../assets/images/bg-tablet-pattern.svg'
import logo from '../assets/images/logo.svg';
import mainIllustration from '../assets/images/illustration-intro.svg';
import './Mobile.css';
import TestimonialSliderMobile from './TestimonialSliderMobile';
import simplifyBackground from '../assets/images/bg-simplify-section-mobile.svg';
import facebook from '../assets/images/icon-facebook.svg';
import instagram from '../assets/images/icon-instagram.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import youtube from '../assets/images/icon-youtube.svg';
import twitter from '../assets/images/icon-twitter.svg';

function Mobile() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    useEffect(() => {
        if (subscribed) {
            const timer = setTimeout(() => {
            setSubscribed(false);
            setEmail('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [subscribed]);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleClick = () => {
        if (!email) {
            setMessage('Please fill in this field');
        } else if (!validateEmail(email)) {
            setMessage('Please enter a valid email address');
        } else {
            setSubscribed(true);
        }
    };

    return (
        <div className='mobile-page-mobile'>
            <div className='mobile-top-mobile'>
                <Link to="/" className='mobile-logo-mobile'><img src={logo} alt='Logo'/></Link>
                <Navbar/>
            </div>
            <div className='main-container-mobile'>
                <img src={mainIllustration} alt='illustration Intro' className='main-illustration-mobile'/>
                <div className='main-one-mobile'>
                    <h1>Bring everyone together to build better products.</h1>
                    <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view. </p>
                    <button onClick={() => window.location.href = '/get-started'}>Get Started</button>
                </div>
                <div className='main-one-mobile'>
                    <h1>What’s different about Manage?</h1>
                    <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.  </p>
                    <div>
                        <div className='main-numbered-container-mobile'>
                        <h2>01</h2><h3>Track company-wide progress</h3>
                        </div>
                        <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again. </p>
                    </div>
                    <div>
                        <div className='main-numbered-container-mobile'>
                            <h2>02</h2><h3>Advanced built-in reports</h3>
                        </div>
                        <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                    </div>
                    <div>
                        <div className='main-numbered-container-mobile'>
                            <h2>03</h2><h3>Everything you need in one place</h3>
                        </div>
                        <p>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                    </div>
                </div>
                <div className='main-one-mobile'>
                    <h1>What They've said</h1>
                    <div>
                        <TestimonialSliderMobile/>
                    </div>
                    <button onClick={() => window.location.href = '/get-started'}>Get Started</button>
                </div>
            </div>
            <div className='simplify-mobile'>
                <h1>Simplify how your team works today.</h1>
                <button onClick={() => window.location.href = '/get-started'}>Get Started</button>
            </div>
            <div className='footer-mobile'>
                <div className='subscription-mobile'>
                    {subscribed ? (
                        <h1>Thanks for subscribing!</h1>
                    ):<>
                    <input placeholder='Updates in your inbox' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button onClick={handleClick}>Go</button>
                    {message && <div className="message-mobile">{message}</div>}
                    </>
                    }
                </div>
                <div className="links-container-mobile">
                    <div className="link-mobile"><Link to='/'>Home</Link></div>
                    <div className="link-mobile"><Link to='/careers'>Careers</Link></div>
                    <div className="link-mobile"><Link to='/pricing'>Pricing</Link></div>
                    <div className="link-mobile"><Link to='/community'>Community</Link></div>
                    <div className="link-mobile"><Link to="/products">Products</Link></div>
                    <div className="link-mobile"><Link to="/privacy-policy">Privacy Policy</Link></div>
                    <div className="link-mobile"><Link to="/about-us">About Us</Link></div>
                </div>
                <div className='logos-container-mobile'>
                    <Link to="/facebook"><img src={facebook} alt='facebook'/></Link>
                    <Link to="/youtube"><img src={youtube} alt='youtube'/></Link>
                    <Link to="/twitter"><img src={twitter} alt='twitter'/></Link>
                    <Link to="/pinterest"><img src={pinterest} alt='pinterest'/></Link>
                    <Link to="/instagram"><img src={instagram} alt='instagram'/></Link>
                </div>
                <Link to="/" className='mobile-logo-footer'><img src={logo} alt='Logo'/></Link>
            </div>
        </div>
    );
}

export default Mobile;
