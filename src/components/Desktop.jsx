import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mainBackground from '../assets/images/bg-tablet-pattern.svg'
import logo from '../assets/images/logo.svg';
import mainIllustration from '../assets/images/illustration-intro.svg';
import './Desktop.css';
import TestimonialSlider from './TestimonialSlider';
import simplifyBackground from '../assets/images/bg-simplify-section-desktop.svg';
import facebook from '../assets/images/icon-facebook.svg';
import instagram from '../assets/images/icon-instagram.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import youtube from '../assets/images/icon-youtube.svg';
import twitter from '../assets/images/icon-twitter.svg';

function Desktop() {
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
        <div className='page'>
            <div className='top'>
                <Link to="/" className='logo'><img src={logo} alt='Logo'/></Link>
                <div className="top-links-container">
                    <div className="top-link"><Link to='/pricing'>Pricing</Link></div>
                    <div className="top-link"><Link to='/product'>Product</Link></div>
                    <div className="top-link"><Link to='/about-us'>About Us</Link></div>
                    <div className="top-link"><Link to='/careers'>Careers</Link></div>
                    <div className="top-link"><Link to='/community' >Communuity</Link></div>
                </div>
                <button onClick={() => window.location.href = '/get-started'}>Get Started</button>
            </div>
            <div className='main-container'>
                <div className='main-one'>
                    <div className='main-one-left'>
                    <h1>Bring everyone together to build better products.</h1>
                    <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view. </p>
                    <button onClick={() => window.location.href = '/get-started'}>Get Started</button>
                    </div>
                    <img src={mainIllustration} alt='illustration Intro' className='main-illustration'/>
                </div>
                <div className='main-two'>
                    <div className='main-two-left'>
                    <h1>What’s different about Manage?</h1>
                    <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.  </p>
                    </div>
                    <div className='main-two-right'>
                        <div>
                            <h2>01</h2>
                            <div className='main-numbered-container'>
                                <h3>Track company-wide progress</h3>
                                <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again. </p>
                            </div>
                        </div>
                        <div>
                            <h2>02</h2>
                            <div className='main-numbered-container'>
                                <h3>Advanced built-in reports</h3>
                                <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                            </div>
                        </div>
                        <div>
                            <h2>03</h2>
                            <div className='main-numbered-container'>
                                <h3>Everything you need in one place</h3>
                                <p>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-three'>
                    <h1>What They've said</h1>
                    <div>
                        <TestimonialSlider/>
                    </div>
                    <button><Link to="/get-started" className='main-link'>Get Started</Link></button>
                </div>
            </div>
            <div className='simplify'>
                <h1>Simplify how your team works today.</h1>
                <button onClick={() => window.location.href = '/get-started'}>Get Started</button>
            </div>
            <div className='footer'>
                <div className='footer-left'>
                    <Link to="/" className='logo-footer'><img src={logo} alt='Logo'/></Link>
                    <div className='logos-container'>
                        <Link to="/facebook"><img src={facebook} alt='facebook'/></Link>
                        <Link to="/youtube"><img src={youtube} alt='youtube'/></Link>
                        <Link to="/twitter"><img src={twitter} alt='twitter'/></Link>
                        <Link to="/pinterest"><img src={pinterest} alt='pinterest'/></Link>
                        <Link to="/instagram"><img src={instagram} alt='instagram'/></Link>
                    </div>
                </div>
                <div class="links-container">
                    <div className="link"><Link to='/'>Home</Link></div>
                    <div className="link"><Link to='/careers'>Careers</Link></div>
                    <div className="link"><Link to='/pricing'>Pricing</Link></div>
                    <div className="link"><Link to='/community'>Community</Link></div>
                    <div className="link"><Link to="/products">Products</Link></div>
                    <div className="link"><Link to="/privacy-policy">Privacy Policy</Link></div>
                    <div className="link"><Link to="/about-us">About Us</Link></div>
                </div>
                <div className='footer-right'>
                    <div className='subscription'>
                        {subscribed ? (
                            <h1>Thanks for subscribing!</h1>
                        ):<>
                        <input placeholder='Updates in your inbox' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <button onClick={handleClick}>Go</button>
                        {message && <div className="message">{message}</div>}
                        </>
                        }
                    </div>
                    <p>Copyright 2020. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Desktop;
