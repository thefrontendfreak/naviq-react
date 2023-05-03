import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact.scss";
import innerTopbg from "../../../assets/images/innerbg.png";
import innerBottomLine from "../../../assets/images/innerBottom.png";
import { Trans } from "react-i18next";

const Contact = () => {
    const [submitStatus, setsubmitStatus] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            subject: "",
            inquiries: "",
            message: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    useEffect(() => {
        if (
            formik.initialValues.email == null ||
            formik.subject == null ||
            formik.inquiries == null ||
            formik.message == null
        ) {
            setsubmitStatus(true);
        }
    }, []);

    return (
        <div className='contact'>
            <div className='contact__bottomLine'>
                <img src={innerBottomLine} alt='' />
            </div>
            <div className='contact__topBanner innerTopbanner'>
                <div className='innerTopbanner__bg'>
                    <img
                        className='w__100'
                        src={innerTopbg}
                        alt='Inner background'
                    />
                </div>
                <div className='contact__heading innerTopbanner__heading'>
                    <h1>
                        <Trans i18nKey='contact-title'></Trans>
                    </h1>
                    <p>
                        <Trans i18nKey='contact-content'></Trans>
                    </p>
                </div>
            </div>
            <div className='container'>
                <div className='contact__formWrapper d__flex jc__between'>
                    <div className='contact__form'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='contact__formFeild'>
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    placeholder='Your email'
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </div>
                            <div className='contact__formFeild'>
                                <input
                                    id='subject'
                                    name='subject'
                                    type='text'
                                    placeholder='Subject'
                                    onChange={formik.handleChange}
                                    value={formik.values.subject}
                                />
                            </div>
                            <div className='contact__formFeild'>
                                <select
                                    name=''
                                    id='inquiries'
                                    id='email'
                                    name='subject'
                                    onChange={formik.handleChange}
                                >
                                    <option value=''>General Inquiries</option>
                                    <option value=''>
                                        General Inquiries 1
                                    </option>
                                    <option value=''>
                                        General Inquiries 2
                                    </option>
                                    <option value=''>
                                        General Inquiries 3
                                    </option>
                                </select>
                                <span className='icon'>
                                    <svg
                                        width='28'
                                        height='13'
                                        viewBox='0 0 28 13'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M2 2L14 10.6667L26 2'
                                            stroke='#8080B8'
                                            stroke-width='4'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className='contact__formFeild'>
                                <textarea
                                    name='message'
                                    id='message'
                                    cols='30'
                                    rows='10'
                                    placeholder='Subject'
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                ></textarea>
                            </div>
                            <div className='contact__formFeild'>
                                <ReCAPTCHA
                                    sitekey='6LeWcZoaAAAAAM2E-jN49vAL6j79QJlh6ajvjtJ5'
                                    onChange={formik.handleChange}
                                />
                                ,
                            </div>

                            <button
                                className={
                                    "btn__primary mt__20 " +
                                    (submitStatus ? "notActive" : "")
                                }
                                type='submit'
                            >
                                <span className='btn__text'>Submit</span>
                            </button>
                        </form>
                    </div>
                    <div className='contact__info'>
                        <div className='contact__singleInfo'>
                            <h2>Email Us</h2>
                            <p>hello@naviq.dev</p>
                        </div>
                        <div className='contact__singleInfo'>
                            <h2>Contact support</h2>
                            <p>support@naviq.dev</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
