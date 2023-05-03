import React from "react";
import { Collapse } from "antd";
import "./faq.scss";
import innerTopbg from "../../../assets/images/innerbg.png";
import innerBottomLine from "../../../assets/images/innerBottom.png";
import { Trans, useTranslation } from "react-i18next";

const { Panel } = Collapse;

const Faq = () => {
    const { t } = useTranslation();
    return (
        <div className='faq'>
            <div className='faq__bottomLine'>
                <img src={innerBottomLine} alt='' />
            </div>
            <div className='faq__topbanner innerTopbanner'>
                <div className='innerTopbanner__bg'>
                    <img
                        className='w__100'
                        src={innerTopbg}
                        alt='Inner background'
                    />
                </div>
                <div className='contact__heading innerTopbanner__heading'>
                    <h1>
                        <Trans i18nKey='faq-title'></Trans>
                    </h1>
                </div>
            </div>
            <div className='container'>
                <div className='faq__accordion'>
                    <Collapse accordion>
                        <Panel header={t('faq-1-question')} key='1'>
                            <p>
                                {t('faq-1-answer')}
                            </p>
                        </Panel>
                        <Panel
                            header={t('faq-2-question')}
                            key='2'
                        >
                            <p>
                                {t('faq-2-answer')}
                            </p>
                        </Panel>
                        <Panel header={t('faq-3-question')} key='3'>
                            <p>
                                {t('faq-3-answer')}
                            </p>
                        </Panel>
                        <Panel header={t('faq-4-question')} key='4'>
                            <p>
                                {t('faq-4-answer')}
                            </p>
                        </Panel>
                        <Panel
                            header={t('faq-5-question')}
                            key='5'
                        >
                            <p>
                                {t('faq-5-answer')}
                            </p>
                        </Panel>
                        <Panel header={t('faq-6-question')} key='6'>
                            <p>
                                {t('faq-6-answer')}
                            </p>
                        </Panel>
                        <Panel header={t('faq-7-question')} key='7'>
                            <p>
                                {t('faq-7-answer')}
                            </p>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default Faq;
