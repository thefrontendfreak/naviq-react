import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./footer.scss";
import radditIcon from "../../../assets/images/raddit.svg";
import discordIcon from "../../../assets/images/discord-s.svg";
import telegramIcon from "../../../assets/images/telegram-s.svg";
import linkedinIcon from "../../../assets/images/linkedin.svg";
import mIcon from "../../../assets/images/m.svg";
import githubIcon from "../../../assets/images/github-s.svg";
import twitterIcon from "../../../assets/images/twitter-s.svg";
import logo from "../../../assets/images/logo.svg";
import bIcon from "../../../assets/images/b.svg";
import btopIcon from "../../../assets/images/btop.svg";
import { HashLink } from "react-router-hash-link";
import { Trans } from "react-i18next";
const Footer = () => {
    const [scrollTopStatus, setscrollTopStatus] = useState(false);

    // subscription form validation
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log({ data });

    const notify = () => toast(errors.email.message);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 400) {
                setscrollTopStatus(true);
            } else {
                setscrollTopStatus(false);
            }
        });
    }, []);
    return (
        <div className='footerArea'>
            {/* Newslatter area starts here */}
            <section className='newslatter'>
                <div className='container t__center'>
                    <div className='newslatter__heading mb__35'>
                        <h1>
                            <Trans i18nKey='section-19-title'></Trans>
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit, notify)}>
                        <div className='newslatter__inputWrapper inputContainer'>
                            <input
                                type='text'
                                name='email'
                                {...register("email", {
                                    required: "Please enter an email",
                                    pattern: {
                                        value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                                        message:
                                            "Please enter a valid email address",
                                    },
                                })}
                                placeholder='your@email.com'
                            />
                            <button className='btn__primary' type='submit'>
                                <span className='btn__text'>Pre-register</span>
                            </button>
                        </div>
                        {errors?.email && (
                            <ToastContainer
                                position='top-center'
                                autoClose={4000}
                                transition={Slide}
                                hideProgressBar={true}
                            />
                        )}
                    </form>
                </div>
            </section>
            {/* Newslatter area ends here */}

            {/* Footer area starts here */}
            <footer className='footer'>
                <div className='container p__relative'>
                    <HashLink smooth to='#top'>
                        <div
                            className={
                                "footer__backtoTopButton t__center " +
                                (scrollTopStatus ? "active" : "")
                            }
                        >
                            <div className='icon'>
                                <img
                                    title='Back top top'
                                    src={btopIcon}
                                    alt=''
                                />
                            </div>
                            {/* <p>
                                Back top top
                            </p> */}
                        </div>
                    </HashLink>
                    {/* <ScrollToTop easing="linear" showUnder={500} style={{position: "relative"}}>
                        
                    </ScrollToTop> */}
                    <div className='footer__footerTop d__flex jc__between'>
                        <div className='footer__footerTopLeft d__flex'>
                            <ul className='footer__widget'>
                                <h5><Trans i18nKey="footer-section-1-title"></Trans></h5>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Lorem ipsum</Link>
                                </li>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Lorem ipsum</Link>
                                </li>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Lorem ipsum</Link>
                                </li>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Lorem ipsum</Link>
                                </li>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Lorem ipsum</Link>
                                </li>
                            </ul>
                            <ul className='footer__widget'>
                                <h5><Trans i18nKey="footer-section-2-title"></Trans></h5>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Lorem ipsum</Link>
                                </li>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Lorem ipsum</Link>
                                </li>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Lorem ipsum</Link>
                                </li>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Lorem ipsum</Link>
                                </li>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Lorem ipsum</Link>
                                </li>
                            </ul>
                            <ul className='footer__widget'>
                                <h5><Trans i18nKey="footer-section-3-title"></Trans></h5>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Support</Link>
                                </li>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Support</Link>
                                </li>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Lorem ipsum</Link>
                                </li>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Lorem ipsum</Link>
                                </li>
                                <li className='footer__widgetMenuListItem'>
                                    <Link to=''>Lorem ipsum</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footer__footerTopRight'>
                            <ul className='footer__socialIconMenu d__flex'>
                                <li className='socialIconMenu__items'>
                                    <Link>
                                        <img
                                            src={radditIcon}
                                            alt='Social icon'
                                        />
                                    </Link>
                                </li>
                                <li className='socialIconMenu__items'>
                                    <Link>
                                        <img
                                            src={discordIcon}
                                            alt='Social icon'
                                        />
                                    </Link>
                                </li>
                                <li className='socialIconMenu__items'>
                                    <Link>
                                        <img
                                            src={telegramIcon}
                                            alt='Social icon'
                                        />
                                    </Link>
                                </li>
                                <li className='socialIconMenu__items'>
                                    <Link>
                                        <img
                                            src={linkedinIcon}
                                            alt='Social icon'
                                        />
                                    </Link>
                                </li>
                                <li className='socialIconMenu__items'>
                                    <Link>
                                        <img src={mIcon} alt='Social icon' />
                                    </Link>
                                </li>
                                <li className='socialIconMenu__items'>
                                    <Link>
                                        <img
                                            src={githubIcon}
                                            alt='Social icon'
                                        />
                                    </Link>
                                </li>
                                <li className='socialIconMenu__items'>
                                    <Link>
                                        <img
                                            src={twitterIcon}
                                            alt='Social icon'
                                        />
                                    </Link>
                                </li>
                                <li className='socialIconMenu__items'>
                                    <Link>
                                        <img src={bIcon} alt='Social icon' />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer__bottom d__flex jc__between ai__center'>
                        <div className='footer__bottomLeft d__flex ai__center'>
                            <div className='footer__logo mr__35'>
                                <img src={logo} alt='' />
                            </div>
                            <p>
                                Copyright &#169; 2021 Naviq. All Rights
                                Reserved.
                            </p>
                        </div>
                        <div className='footer__bottomRight'>
                            <ul className='footer__bottomMenu d__flex'>
                                <li>
                                    <Link>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link>Terms of service</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer area ends here */}
        </div>
    );
};

export default Footer;
