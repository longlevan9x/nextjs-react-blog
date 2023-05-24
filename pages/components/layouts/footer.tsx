const Footer = () => {
    return (
        <footer className="s-footer">
            <div className="s-footer__main">
                <div className="row">
                    <div className="column large-4 medium-6 tab-12 s-footer__info">
                        <h5>About Our Site</h5>
                        <p>
                            Lorem ipsum Ut velit dolor Ut labore id fugiat in ut fugiat nostrud qui in dolore commodo eu
                            magna Duis cillum dolor officia esse mollit proident Excepteur exercitation nulla. Lorem
                            ipsum
                            In reprehenderit commodo aliqua irure labore.
                        </p>
                    </div>
                    <div className="column large-2 medium-3 tab-6 s-footer__site-links">
                        <h5>Site Links</h5>
                        <ul>
                            <li><a href="#0">About Us</a></li>
                            <li><a href="#0">Blog</a></li>
                            <li><a href="#0">FAQ</a></li>
                            <li><a href="#0">Terms</a></li>
                            <li><a href="#0">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="column large-2 medium-3 tab-6 s-footer__social-links">
                        <h5>Social</h5>
                        <ul>
                            <li><a href="#0">Twitter</a></li>
                            <li><a href="#0">Facebook</a></li>
                            <li><a href="#0">Dribbble</a></li>
                            <li><a href="#0">Pinterest</a></li>
                            <li><a href="#0">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="column large-4 medium-12 s-footer__subscribe">
                        <h5>Subscribe</h5>
                        <p>Keep yourself updated. Subscribe to our newsletter.</p>
                        <div className="subscribe-form">
                            <form id="mc-form" className="group">
                                <input type="email" defaultValue="" name="dEmail" className="email" id="mc-email"
                                       placeholder="Type &amp; press enter"/>
                                <input type="submit" name="subscribe"/>
                                <label htmlFor="mc-email" className="subscribe-message"></label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="s-footer__bottom">
                <div className="row">
                    <div className="column">
                        <div className="ss-copyright">
                            <span>© Copyright Abstract 2020</span>
                            <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
                        </div>
                    </div>
                </div>

                <div className="ss-go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;