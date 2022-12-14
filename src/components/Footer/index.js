import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="icon-container">
      <img
        src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625978524/footer-icon_cs8bzb.png"
        alt="icon"
        className="icon-img"
      />
      <h1 className="icon-heading">Tasty Kitchen</h1>
    </div>
    <p className="footer-description">
      The only thing we`re serious about is food. Contact us on
    </p>
    <div className="social-icon-container">
      <FaPinterestSquare
        className="social-icon"
        testid="pintrest-social-icon"
      />
      <FaInstagram className="social-icon" testid="instagram-social-icon" />
      <FaTwitter className="social-icon" testid="twitter-social-icon" />
      <FaFacebookSquare className="social-icon" testid="facebook-social-icon" />
    </div>
  </div>
)

export default Footer
