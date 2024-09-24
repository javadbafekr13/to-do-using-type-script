import React from "react";
import "./csss/footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
        <div>
          <p>Privacy</p>
          <p>Cookies </p>
          <p>Feedback </p>
          <p>Help</p>
        </div>
       
      <div className="footer-content">
       
        <div>
          <p>Follow us on social media!</p>
          <ul className="social-links">
            <li>
              <a href="https://twitter.com/yourcompany">Twitter</a>
            </li>
            <li>
              <a href="https://facebook.com/yourcompany">Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com/yourcompany">Instagram</a>
            </li>
          </ul>
          <p>© 2024 to-do-list. All rights reserved.</p>
        </div>
       
      </div> <div>
          <p>practice </p>
          <p>Legal </p>
          <p>Advertise</p>
          <p>About</p>
        </div>
    </footer>
  );
};

export default Footer;
