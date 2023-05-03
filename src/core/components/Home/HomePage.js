import React, { useEffect, useRef, useState } from "react";
import "./homepage.scss";
import { useForm } from "react-hook-form";
import { Element } from "react-scroll";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import topbannerBg from "../../../assets/images/top-banner-bg2.png";
import topBannerRightShape from "../../../assets/images/top-right-shape.png";
import Blogo from "../../../assets/images/b-logo.svg";
import Shadow from "../../../assets/images/logo-shadow.png";
import FeatureLogo1 from "../../../assets/images/Datacenter_Exit_Node_Not_Filled.svg";
import FeatureLogo2 from "../../../assets/images/Residential_Exit_Node_Not_Filled.svg";
import FeatureLogo3 from "../../../assets/images/Mobile_Exit_Node_Not_Filled.svg";
import jsIcon from "../../../assets/images/JS_Icon.svg";
import javaIcon from "../../../assets/images/java.svg";
import cIcon from "../../../assets/images/C++_Icon.svg";
import rIcon from "../../../assets/images/R_Icon.svg";
import clientIcon from "../../../assets/images/client-icon.svg";
import oparatorIcon from "../../../assets/images/oparator-icon.svg";
import lShape from "../../../assets/images/lshape.png";
import titleIcon from "../../../assets/images/title-icon.png";
import cardIcon1 from "../../../assets/images/half-globe.svg";
import cardIcon2 from "../../../assets/images/access-icon.svg";
import cardIcon3 from "../../../assets/images/packet-icon.svg";
import cardIcon4 from "../../../assets/images/ships-icon.svg";
import infoMicon from "../../../assets/images/infom-icon.png";
import infoBottomShape from "../../../assets/images/info-bottom-shape.png";
import Mainmap from "../../../assets/images/map.png";
import shipNodeIcon from "../../../assets/images/ship-node.svg";
import mystnodeIcon from "../../../assets/images/myst-node.svg";
import warpnodeIcon from "../../../assets/images/warp-node.svg";
import gnodeIcon from "../../../assets/images/g-node.svg";
import hLine from "../../../assets/images/h-line.png";
import roadmapThumb from "../../../assets/images/roadmap.png";
import smLottie from "../../../assets/images/sm-placeholder.png";
import telegramGicon from "../../../assets/images/telegram.svg";
import discordGicon from "../../../assets/images/discord.svg";
import twitterGicon from "../../../assets/images/twitter.svg";
import radditGicon from "../../../assets/images/Reddit.svg";
import githubGicon from "../../../assets/images/github.svg";
import Emply1 from "../../../assets/images/emply1.png";
import Emply2 from "../../../assets/images/emply2.png";
import Emply3 from "../../../assets/images/emply3.png";
import Emply4 from "../../../assets/images/emply4.png";
import newsbrand1 from "../../../assets/images/newsbrand1.svg";
import newsbrand2 from "../../../assets/images/newsbrand2.svg";
import gLine from "../../../assets/images/newline.svg";
import investor1 from "../../../assets/images/investor1.svg";
import investor2 from "../../../assets/images/investor2.svg";
import investor3 from "../../../assets/images/investor3.svg";
import investor4 from "../../../assets/images/investor4.svg";
import investorgline from "../../../assets/images/igline.svg";
import nodesmIcon from "../../../assets/images/logo-sm.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { gsap, Power3, Power2, Power1, Power0 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lottie from "react-lottie";
import animationData from "./14178-globe.json";
import { Trans } from "react-i18next";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HomePage = () => {
    const [techActive, settechActive] = useState(false);

    const tokwrap = useRef(null);
    const topRightText = useRef(null);
    const topRightText2 = useRef(null);
    const topRightText3 = useRef(null);
    const svgLine = useRef(null);
    const svgLine2 = useRef(null);
    const svgLine3 = useRef(null);
    const title1 = useRef(null);
    const title2 = useRef(null);
    const title3 = useRef(null);
    const number1 = useRef(null);
    const number2 = useRef(null);
    const number3 = useRef(null);
    const blurIcon1 = useRef(null);
    const blurIcon2 = useRef(null);
    const tech = useRef(null);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    // subscription form validation

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log({ data });

    const notify = () => toast(errors.email.message);

    useEffect(() => {
        //  Tokenomics Scrolling animation code (Gsap & Scrolltrigger)

        const scrolltokt1 = gsap.timeline({
            ease: Power3,
            scrollTrigger: {
                trigger: tokwrap.current,
                scrub: 1,
                start: "top-=5.5%",
                end: "bottom+=15px",
                pin: true,
                toggleActions: "play reverse play reverse",
            },
        });
        scrolltokt1
            .to(svgLine.current, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: "power1",
            })
            .to(topRightText.current, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: "power1",
            })
            .to(title1.current, {
                duration: 1,
                opacity: 0,
                y: -20,
                ease: "power1",
            })
            .to(number1.current, {
                duration: 1,
                opacity: 0,
                y: -40,
                ease: "power1",
            })
            .to(title2.current, {
                duration: 1,
                opacity: 1,
                y: -20,
                ease: "power1",
            })
            .to(number2.current, {
                duration: 1,
                opacity: 1,
                y: -40,
                ease: "power1",
            })
            .to(title2.current, {
                duration: 1,
                opacity: 1,
                y: -20,
                ease: "power1",
            })
            .to(number2.current, {
                duration: 1,
                opacity: 1,
                y: -40,
                ease: "power1",
            })
            .to(topRightText2.current, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: "power1",
            })
            .to(topRightText2.current, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: "power1",
            })
            .to(svgLine2.current, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: "power1",
            })
            .to(svgLine2.current, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: "power1",
            })
            .to(title2.current, {
                duration: 1,
                opacity: 1,
                y: -40,
                ease: "power1",
            })
            .to(number2.current, {
                duration: 1,
                opacity: 1,
                y: -80,
                ease: "power1",
            })
            .to(title3.current, {
                duration: 1,
                opacity: 1,
                y: -20,
                ease: "power1",
            })
            .to(number3.current, {
                duration: 1,
                opacity: 1,
                y: -40,
                ease: "power1",
            })
            .to(topRightText3.current, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: "power1",
            })
            .to(title3.current, {
                duration: 1,
                opacity: 1,
                y: -20,
                ease: "power1",
            })
            .to(number3.current, {
                duration: 1,
                opacity: 1,
                y: -40,
                ease: "power1",
            })
            .to(topRightText3.current, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: "power1",
            })
            .to(svgLine3.current, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: "power1",
            })
            .to(svgLine3.current, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: "power1",
            });

        gsap.fromTo(
            blurIcon1.current,
            {},
            {
                duration: 0.8,
                ease: "none",
                scrollTrigger: {
                    trigger: blurIcon1.current,
                    start: "top-=400px",
                    end: "+=100%",
                    toggleActions: "play reverse play reverse",
                    toggleClass: "active",
                },
            }
        );

        gsap.fromTo(
            blurIcon2.current,
            {},
            {
                duration: 0.8,
                ease: "none",
                scrollTrigger: {
                    trigger: blurIcon2.current,
                    start: "top-=400px",
                    end: "+=100%",
                    toggleActions: "play reverse play reverse",
                    toggleClass: "active",
                },
            }
        );
    }, []);
    return (
        <div className='homepage'>
            {/* Top Banner area starts */}
            <section className='topBanner'>
                <div className='topBanner__bg'>
                    <img src={topbannerBg} alt='Top banner background' />
                </div>
                <div className='topBanner__topShape'>
                    <img
                        src={topBannerRightShape}
                        alt='Top banner background'
                    />
                </div>
                <div className='container'>
                    <div className='topBanner__content d__flex'>
                        <div className='topBanner__leftContent'>
                            <h2>
                                <Trans i18nKey='title-meta'></Trans>
                            </h2>
                            <h1>
                                <Trans i18nKey='title'></Trans>
                            </h1>
                            <p>
                                Pre-register to be part of Naviq Network and
                                follow us on social media to stay on the loop
                            </p>

                            <form onSubmit={handleSubmit(onSubmit, notify)}>
                                <div className='topBanner__inputWrapper inputContainer'>
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
                                    <button
                                        className='btn__primary'
                                        type='submit'
                                    >
                                        <span className='btn__text'>
                                            Pre-register
                                        </span>
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
                        <div className='topBanner__rightContent p__relative'>
                            <img src={Blogo} alt='Gradient logo' />
                            <img
                                src={Shadow}
                                alt='Shadow'
                                className='logo-shadow'
                            />
                        </div>
                    </div>
                </div>
                <div className='topBanner__bubbleWrapper'>
                    <div className='topBanner__bubbleInner'>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                        <div className='topBanner__bubble'></div>
                    </div>
                </div>
            </section>
            {/* Top banner area ends */}

            {/* Feature area starts here */}
            <Element id='tech' name='tech'>
                <section className='features' id='tech' ref={tech}>
                    <div className='container features__wrapper'>
                        <div className='row jc__between m__center'>
                            <div className='col-lg-4 col-md-6 c__width'>
                                <div className='features__singleFeature'>
                                    <div className='singleFeature__icon'>
                                        <img
                                            src={FeatureLogo1}
                                            alt='Feature icon'
                                        />
                                    </div>
                                    <div className='singleFeature__content'>
                                        <h3 className='singleFeature__title'>
                                            <Trans i18nKey='feature-1-title'></Trans>
                                        </h3>
                                        <p className='singleFeature__title'>
                                            <Trans i18nKey='feature-1-content'></Trans>
                                        </p>
                                        <a
                                            href=''
                                            className='singleFeature__tbn'
                                        >
                                            Learn more
                                            <span className='icon'>
                                                <svg
                                                    width='11'
                                                    height='9'
                                                    viewBox='0 0 11 9'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        d='M9.45618 0.323242C10.2549 0.323242 10.7193 1.26775 10.2537 1.94625L6.04326 8.08088C5.94988 8.21688 5.82606 8.32693 5.6826 8.40144C5.53914 8.47594 5.3804 8.51263 5.22025 8.50829C5.06009 8.50396 4.90338 8.45873 4.76381 8.37657C4.62423 8.29441 4.50603 8.1778 4.41952 8.03693L0.652693 1.90231C0.23372 1.21971 0.702611 0.323242 1.47886 0.323242L9.45618 0.323242Z'
                                                        fill='white'
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 c__width'>
                                <div className='features__singleFeature'>
                                    <div className='singleFeature__icon'>
                                        <img
                                            src={FeatureLogo2}
                                            alt='Feature icon'
                                        />
                                    </div>
                                    <div className='singleFeature__content'>
                                        <h3 className='singleFeature__title'>
                                            <Trans i18nKey='feature-2-title'></Trans>
                                        </h3>
                                        <p className='singleFeature__title'>
                                            <Trans i18nKey='feature-2-content'></Trans>
                                        </p>
                                        <a
                                            href=''
                                            className='singleFeature__tbn'
                                        >
                                            Learn more
                                            <span className='icon'>
                                                <svg
                                                    width='11'
                                                    height='9'
                                                    viewBox='0 0 11 9'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        d='M9.45618 0.323242C10.2549 0.323242 10.7193 1.26775 10.2537 1.94625L6.04326 8.08088C5.94988 8.21688 5.82606 8.32693 5.6826 8.40144C5.53914 8.47594 5.3804 8.51263 5.22025 8.50829C5.06009 8.50396 4.90338 8.45873 4.76381 8.37657C4.62423 8.29441 4.50603 8.1778 4.41952 8.03693L0.652693 1.90231C0.23372 1.21971 0.702611 0.323242 1.47886 0.323242L9.45618 0.323242Z'
                                                        fill='white'
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 c__width'>
                                <div className='features__singleFeature'>
                                    <div className='singleFeature__icon'>
                                        <img
                                            src={FeatureLogo3}
                                            alt='Feature icon'
                                        />
                                    </div>
                                    <div className='singleFeature__content'>
                                        <h3 className='singleFeature__title'>
                                            <Trans i18nKey='feature-3-title'></Trans>
                                        </h3>
                                        <p className='singleFeature__title'>
                                            <Trans i18nKey='feature-3-content'></Trans>
                                        </p>
                                        <a
                                            href=''
                                            className='singleFeature__tbn'
                                        >
                                            Learn more
                                            <span className='icon'>
                                                <svg
                                                    width='11'
                                                    height='9'
                                                    viewBox='0 0 11 9'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        d='M9.45618 0.323242C10.2549 0.323242 10.7193 1.26775 10.2537 1.94625L6.04326 8.08088C5.94988 8.21688 5.82606 8.32693 5.6826 8.40144C5.53914 8.47594 5.3804 8.51263 5.22025 8.50829C5.06009 8.50396 4.90338 8.45873 4.76381 8.37657C4.62423 8.29441 4.50603 8.1778 4.41952 8.03693L0.652693 1.90231C0.23372 1.21971 0.702611 0.323242 1.47886 0.323242L9.45618 0.323242Z'
                                                        fill='white'
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='features__banner'>
                        <div className='container features__wrapper'>
                            <div className='features__bannerContent t__center'>
                                <h1 className='features__bannerTitle mb__40'>
                                    Next-generation networking stack that allows
                                    to exchange information and value without
                                    relying on centralized third parties
                                </h1>
                                <button className='btn__primary'>
                                    <span className='btn__text'>explore</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Element>
            {/* Feature area ends here */}

            {/* Build instruction starts here */}
            <section className='buildInstruction'>
                <div className='container'>
                    <div className='buildInstruction__wrapper d__flex jc__between'>
                        <div className='buildInstruction__left'>
                            <h2 className='mb__10'>
                                <Trans i18nKey='section-2-meta'></Trans>
                            </h2>
                            <h1 className='mb__40'>
                                <Trans i18nKey='section-2-title'></Trans>
                            </h1>
                            <p className='mb__60'>
                                <Trans i18nKey='section-3-content'></Trans>
                            </p>
                            <button className='btn__primary'>
                                <span className='btn__text'>
                                    Start building
                                </span>
                            </button>
                        </div>
                        <div className='buildInstruction__tab'>
                            <div className='tab__icon js'>
                                <img src={jsIcon} alt='' />
                            </div>

                            <div className='tab__icon java'>
                                <img src={javaIcon} alt='' />
                            </div>
                            <div className='tab__icon c'>
                                <img src={cIcon} alt='' />
                            </div>
                            <div className='tab__icon r'>
                                <img src={rIcon} alt='' />
                            </div>
                            {/* <div className="tab__icon circle">
                                <img src={csShape} alt="" />
                                <div className="circle__shape">
                                    <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="46.5389" cy="46.5202" rx="29.0795" ry="29.0051" transform="rotate(145.147 46.5389 46.5202)" stroke="url(#paint0_linear)" stroke-width="8" stroke-linecap="round" />
                                        <defs>
                                            <linearGradient id="paint0_linear" x1="14.585" y1="31.1553" x2="68.2711" y2="66.7777" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#3D57ED" />
                                                <stop offset="1" stop-color="#08D795" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div> */}
                            <Tabs>
                                <TabList>
                                    <Tab>
                                        <span className='tab__title'>Java</span>
                                    </Tab>
                                    <Tab>
                                        <span className='tab__title'>
                                            Javascript
                                        </span>
                                    </Tab>
                                    <Tab>
                                        <span className='tab__title'>
                                            C/C++
                                        </span>
                                    </Tab>
                                </TabList>

                                <TabPanel>
                                    <div className='tab__content'>
                                        <pre>{`
1    import java.util.Scanner;
2    import java.io.File;
3    import java.io.IOException;
4    public class DoPayroll {
5    public static void main(String args[])
6                       throws IOException {
7      Scanner diskScanner =
8        new Scanner(new File("EmployeeInfo.txt"));
9      for (int empNum = 1; empNum <= 3; empNum++) {
10       payOneEmployee(diskScanner);
11     }
12     diskScanner.close();
13   }
14 }
                                        `}</pre>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className='tab__content'>
                                        <pre>{`
1   import { get } from "request-promise";
2   import { writeFile } from "fs-extra";
3
4   async function getEmployeeInfo() {
5       try {
6           const body = await get("emloyeeinfo.txt");
8           await writeFile("employeeArticle.html", body);
9           console.log("File written");
10      } catch (err) {
11          console.error(err);
12      }
13  }
14
15  getEmployeeInfo()
                                        `}</pre>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className='tab__content'>
                                        <pre>{`
1   #include <iostream>
2   #include <fstream>
3   using namespace std;
4
5   int main () {
6     ofstream file;
7     file.open ("employeeInfo.txt");
8     file << "Employee info found.\n writing on file\n";
9     file.close();
10    return 0;
11  }
                                        `}</pre>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
            {/* Build instruction ends here */}

            {/* Proof relay area starts here */}
            <section className='proofRelay'>
                <div className='proofRelay__bgShape'>
                    <img src={lShape} alt='Shape' />
                </div>
                <div className='container'>
                    <div className='proofRelay__wrapper d__flex jc__between ai__center'>
                        <div className='proofRelay__left'>
                            <h1><Trans i18nKey="section-4-title"></Trans></h1>
                        </div>
                        <div className='proofRelay__right'>
                            <div className='proofRelay__singleInfo d__flex ai__center mb__70'>
                                <div
                                    className='singleInfo__icon mr__45'
                                    ref={blurIcon1}
                                >
                                    <img src={clientIcon} alt='Client icon' />
                                </div>
                                <div className='singleInfo__content'>
                                    <h4 className='mb__20'><Trans i18nKey="section-4-clients-title"></Trans></h4>
                                    <p>
                                        <Trans i18nKey="section-4-clients-content"></Trans>
                                    </p>
                                </div>
                            </div>
                            <div className='proofRelay__singleInfo ai__center d__flex'>
                                <div
                                    className='singleInfo__icon mr__45'
                                    ref={blurIcon2}
                                >
                                    <img
                                        src={oparatorIcon}
                                        alt='Oparator icon'
                                    />
                                </div>
                                <div className='singleInfo__content'>
                                    <h4 className='mb__20'><Trans i18nKey="section-4-nodes-title"></Trans></h4>
                                    <p>
                                        <Trans i18nKey="section-4-nodes-content"></Trans>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Proof relay area ends here */}

            {/* Map Area starts here */}
            <section className='map'>
                <div className='container p__relative'>
                    <div className='map__heading t__center mb__20'>
                        <h1><Trans i18nKey="section-5-title"></Trans></h1>
                    </div>
                    <div className='map__img'>
                        <img className='w__100' src={Mainmap} alt='Map' />
                    </div>
                    {/* <div className="map__mobileMap">
                        <img className="w__100" src={mobileMap} alt="Map" />
                    </div> */}
                    <div className='map__nodesWrapper'>
                        <div className='map__node one'>
                            <div className='map__nodeIcon'>
                                <img src={nodesmIcon} alt='' />
                            </div>
                            <div className='map__nodeText'>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className='map__node'>
                            <div className='map__nodeIcon'>
                                <img src={nodesmIcon} alt='' />
                            </div>
                            <div className='map__nodeText'>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className='map__node'>
                            <div className='map__nodeIcon'>
                                <img src={nodesmIcon} alt='' />
                            </div>
                            <div className='map__nodeText'>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className='map__node'>
                            <div className='map__nodeIcon'>
                                <img src={nodesmIcon} alt='' />
                            </div>
                            <div className='map__nodeText'>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className='map__node'>
                            <div className='map__nodeIcon'>
                                <img src={nodesmIcon} alt='' />
                            </div>
                            <div className='map__nodeText'>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className='map__node'>
                            <div className='map__nodeIcon'>
                                <img src={nodesmIcon} alt='' />
                            </div>
                            <div className='map__nodeText'>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className='map__node'>
                            <div className='map__nodeIcon'>
                                <img src={nodesmIcon} alt='' />
                            </div>
                            <div className='map__nodeText'>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className='map__node'>
                            <div className='map__nodeIcon'>
                                <img src={nodesmIcon} alt='' />
                            </div>
                            <div className='map__nodeText'>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className='map__node'>
                            <div className='map__nodeIcon'>
                                <img src={nodesmIcon} alt='' />
                            </div>
                            <div className='map__nodeText'>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className='map__node'>
                            <div className='map__nodeIcon'>
                                <img src={nodesmIcon} alt='' />
                            </div>
                            <div className='map__nodeText'>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Map Area ends here */}

            {/* Usefull info area starts here */}
            <section className='usefullInfo'>
                <div className='usefullInfo__bottomShape'>
                    <img src={infoBottomShape} alt='' />
                </div>
                <div className='container'>
                    <div className='usefullInfo__wrapper d__grid p__relative'>
                        <div className='usefullInfo__midIcon'>
                            <img className='m-icon' src={infoMicon} alt='' />
                        </div>
                        <div className='usefullInfo__card'>
                            <h4 className='card__title mb__30'>
                                <span className='icon'>
                                    <img src={titleIcon} alt='Title icon' />
                                </span>
                                <Trans i18nKey="section-6-1-title"></Trans>
                            </h4>
                            <p className='card__text'>
                                <Trans i18nKey="section-6-1-content"></Trans>
                            </p>
                            <span className='card__icon'>
                                <img src={cardIcon1} alt='Card icon' />
                            </span>
                        </div>
                        <div className='usefullInfo__card'>
                            <h4 className='card__title mb__30'>
                                <span className='icon'>
                                    <img src={titleIcon} alt='Title icon' />
                                </span>
                                <Trans i18nKey="section-6-2-title"></Trans>
                            </h4>
                            <p className='card__text'>
                                <Trans i18nKey="section-6-2-content"></Trans>
                            </p>
                            <span className='card__icon'>
                                <img src={cardIcon2} alt='Card icon' />
                            </span>
                        </div>
                        <div className='usefullInfo__card'>
                            <h4 className='card__title mb__30'>
                                <span className='icon'>
                                    <img src={titleIcon} alt='Title icon' />
                                </span>
                                <Trans i18nKey="section-6-3-title"></Trans>
                            </h4>
                            <p className='card__text'>
                                <Trans i18nKey="section-6-3-content"></Trans>
                            </p>
                            <span className='card__icon'>
                                <img src={cardIcon3} alt='Card icon' />
                            </span>
                        </div>
                        <div className='usefullInfo__card'>
                            <h4 className='card__title mb__30'>
                                <span className='icon'>
                                    <img src={titleIcon} alt='Title icon' />
                                </span>
                                <Trans i18nKey="section-6-4-title"></Trans>
                            </h4>
                            <p className='card__text'>
                                <Trans i18nKey="section-6-4-content"></Trans>
                            </p>
                            <span className='card__icon'>
                                <img src={cardIcon4} alt='Card icon' />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Usefull info area ends here */}

            {/* Lottie animation area starts here */}
            <section className='lottieAnimation'>
                <div className='container'>
                    <div className='lottieAnimation__placeholeder mt__10'>
                        <Lottie
                            classname='lottieAnimation__animation'
                            options={defaultOptions}
                            height={800}
                            width={1000}
                        />
                    </div>
                </div>
            </section>
            {/* Lottie animation area ends here */}

            {/* Hash table info area starts here */}
            <section className='hashtableInfo'>
                <div className='container'>
                    <div className='hashtableInfo__card'>
                        <h4 className='mb__25'><Trans i18nKey="section-7-title"></Trans></h4>
                        <p>
                            <Trans i18nKey="section-7-content"></Trans>
                        </p>
                    </div>
                </div>
            </section>
            {/* Hash table info area ends here */}

            {/* Network participants area starts here */}
            <section className='networkParticipants'>
                <div className='container'>
                    <div className='networkParticipants__wrapper p__relative'>
                        <div className='networkParticipants__heading'>
                            <h1><Trans i18nKey="section-8-title"></Trans></h1>
                        </div>
                        <div className='networkParticipants__line'>
                            <img src={hLine} alt='Line' />
                        </div>
                        <div className='networkParticipants__cardWrapper'>
                            <div className='networkParticipants__card d__flex '>
                                <div className='card__icon'>
                                    <img src={shipNodeIcon} alt='' />
                                </div>
                                <div className='card__content'>
                                    <h4><Trans i18nKey="section-8-1-title"></Trans></h4>
                                    <p>
                                        <Trans i18nKey="section-8-1-content"></Trans>
                                    </p>
                                </div>
                            </div>
                            <div className='networkParticipants__card d__flex '>
                                <div className='card__icon'>
                                    <img src={mystnodeIcon} alt='' />
                                </div>
                                <div className='card__content'>
                                    <h4><Trans i18nKey="section-8-2-title"></Trans></h4>
                                    <p>
                                    <Trans i18nKey="section-8-2-content"></Trans>
                                    </p>
                                </div>
                            </div>
                            <div className='networkParticipants__card d__flex '>
                                <div className='card__icon'>
                                    <img src={warpnodeIcon} alt='' />
                                </div>
                                <div className='card__content'>
                                    <h4><Trans i18nKey="section-8-3-title"></Trans></h4>
                                    <p>
                                    <Trans i18nKey="section-8-3-content"></Trans>
                                    </p>
                                </div>
                            </div>
                            <div className='networkParticipants__card d__flex '>
                                <div className='card__icon'>
                                    <img src={gnodeIcon} alt='' />
                                </div>
                                <div className='card__content'>
                                    <h4><Trans i18nKey="section-8-4-title"></Trans></h4>
                                    <p>
                                    <Trans i18nKey="section-8-4-content"></Trans>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Network participants area ends here */}

            {/* Token distribution area starts */}
            <Element id='tokeonomics' name='tokeonomics'>
                <section
                    ref={tokwrap}
                    className='tokenDistribution p__relative'
                    id='tokenomics'
                >
                    <div className='container'>
                        <div className='tokenDistribution__heading t__center mb__85'>
                            <h2 className='mb__10'><Trans i18nKey="section-9-meta"></Trans></h2>
                            <h1><Trans i18nKey="section-9-title"></Trans></h1>
                        </div>
                        <div className='tokenDistribution__Wrapper p__relative d__flex jc__center'>
                            <div className='tokenDistribution__block p__relative'>
                                {/* <div className="block__img mr__15">
                                <img src={tokenBlock} alt="" />
                            </div> */}
                                <div className='tokenDistribution__tokenCircle'>
                                    <div
                                        className='block__text rightText animprop'
                                        ref={topRightText}
                                    >
                                        <div className='rightTopLine'>
                                            <svg
                                                class='animProp'
                                                ref={svgLine}
                                                width='188'
                                                height='66'
                                                viewBox='0 0 188 66'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M10 56L61 10H178'
                                                    stroke='white'
                                                    stroke-width='3'
                                                    stroke-linecap='round'
                                                />
                                                <g filter='url(#filter0_f)'>
                                                    <path
                                                        d='M10.377 56L61.377 10H178.377'
                                                        stroke='white'
                                                        stroke-width='3'
                                                        stroke-linecap='round'
                                                    />
                                                </g>
                                                <defs>
                                                    <filter
                                                        id='filter0_f'
                                                        x='0.876953'
                                                        y='0.5'
                                                        width='187'
                                                        height='65'
                                                        filterUnits='userSpaceOnUse'
                                                        color-interpolation-filters='sRGB'
                                                    >
                                                        <feFlood
                                                            flood-opacity='0'
                                                            result='BackgroundImageFix'
                                                        />
                                                        <feBlend
                                                            mode='normal'
                                                            in='SourceGraphic'
                                                            in2='BackgroundImageFix'
                                                            result='shape'
                                                        />
                                                        <feGaussianBlur
                                                            stdDeviation='4'
                                                            result='effect1_foregroundBlur'
                                                        />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p><Trans i18nKey="section-9-1-content"></Trans>t</p>
                                    </div>
                                    <div
                                        className='block__text leftText animprop'
                                        ref={topRightText3}
                                    >
                                        <div className='leftTopLine'>
                                            <svg
                                                class='animProp'
                                                ref={svgLine3}
                                                width='175'
                                                height='63'
                                                viewBox='0 0 175 63'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M165.623 52.8596L118.534 10.3867H10.5046'
                                                    stroke='white'
                                                    stroke-width='3'
                                                    stroke-linecap='round'
                                                />
                                                <g filter='url(#filter0_f)'>
                                                    <path
                                                        d='M165.275 52.8596L118.185 10.3867H10.1565'
                                                        stroke='white'
                                                        stroke-width='3'
                                                        stroke-linecap='round'
                                                    />
                                                </g>
                                                <defs>
                                                    <filter
                                                        id='filter0_f'
                                                        x='0.65625'
                                                        y='0.886719'
                                                        width='174.118'
                                                        height='61.4729'
                                                        filterUnits='userSpaceOnUse'
                                                        color-interpolation-filters='sRGB'
                                                    >
                                                        <feFlood
                                                            flood-opacity='0'
                                                            result='BackgroundImageFix'
                                                        />
                                                        <feBlend
                                                            mode='normal'
                                                            in='SourceGraphic'
                                                            in2='BackgroundImageFix'
                                                            result='shape'
                                                        />
                                                        <feGaussianBlur
                                                            stdDeviation='4'
                                                            result='effect1_foregroundBlur'
                                                        />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p><Trans i18nKey="section-9-2-content"></Trans></p>
                                    </div>
                                    <div
                                        className='block__text bottomText animprop'
                                        ref={topRightText2}
                                    >
                                        <div className='bottomLine'>
                                            <svg
                                                class='animProp'
                                                ref={svgLine2}
                                                width='238'
                                                height='41'
                                                viewBox='0 0 238 41'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M228 9L206.5 30.5H10'
                                                    stroke='white'
                                                    stroke-width='3'
                                                    stroke-linecap='round'
                                                />
                                                <g filter='url(#filter0_f)'>
                                                    <path
                                                        d='M228 9.5L206.5 31H10'
                                                        stroke='white'
                                                        stroke-width='3'
                                                        stroke-linecap='round'
                                                    />
                                                </g>
                                                <defs>
                                                    <filter
                                                        id='filter0_f'
                                                        x='0.5'
                                                        y='0'
                                                        width='237'
                                                        height='40.5'
                                                        filterUnits='userSpaceOnUse'
                                                        color-interpolation-filters='sRGB'
                                                    >
                                                        <feFlood
                                                            flood-opacity='0'
                                                            result='BackgroundImageFix'
                                                        />
                                                        <feBlend
                                                            mode='normal'
                                                            in='SourceGraphic'
                                                            in2='BackgroundImageFix'
                                                            result='shape'
                                                        />
                                                        <feGaussianBlur
                                                            stdDeviation='4'
                                                            result='effect1_foregroundBlur'
                                                        />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p><Trans i18nKey="section-9-3-title"></Trans></p>
                                    </div>
                                    <div className='tokenDistribution__icon'>
                                        <svg
                                            width='69'
                                            height='69'
                                            viewBox='0 0 69 69'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M8.89526 34.0719H20.253V59.6269H8.89526V34.0719ZM48.6475 22.7141H60.0052V59.6269H48.6475V22.7141ZM28.7714 5.67749H40.1291V59.6269H28.7714V5.67749Z'
                                                fill='#08D795'
                                            />
                                        </svg>
                                    </div>
                                    <div className='tokenDistribution__title'>
                                        <span className='t1' ref={title1}>
                                        <Trans i18nKey="section-9-1-title"></Trans>
                                        </span>
                                        <span className='t2' ref={title2}>
                                        <Trans i18nKey="section-9-2-title"></Trans>
                                        </span>
                                        <span className='t3' ref={title3}>
                                        <Trans i18nKey="section-9-3-title"></Trans>
                                        </span>
                                    </div>
                                    <div className='tokenDistribution__number'>
                                        <span className='n1' ref={number1}>
                                            12,000 NVQ
                                        </span>
                                        <span className='n2' ref={number2}>
                                            200,000 NVQ
                                        </span>
                                        <span className='n3' ref={number3}>
                                            12,000 NVQ
                                        </span>
                                    </div>
                                    <div className='tokenDistribution__lineBlack'>
                                        <div className='svg__wrap'>
                                            <svg
                                                width='415'
                                                height='428'
                                                viewBox='0 0 415 428'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    className='line2'
                                                    d='M384.33 104.409C389.043 112.471 393.21 120.863 396.794 129.531C407.082 154.4 412.376 181.053 412.376 207.97C412.376 234.886 407.082 261.54 396.794 286.408C386.51 311.276 371.434 333.872 352.426 352.905C333.419 371.938 310.854 387.036 286.02 397.336C270.299 403.858 253.864 408.375 237.1 410.813'
                                                    stroke='#20202D'
                                                    stroke-width='5'
                                                    stroke-linecap='round'
                                                />
                                                <path
                                                    className='line3'
                                                    d='M207.688 414.125C173.131 414.125 139.136 405.405 108.872 388.775C78.6091 372.147 53.0619 348.152 34.613 319.026C16.1631 289.901 5.41255 256.594 3.36079 222.21C1.60504 192.773 6.27543 163.367 16.9783 136'
                                                    stroke='#20202D'
                                                    stroke-width='5'
                                                    stroke-linecap='round'
                                                />
                                                <circle
                                                    className='circle3'
                                                    cx='21.75'
                                                    cy='120.188'
                                                    r='14.0625'
                                                    stroke='#20202D'
                                                    stroke-width='5'
                                                    stroke-linecap='round'
                                                />
                                                <path
                                                    className='line1'
                                                    id='line1'
                                                    d='M367.062 78.6705C345.23 51.8421 316.946 30.9655 284.847 17.986C252.747 5.00654 217.875 0.347212 183.484 4.44227C149.092 8.53639 116.299 21.2521 88.1617 41.4033C63.8828 58.7909 43.7521 81.2256 29.1211 107.096'
                                                    stroke='#20202D'
                                                    stroke-width='5'
                                                    stroke-linecap='round'
                                                />
                                                <circle
                                                    className='circle1'
                                                    cx='373.312'
                                                    cy='92.0625'
                                                    r='14.0625'
                                                    stroke='#20202D'
                                                    stroke-width='5'
                                                    stroke-linecap='round'
                                                />
                                                <circle
                                                    className='circle2'
                                                    cx='223.062'
                                                    cy='411.062'
                                                    r='14.0625'
                                                    stroke='#20202D'
                                                    stroke-width='5'
                                                    stroke-linecap='round'
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='tokenDistribution__infoBox'>
                            <h4 className='mb__20'>
                                Lorem ipsum dolor sit amet, consectetuer
                            </h4>
                            <p className='mb__25'>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat
                                volutpat. Ut wisi enim ad minim veniam, quis
                                nostrud exerci tation ullam-corper suscipit
                                lobortis nisl ut aliquip ex ea commodo
                                consequat.
                            </p>
                            <button className='see__more'>
                                See more
                                <span className='icon'>
                                    <svg
                                        width='15'
                                        height='19'
                                        viewBox='0 0 15 19'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M0.146729 1.81297C0.146729 0.339985 1.78022 -0.516498 2.95366 0.342054L13.5633 8.10729C13.7985 8.2795 13.9888 8.50786 14.1177 8.77244C14.2465 9.03702 14.31 9.32977 14.3025 9.62514C14.295 9.92051 14.2168 10.2095 14.0747 10.4669C13.9326 10.7243 13.7309 10.9423 13.4873 11.1019L2.87766 18.0489C1.69713 18.8216 0.146729 17.9568 0.146729 16.5252V1.81297Z'
                                            fill='#222230'
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
            </Element>
            {/* Token distribution area ends */}

            {/* Roadmap area starts here */}
            <section className='roadmap'>
                <div className='container p__relative'>
                    <div className='roadmap__heading t__center'>
                        <h2 className='mb__10'><Trans i18nKey="section-11-meta"></Trans></h2>
                        <h1><Trans i18nKey="section-11-title"></Trans></h1>
                    </div>
                    <div className='roadmap__planing p__relative'>
                        <div className='roadmap__planingThumbnail'>
                            <img
                                className='w__100'
                                src={roadmapThumb}
                                alt='Roadmap'
                            />
                        </div>
                        <div className='roadmap__planbox d__flex box1'>
                            <div className='planbox__number'>
                                <span><Trans i18nKey="section-11-1-title"></Trans></span>
                            </div>
                            <div className='planbox__content'>
                                <p><Trans i18nKey="section-11-1-content"></Trans></p>
                            </div>
                        </div>
                        <div className='roadmap__planbox d__flex box2'>
                            <div className='planbox__number'>
                                <span><Trans i18nKey="section-11-2-title"></Trans></span>
                            </div>
                            <div className='planbox__content'>
                                <p><Trans i18nKey="section-11-2-content"></Trans></p>
                            </div>
                        </div>
                        <div className='roadmap__planbox d__flex box3'>
                            <div className='planbox__number'>
                                <span><Trans i18nKey="section-11-3-title"></Trans></span>
                            </div>
                            <div className='planbox__content'>
                                <p><Trans i18nKey="section-11-3-content"></Trans></p>
                            </div>
                        </div>
                        <div className='roadmap__planbox d__flex box4'>
                            <div className='planbox__number'>
                                <span><Trans i18nKey="section-11-4-title"></Trans></span>
                            </div>
                            <div className='planbox__content'>
                                <p><Trans i18nKey="section-11-4-content"></Trans></p>
                            </div>
                        </div>
                        <div className='roadmap__planbox d__flex box5'>
                            <div className='planbox__number'>
                                <span><Trans i18nKey="section-11-5-title"></Trans></span>
                            </div>
                            <div className='planbox__content'>
                                <p><Trans i18nKey="section-11-5-content"></Trans></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Roadmap area ends here */}

            {/* More info area starts here */}
            <section className='moreInfo'>
                <div className='container'>
                    <div className='moreInfo__heading mb__70 t__center'>
                        <h2 className='mb__10'><Trans i18nKey="section-12-meta">Lorem Ipsum</Trans></h2>
                        <h1><Trans i18nKey="section-12-title">Lorem Ipsum</Trans></h1>
                    </div>
                    <div className='moreInfo__cardWrapper d__grid'>
                        <div className='moreInfo__card'>
                            <div className='card__icon mb__20'>
                                <svg
                                    width='60'
                                    height='60'
                                    viewBox='0 0 60 60'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M45.4372 37.8713L50.2043 41.082C54.349 43.5556 57.7155 41.5563 57.7319 36.6429L57.7647 25.5369C57.7811 20.6235 54.431 14.6173 50.2863 12.1437L34.3629 2.63875C30.2182 0.1651 26.8517 2.16434 26.8353 7.07775L26.8271 10.856'
                                        stroke='white'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                    />
                                    <path
                                        d='M35.0101 47.9851L36.5254 48.8916C40.6701 51.3651 44.0367 49.3659 44.0531 44.4526L44.0858 33.3469C44.1021 28.4336 40.752 22.4275 36.6073 19.954L20.684 10.4493C16.5393 7.97568 13.1728 9.97487 13.1564 14.8882L13.1482 18.6663'
                                        stroke='#222230'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                        stroke-linecap='round'
                                    />
                                    <path
                                        d='M25.4838 27.7704L9.56037 18.2648C5.41571 15.791 2.04924 17.7904 2.03286 22.7041L2.00006 33.8109C1.98368 38.7247 5.33382 44.7314 9.47848 47.2052L25.4019 56.7108C29.5466 59.1846 32.913 57.1852 32.9294 52.2715L32.9622 41.1647C32.9786 36.2509 29.6285 30.2357 25.4838 27.7704Z'
                                        stroke='url(#paint0_linear)'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                        stroke-linecap='round'
                                    />
                                    <defs>
                                        <linearGradient
                                            id='paint0_linear'
                                            x1='0.781805'
                                            y1='37.4809'
                                            x2='34.1943'
                                            y2='37.4809'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stop-color='#03E38D' />
                                            <stop
                                                offset='0.1413'
                                                stop-color='#08D795'
                                            />
                                            <stop
                                                offset='0.3965'
                                                stop-color='#15B7AB'
                                            />
                                            <stop
                                                offset='0.7341'
                                                stop-color='#2A84CE'
                                            />
                                            <stop
                                                offset='1'
                                                stop-color='#3D57ED'
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h4 className='card__title mb__30'>
                                Light weight stack
                            </h4>
                            <p className='card__text'>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt
                            </p>
                        </div>
                        <div className='moreInfo__card'>
                            <div className='card__icon mb__20'>
                                <svg
                                    width='58'
                                    height='66'
                                    viewBox='0 0 58 66'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M15.6992 23.3936C15.6992 17.3772 21.6959 12.501 29.093 12.501C36.4902 12.501 42.4868 17.3772 42.4868 23.3936'
                                        stroke='#222230'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                        stroke-linecap='round'
                                    />
                                    <path
                                        d='M4.97949 21.1846C4.97949 10.36 15.7735 1.57715 29.0929 1.57715C42.4123 1.57715 53.2063 10.3523 53.2063 21.1846'
                                        stroke='url(#paint0_linear)'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                        stroke-linecap='round'
                                    />
                                    <path
                                        d='M29.0927 35.3496C32.2852 35.3496 34.8733 32.6742 34.8733 29.374C34.8733 26.0738 32.2852 23.3984 29.0927 23.3984C25.9001 23.3984 23.312 26.0738 23.312 29.374C23.312 32.6742 25.9001 35.3496 29.0927 35.3496Z'
                                        stroke='url(#paint1_linear)'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                        stroke-linecap='round'
                                    />
                                    <path
                                        d='M47.9324 64.459H10.0676C5.61292 64.459 2 60.7226 2 56.1157C2 51.5088 5.61292 47.7725 10.0676 47.7725H47.9324C52.3871 47.7725 56 51.5088 56 56.1157C56.0074 60.7226 52.3945 64.459 47.9324 64.459Z'
                                        stroke='url(#paint2_linear)'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                    />
                                    <path
                                        d='M39.0974 47.7725H18.9098C17.7254 47.7725 16.7644 46.7797 16.7644 45.5562C16.7644 44.3326 17.7254 43.3398 18.9098 43.3398H39.0974C40.2818 43.3398 41.2428 44.3326 41.2428 45.5562C41.2428 46.7797 40.2818 47.7725 39.0974 47.7725Z'
                                        stroke='url(#paint3_linear)'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                    />
                                    <defs>
                                        <linearGradient
                                            id='paint0_linear'
                                            x1='3.86135'
                                            y1='11.3832'
                                            x2='54.3205'
                                            y2='11.3832'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stop-color='#03E38D' />
                                            <stop
                                                offset='0.1413'
                                                stop-color='#08D795'
                                            />
                                            <stop
                                                offset='0.3965'
                                                stop-color='#15B7AB'
                                            />
                                            <stop
                                                offset='0.7341'
                                                stop-color='#2A84CE'
                                            />
                                            <stop
                                                offset='1'
                                                stop-color='#3D57ED'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='paint1_linear'
                                            x1='22.1925'
                                            y1='29.3719'
                                            x2='35.9889'
                                            y2='29.3719'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stop-color='#03E38D' />
                                            <stop
                                                offset='0.1413'
                                                stop-color='#08D795'
                                            />
                                            <stop
                                                offset='0.3965'
                                                stop-color='#15B7AB'
                                            />
                                            <stop
                                                offset='0.7341'
                                                stop-color='#2A84CE'
                                            />
                                            <stop
                                                offset='1'
                                                stop-color='#3D57ED'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='paint2_linear'
                                            x1='0.878731'
                                            y1='56.1163'
                                            x2='57.1219'
                                            y2='56.1163'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stop-color='#03E38D' />
                                            <stop
                                                offset='0.1413'
                                                stop-color='#08D795'
                                            />
                                            <stop
                                                offset='0.3965'
                                                stop-color='#15B7AB'
                                            />
                                            <stop
                                                offset='0.7341'
                                                stop-color='#2A84CE'
                                            />
                                            <stop
                                                offset='1'
                                                stop-color='#3D57ED'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='paint3_linear'
                                            x1='15.6431'
                                            y1='45.5538'
                                            x2='42.3573'
                                            y2='45.5538'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stop-color='#03E38D' />
                                            <stop
                                                offset='0.1413'
                                                stop-color='#08D795'
                                            />
                                            <stop
                                                offset='0.3965'
                                                stop-color='#15B7AB'
                                            />
                                            <stop
                                                offset='0.7341'
                                                stop-color='#2A84CE'
                                            />
                                            <stop
                                                offset='1'
                                                stop-color='#3D57ED'
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h4 className='card__title mb__30'>
                                Residential data center
                            </h4>
                            <p className='card__text'>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt
                            </p>
                        </div>
                        <div className='moreInfo__card'>
                            <div className='card__icon mb__20'>
                                <svg
                                    width='55'
                                    height='65'
                                    viewBox='0 0 55 65'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M27.4656 2.91602V9.82227'
                                        stroke='#222230'
                                        stroke-width='5'
                                        stroke-miterlimit='10'
                                        stroke-linecap='round'
                                    />
                                    <path
                                        d='M27.4656 54.9248V61.833'
                                        stroke='#222230'
                                        stroke-width='5'
                                        stroke-miterlimit='10'
                                        stroke-linecap='round'
                                    />
                                    <path
                                        d='M30.2788 29.6127C30.2788 27.9607 28.9833 26.6211 27.3858 26.6211C25.7882 26.6211 24.4927 27.9607 24.4927 29.6127C24.4927 30.7715 25.1285 31.766 26.0584 32.2674L25.979 32.3413L24.5722 38.1191H27.3858H30.1994L28.8084 32.2098C29.6827 31.7003 30.2788 30.7304 30.2788 29.6127Z'
                                        fill='url(#paint0_linear)'
                                    />
                                    <path
                                        d='M15.1381 55.9512L4.34465 44.7883C2.84247 43.2347 2 41.1304 2 38.9274V26.0384C2 23.8436 2.84247 21.7311 4.34465 20.1775L15.2334 8.91602'
                                        stroke='url(#paint1_linear)'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                        stroke-linecap='round'
                                    />
                                    <path
                                        d='M17.4032 62.5293C19.2424 62.5293 20.7334 60.9874 20.7334 59.0854C20.7334 57.1835 19.2424 55.6416 17.4032 55.6416C15.564 55.6416 14.073 57.1835 14.073 59.0854C14.073 60.9874 15.564 62.5293 17.4032 62.5293Z'
                                        stroke='url(#paint2_linear)'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                    />
                                    <path
                                        d='M17.4032 9.32617C19.2424 9.32617 20.7334 7.78455 20.7334 5.88283C20.7334 3.9811 19.2424 2.43945 17.4032 2.43945C15.564 2.43945 14.073 3.9811 14.073 5.88283C14.073 7.78455 15.564 9.32617 17.4032 9.32617Z'
                                        stroke='url(#paint3_linear)'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                    />
                                    <path
                                        d='M39.6099 55.9854L50.4351 44.7889C51.9372 43.2352 52.7797 41.1307 52.7797 38.9276V26.0376C52.7797 23.8427 51.9372 21.73 50.4351 20.1763L39.4509 8.81543'
                                        stroke='url(#paint4_linear)'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                        stroke-linecap='round'
                                    />
                                    <path
                                        d='M37.3766 62.5293C39.2158 62.5293 40.7068 60.9874 40.7068 59.0854C40.7068 57.1835 39.2158 55.6416 37.3766 55.6416C35.5374 55.6416 34.0464 57.1835 34.0464 59.0854C34.0464 60.9874 35.5374 62.5293 37.3766 62.5293Z'
                                        stroke='url(#paint5_linear)'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                    />
                                    <path
                                        d='M37.3768 9.32617C39.2161 9.32617 40.7071 7.78455 40.7071 5.88283C40.7071 3.9811 39.2161 2.43945 37.3768 2.43945C35.5376 2.43945 34.0466 3.9811 34.0466 5.88283C34.0466 7.78455 35.5376 9.32617 37.3768 9.32617Z'
                                        stroke='url(#paint6_linear)'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                    />
                                    <path
                                        d='M42.8767 23.558L35.9858 16.431C35.0161 15.4281 33.7047 14.8691 32.3376 14.8691H22.5934C21.2263 14.8691 19.9069 15.4281 18.9452 16.431L12.0543 23.558C11.0846 24.5609 10.5442 25.9172 10.5442 27.3311V37.4092C10.5442 38.8231 11.0846 40.1876 12.0543 41.1823L18.9452 48.3093C19.9149 49.3121 21.2263 49.8711 22.5934 49.8711H32.3376C33.7047 49.8711 35.0241 49.3121 35.9858 48.3093L42.8767 41.1823C43.8464 40.1794 44.3868 38.8231 44.3868 37.4092V27.3311C44.3948 25.9172 43.8464 24.5609 42.8767 23.558ZM27.4655 44.4951C20.9958 44.4951 15.7501 39.0697 15.7501 32.3784C15.7501 25.6871 20.9958 20.2616 27.4655 20.2616C33.9352 20.2616 39.1809 25.6871 39.1809 32.3784C39.1809 39.0697 33.9352 44.4951 27.4655 44.4951Z'
                                        fill='#BEBECE'
                                    />
                                    <defs>
                                        <linearGradient
                                            id='paint0_linear'
                                            x1='27.3897'
                                            y1='38.1209'
                                            x2='27.3897'
                                            y2='26.6216'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stop-color='#03E38D' />
                                            <stop
                                                offset='0.1413'
                                                stop-color='#08D795'
                                            />
                                            <stop
                                                offset='0.3965'
                                                stop-color='#15B7AB'
                                            />
                                            <stop
                                                offset='0.7341'
                                                stop-color='#2A84CE'
                                            />
                                            <stop
                                                offset='1'
                                                stop-color='#3D57ED'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='paint1_linear'
                                            x1='17.2211'
                                            y1='32.4322'
                                            x2='0.00830955'
                                            y2='32.4322'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stop-color='#03E38D' />
                                            <stop
                                                offset='0.1413'
                                                stop-color='#08D795'
                                            />
                                            <stop
                                                offset='0.3965'
                                                stop-color='#15B7AB'
                                            />
                                            <stop
                                                offset='0.7341'
                                                stop-color='#2A84CE'
                                            />
                                            <stop
                                                offset='1'
                                                stop-color='#3D57ED'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='paint2_linear'
                                            x1='12.0868'
                                            y1='59.0842'
                                            x2='22.7161'
                                            y2='59.0842'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stop-color='#03E38D' />
                                            <stop
                                                offset='0.1413'
                                                stop-color='#08D795'
                                            />
                                            <stop
                                                offset='0.3965'
                                                stop-color='#15B7AB'
                                            />
                                            <stop
                                                offset='0.7341'
                                                stop-color='#2A84CE'
                                            />
                                            <stop
                                                offset='1'
                                                stop-color='#3D57ED'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='paint3_linear'
                                            x1='12.0868'
                                            y1='5.88462'
                                            x2='22.7161'
                                            y2='5.88462'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stop-color='#03E38D' />
                                            <stop
                                                offset='0.1413'
                                                stop-color='#08D795'
                                            />
                                            <stop
                                                offset='0.3965'
                                                stop-color='#15B7AB'
                                            />
                                            <stop
                                                offset='0.7341'
                                                stop-color='#2A84CE'
                                            />
                                            <stop
                                                offset='1'
                                                stop-color='#3D57ED'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='paint4_linear'
                                            x1='37.4698'
                                            y1='32.4037'
                                            x2='54.7711'
                                            y2='32.4037'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stop-color='#03E38D' />
                                            <stop
                                                offset='0.1413'
                                                stop-color='#08D795'
                                            />
                                            <stop
                                                offset='0.3965'
                                                stop-color='#15B7AB'
                                            />
                                            <stop
                                                offset='0.7341'
                                                stop-color='#2A84CE'
                                            />
                                            <stop
                                                offset='1'
                                                stop-color='#3D57ED'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='paint5_linear'
                                            x1='42.6928'
                                            y1='59.0842'
                                            x2='32.0635'
                                            y2='59.0842'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stop-color='#03E38D' />
                                            <stop
                                                offset='0.1413'
                                                stop-color='#08D795'
                                            />
                                            <stop
                                                offset='0.3965'
                                                stop-color='#15B7AB'
                                            />
                                            <stop
                                                offset='0.7341'
                                                stop-color='#2A84CE'
                                            />
                                            <stop
                                                offset='1'
                                                stop-color='#3D57ED'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='paint6_linear'
                                            x1='42.693'
                                            y1='5.88462'
                                            x2='32.0638'
                                            y2='5.88462'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stop-color='#03E38D' />
                                            <stop
                                                offset='0.1413'
                                                stop-color='#08D795'
                                            />
                                            <stop
                                                offset='0.3965'
                                                stop-color='#15B7AB'
                                            />
                                            <stop
                                                offset='0.7341'
                                                stop-color='#2A84CE'
                                            />
                                            <stop
                                                offset='1'
                                                stop-color='#3D57ED'
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h4 className='card__title mb__30'>
                                End-to-endencryption
                            </h4>
                            <p className='card__text'>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt
                            </p>
                        </div>
                        <div className='moreInfo__card'>
                            <div className='card__icon mb__20'>
                                <svg
                                    width='57'
                                    height='59'
                                    viewBox='0 0 57 59'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M2.77539 31.0167C6.45387 26.9328 10.1536 24.9534 12.4233 23.9895C15.0061 22.8857 16.8632 22.091 19.2111 22.5031C21.182 22.8563 22.0714 23.8055 27.4788 28.5517C31.1146 31.7452 32.9574 33.3493 34.0389 34.0116C36.2161 35.3434 39.7878 37.5289 43.7652 37.1536C50.7806 36.4913 54.6441 28.272 55.007 27.47'
                                        stroke='#BEBECE'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                        stroke-linecap='round'
                                    />
                                    <path
                                        d='M19.6523 3.44824V7.12402'
                                        stroke='#222230'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                        stroke-linecap='round'
                                    />
                                    <path
                                        d='M19.6526 13.7002V49.8506'
                                        stroke='#222230'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                        stroke-linecap='round'
                                        stroke-dasharray='8.93 8.93'
                                    />
                                    <path
                                        d='M19.6526 53.1318V56.8105'
                                        stroke='#222230'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                        stroke-linecap='round'
                                    />
                                    <path
                                        d='M49.1869 56.8164H7.81293C4.60405 56.8164 2 54.1231 2 50.8042V8.01222C2 4.69336 4.60405 2 7.81293 2H49.1869C52.3957 2 54.9999 4.69336 54.9999 8.01222V50.8042C54.9999 54.1231 52.3957 56.8164 49.1869 56.8164Z'
                                        stroke='url(#paint0_linear)'
                                        stroke-width='3'
                                        stroke-miterlimit='10'
                                    />
                                    <path
                                        d='M23.8106 31.854C27.6383 29.4078 28.8237 24.2156 26.4581 20.2568C24.0926 16.2981 19.0719 15.0719 15.2442 17.5181C11.4164 19.9643 10.2311 25.1565 12.5967 29.1153C14.9622 33.074 19.9828 34.3002 23.8106 31.854Z'
                                        fill='#222230'
                                    />
                                    <path
                                        d='M19.4748 20.7422C17.3901 20.7422 15.6968 22.4937 15.6968 24.6499C15.6968 26.8061 17.3901 28.5576 19.4748 28.5576C21.5595 28.5576 23.2529 26.8061 23.2529 24.6499C23.2529 22.4937 21.5595 20.7422 19.4748 20.7422Z'
                                        fill='url(#paint1_linear)'
                                    />
                                    <defs>
                                        <linearGradient
                                            id='paint0_linear'
                                            x1='56.7788'
                                            y1='29.4078'
                                            x2='0.219107'
                                            y2='29.4078'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stop-color='#03E38D' />
                                            <stop
                                                offset='0.1413'
                                                stop-color='#08D795'
                                            />
                                            <stop
                                                offset='0.3965'
                                                stop-color='#15B7AB'
                                            />
                                            <stop
                                                offset='0.7341'
                                                stop-color='#2A84CE'
                                            />
                                            <stop
                                                offset='1'
                                                stop-color='#3D57ED'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='paint1_linear'
                                            x1='15.6998'
                                            y1='24.6467'
                                            x2='23.2509'
                                            y2='24.6467'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stop-color='#03E38D' />
                                            <stop
                                                offset='0.1413'
                                                stop-color='#08D795'
                                            />
                                            <stop
                                                offset='0.3965'
                                                stop-color='#15B7AB'
                                            />
                                            <stop
                                                offset='0.7341'
                                                stop-color='#2A84CE'
                                            />
                                            <stop
                                                offset='1'
                                                stop-color='#3D57ED'
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h4 className='card__title mb__30'>
                                Distributed Hash Table
                            </h4>
                            <p className='card__text'>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt
                            </p>
                        </div>
                    </div>

                    <div className='moreInfo__contentWrapper d__grid'>
                        <div className='moreInfo__singleContent'>
                            <img
                                className='w__100'
                                src={smLottie}
                                alt='Placeholder'
                            />
                        </div>
                        <div className='moreInfo__singleContent t__right'>
                            <h1 className='mb__35'><Trans i18nKey="section-13-title"></Trans></h1>
                            <p>
                            <Trans i18nKey="section-13-content"></Trans>
                            </p>
                        </div>
                        <div className='moreInfo__singleContent t__left'>
                            <h1 className='mb__35'><Trans i18nKey="section-14-title"></Trans></h1>
                            <p>
                            <Trans i18nKey="section-14-content"></Trans>
                            </p>
                        </div>
                        <div className='moreInfo__singleContent'>
                            <img
                                className='w__100'
                                src={smLottie}
                                alt='Placeholder'
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* More info area ends here */}

            {/* Team area starts here */}
            <Element id='team' name='team'>
                <section className='team' id='team'>
                    <div className='container'>
                        <div className='team__heading t__center'>
                            <h1 className='mb__10'><Trans i18nKey="section-15-title"></Trans></h1>
                            <p>
                            <Trans i18nKey="section-15-content"></Trans>
                            </p>
                        </div>
                        <div className='team__content d__flex jc__between'>
                            <div className='team__card'>
                                <div className='card__emplyImg'>
                                    <img src={Emply1} alt='' />
                                </div>
                                <div className='card__emplyInfo'>
                                    <h1 className='card__emplyName'>
                                        Ramon Dice
                                    </h1>
                                    <p className='card__emplyPosition'>
                                        Project lead
                                    </p>
                                </div>
                                <div className='card__text'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam nonummy nibh
                                        euismod tincidunt ut laoreet dolore
                                        magna aliquam erat.
                                    </p>
                                </div>
                            </div>
                            <div className='team__card'>
                                <div className='card__emplyImg'>
                                    <img src={Emply2} alt='' />
                                </div>
                                <div className='card__emplyInfo'>
                                    <h1 className='card__emplyName'>
                                        Brad Trey
                                    </h1>
                                    <p className='card__emplyPosition'>
                                        Project lead
                                    </p>
                                </div>
                                <div className='card__text'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam nonummy nibh
                                        euismod tincidunt ut laoreet dolore
                                        magna aliquam erat.
                                    </p>
                                </div>
                            </div>
                            <div className='team__card'>
                                <div className='card__emplyImg'>
                                    <img src={Emply3} alt='' />
                                </div>
                                <div className='card__emplyInfo'>
                                    <h1 className='card__emplyName'>
                                        Bay Leaves
                                    </h1>
                                    <p className='card__emplyPosition'>
                                        Mary Owens
                                    </p>
                                </div>
                                <div className='card__text'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam nonummy nibh
                                        euismod tincidunt ut laoreet dolore
                                        magna aliquam erat.
                                    </p>
                                </div>
                            </div>
                            <div className='team__card'>
                                <div className='card__emplyImg'>
                                    <img src={Emply4} alt='' />
                                </div>
                                <div className='card__emplyInfo'>
                                    <h1 className='card__emplyName'>
                                        Ramon Dice
                                    </h1>
                                    <p className='card__emplyPosition'>
                                        Project lead
                                    </p>
                                </div>
                                <div className='card__text'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam nonummy nibh
                                        euismod tincidunt ut laoreet dolore
                                        magna aliquam erat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Element>
            {/* Team area ends here */}

            {/* Media & News area starts here */}
            <section className='mediaNews'>
                <div className='mediaNews__bgLine'>
                    <img src={gLine} alt='' />
                </div>
                <div className='container'>
                    <div className='mediaNews__heading t__center mb__80'>
                        <h1><Trans i18nKey="section-16-title"></Trans></h1>
                    </div>
                    <div className='mediaNews__brands d__flex jc__between'>
                        <div className='mediaNews__singleBrand'>
                            <img src={newsbrand1} alt='News Brand logo' />
                        </div>
                        <div className='mediaNews__singleBrand'>
                            <img src={newsbrand2} alt='News Brand logo' />
                        </div>
                    </div>
                </div>
            </section>
            {/* Media & News area ends here */}

            {/* Investor area starts here */}
            <section className='investors'>
                <div className='investors__bgLine'>
                    <img src={investorgline} alt='' />
                </div>
                <div className='container'>
                    <div className='investors__heading mb__100 t__center'>
                        <h1><Trans i18nKey="section-17-title"></Trans></h1>
                    </div>
                    <div className='investors__wrapper d__flex jc__between'>
                        <div className='investors__singleInvestor'>
                            <img src={investor1} alt='' />
                        </div>
                        <div className='investors__singleInvestor'>
                            <img src={investor2} alt='' />
                        </div>
                        <div className='investors__singleInvestor'>
                            <img src={investor3} alt='' />
                        </div>
                        <div className='investors__singleInvestor'>
                            <img src={investor4} alt='' />
                        </div>
                    </div>
                </div>
            </section>
            {/* Investor area ends here */}

            {/* Join community area starts here */}
            <section className='joinCommunity'>
                <div className='container'>
                    <div className='joinCommunity__heading mb__100 t__center'>
                        <h2 className='mb__10'><Trans i18nKey="section-18-meta"></Trans></h2>
                        <h1><Trans i18nKey="section-18-title"></Trans></h1>
                    </div>
                    <div className='joinCommunity__wrapper d__flex jc__between'>
                        <div className='joinCommunity__joinCard'>
                            <img
                                src={telegramGicon}
                                alt='Social Gradient Icon'
                            />
                        </div>
                        <div className='joinCommunity__joinCard'>
                            <img
                                src={discordGicon}
                                alt='Social Gradient Icon'
                            />
                        </div>
                        <div className='joinCommunity__joinCard'>
                            <img
                                src={twitterGicon}
                                alt='Social Gradient Icon'
                            />
                        </div>
                        <div className='joinCommunity__joinCard'>
                            <img src={radditGicon} alt='Social Gradient Icon' />
                        </div>
                        <div className='joinCommunity__joinCard'>
                            <img src={githubGicon} alt='Social Gradient Icon' />
                        </div>
                    </div>
                </div>
            </section>
            {/* Join community area ends here */}
        </div>
    );
};

export default HomePage;
