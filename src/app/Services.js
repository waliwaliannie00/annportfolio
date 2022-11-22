import React from 'react'

export default function Services() {
    return (
        <><section id="services" className="services section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Services</h2>
                    <p>Our most popular services include</p>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="icon-box">
                            <i className="bi bi-briefcase"></i>
                            <h4><a href="#">Data Collection</a></h4>
                            <p>We help in constant collection of data such as PH, temperature and moisture on the farm</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-lg-0">
                        <div className="icon-box">
                            <i className="bi bi-card-checklist"></i>
                            <h4><a href="#">Automation</a></h4>
                            <p>We help in automating temperature, irrigation, light intensity and humidity on the farm</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="icon-box">
                            <i className="bi bi-bar-chart"></i>
                            <h4><a href="#">Data Analysis</a></h4>
                            <p>We help in analyzing agriculture data and hence helping in proper decision making by the farmer</p>
                        </div>
                    </div>

                </div>

            </div>
        </section><footer id="footer">

                <div className="footer-top">
                    <div className="container">

                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>smartfarms</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">

                            Designed by <a href="https://www.whatsapp.com/business/+265992284473">Annie waliwali</a>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="whatsapp"><i className="bx bxl-whatsapp"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </footer><a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a></>

    )
}