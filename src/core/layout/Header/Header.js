import React, { useState, useEffect } from 'react';
import './Header.scss';
import logo from '../../../assets/images/logo.svg';
import GplusIcon from '../../../assets/images/g-plus.svg';
import Ticon from '../../../assets/images/language.svg';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import * as Scroll from 'react-scroll';
import { useTranslation } from 'react-i18next';
let Link = Scroll.Link;

const Header = (props) => {
    const [mobileMenuStatus, setmobileMenuStatus] = useState(false);
    const [headerStickyStatus, setheaderStickyStatus] = useState(false);
    const [topNotificationStatus, settopNotificationStatus] = useState(true);
    const [dropdownHeight, setdropdownHeight] = useState(false);

    const mobileMenuHandler = () => {
        setmobileMenuStatus(!mobileMenuStatus);
        console.log("working")
    }
    const notificationHandler = () => {
        settopNotificationStatus(false);
    }
    const handleMobileDropdown = () => {
        setdropdownHeight(!dropdownHeight)
    }
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -250;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }
    const { i18n } = useTranslation();

    let defaultLanguage = localStorage.getItem("choosenLanguage");

    useEffect(() => {
        if(defaultLanguage) {
            i18n.changeLanguage(defaultLanguage);
        }
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                setheaderStickyStatus(true)
            } else {
                setheaderStickyStatus(false)
            }
        });
    }, [])

    //change languages features start
    
    /*
        call this function for changing language
        pass "language code" i.e "en", "de" as parameter
    */
    const changeLanguage = (ev) =>{
        let language = ev.options[ev.selectedIndex].value;
        i18n.changeLanguage(language);
        localStorage.setItem("choosenLanguage", language);
    }
    //change languages features end

    return (
        <div className={"header " + (headerStickyStatus ? "sticky" : "")}>
            <div className={"header__topText p__relative " + (topNotificationStatus ? "" : "hideNotification")}>
                <p className="t__center">
                    Week 1 / 12 NVQ is available on Ethereum, token address
                    is 0X67B6D479c7bB412C54e03dCA8E1Bc6740ce6b99C
                </p>
                <span className="closebtn" onClick={notificationHandler}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1.99023L2 11.2959M11 11.2959L2 1.99023L11 11.2959Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </div>
            <div className="header__nav">
                <div className="container d__flex jc__between ai__center">
                    <div className="header__logo">
                        <NavLink to="/" exact={true}>
                            <span>
                                <img src={logo} alt="" />
                            </span>
                        </NavLink>
                    </div>
                    <div className={"header__mobileBtn d__none " + (mobileMenuStatus ? "active" : "")} onClick={mobileMenuHandler}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                    <div className={"header__mobileBackdrop " + (mobileMenuStatus ? "active" : "")} onClick={mobileMenuHandler}></div>
                    <div className={"header__navMenu " + (mobileMenuStatus ? "showMenu" : "")}>
                        <ul className="header__navMenuList d__flex">
                            <li className="header__navMenuListItem">
                                <Link to="" onClick={handleMobileDropdown}>
                                    Docs
                                    <span className="icon">
                                        <img src={GplusIcon} alt="" />
                                    </span>
                                </Link>
                                <ul className={"header__navDropdown " + (dropdownHeight ? 'show' : "")}>
                                    <li className="header__navDropdownList">
                                        <span>Project Wiki</span>
                                    </li>
                                    <li className="header__navDropdownList">
                                        <span>Tokenomics</span>
                                    </li>
                                    <li className="header__navDropdownList">
                                        <span>One Pager</span>
                                    </li>
                                    <li className="header__navDropdownList">
                                        <span>Whitepaper</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__navMenuListItem" onClick={mobileMenuHandler}>
                                <Link activeClass="active"
                                    to="tech" spy={true}
                                    smooth={true}
                                    offset={-220}
                                    activeClass="active"
                                    duration={500}
                                    delay={0}>
                                    Technology
                                </Link>
                            </li>
                            <li className="header__navMenuListItem" onClick={mobileMenuHandler}>
                                <Link activeClass="active"
                                    to="tokeonomics" spy={true}
                                    smooth={true}
                                    offset={-220}
                                    activeClass="active"
                                    duration={500}
                                    delay={0}>
                                    Tokeonomics
                                </Link>
                            </li>
                            <li className="header__navMenuListItem" onClick={mobileMenuHandler}>
                                <Link activeClass="active"
                                    to="team" spy={true}
                                    smooth={true}
                                    offset={-220}
                                    activeClass="active"
                                    duration={500}
                                    delay={0}>
                                    Team
                                </Link>
                            </li>
                            <li className="header__navMenuListItem" onClick={mobileMenuHandler}>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li className="header__navMenuListItem" onClick={mobileMenuHandler}>
                                <NavLink to="/faq">Faq</NavLink>
                            </li>
                            <li className="header__navMenuListItem p__relative" >
                                <span className="l-icon">
                                    <img src={Ticon} alt="" />
                                </span>
                                <select name="" id="" className="language-selection" onChange={(e)=>changeLanguage(e.target)}>
                                    <option value="" disabled="disabled" selected="selected">Select Language</option>
                                    <option value="en" selected={defaultLanguage === "en"}>English</option>
                                    <option value="de" selected={defaultLanguage === "de"}>Deutsch</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
