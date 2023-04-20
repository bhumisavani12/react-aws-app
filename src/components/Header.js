import React, { Component } from 'react';
import '../css/Header.css';
import '../i18n';
import { withTranslation } from 'react-i18next';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: "English"
        };

    }

    langChange(e, value, lng) {
        const {i18n} = this.props;
        e.preventDefault();
        i18n.changeLanguage(lng);
        this.setState({ lang: value })
    }

    render() {
        const { lang } = this.state
        const {t} = this.props;
        return (
            <div className='main_header'>
                {/* <h1>{t('title')}</h1> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav mr-auto">

                        </div>
                        <form className="form-inline my-2 my-lg-0">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {lang}
                                </button>
                                <div className="dropdown-menu" id="dropdownMenuItem" aria-labelledby="dropdownMenuButton">
                                    <a href="" className={'dropdown-item ' + (lang === 'English' ? 'activeLang' : '')} onClick={(e) => this.langChange(e, 'English', 'en')}>English</a>
                                    <a className={'dropdown-item ' + (lang === 'French' ? 'activeLang' : '')} href="#" onClick={(e) => this.langChange(e, 'French', 'de')} >French</a>
                                </div>
                            </div>
                            <a target="_blank" href="https://support.paid.com" id="supportButton" className="btn btn-primary btn-sm rounded-pill pull-right px-3 p-1 nav-link">Support</a>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withTranslation()(Header);