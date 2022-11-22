import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className="contact section-bg">
        <div className="container">
  
          <div className="section-title">
            <h2>Contact</h2>
            <p>Dont hesitate to contact us</p>
          </div>
  
          <div className="row mt-5 justify-content-center">
  
            <div className="col-lg-10">
  
              <div className="info-wrap">
                <div className="row">
                  <div className="col-lg-4 info">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>Limbe<br>Blantyre</p>
                  </div>
  
                  <div className="col-lg-4 info mt-4 mt-lg-0">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>smartfarms7@gmail.com<br>info@smartfarms.com</p>
                  </div>
  
                  <div className="col-lg-4 info mt-4 mt-lg-0">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+265 999 222 777<br>+265 888 999 000</p>
                  </div>
                </div>
              </div>
  
            </div>
  
          </div>
  
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-10">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form" />
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required /-->
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
  
          </div>
  
        </div>
      </section>
  
    </main>
  
    
    <footer id="footer">
  
      <div className="footer-top">
        <div className="container">
          <div className="row">
  
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Smarfarms</h3>
              <p>
                Limbe <br>
                House 4<br>
                Blantyre<br><br>
                <strong>Phone:</strong> +265 999 888 000<br>
                <strong>Email:</strong> info@smartfarms.com<br>
              </p>
            </div>
  
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Data collection</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Automation</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Data analysis</a></li>
              </ul>
            </div>
  
  
  
          </div>
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
    </footer>
  
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  
    )
}