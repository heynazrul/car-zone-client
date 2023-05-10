import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.svg'
const Footer = () => {
    return (
      <footer className="footer bg-base-200 p-10 text-base-content">
        <div>
          <Link
            to={'/'}
            className=" block">
            <img
              src={Logo}
              alt=""
              className="h-12 lg:h-full"
            />
            <p className="text-center text-xl font-bold">Car Zone</p>
          </Link>
          <p className='text-secondary'>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link-hover link">Branding</a>
          <a className="link-hover link">Design</a>
          <a className="link-hover link">Marketing</a>
          <a className="link-hover link">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link-hover link">About us</a>
          <a className="link-hover link">Contact</a>
          <a className="link-hover link">Jobs</a>
          <a className="link-hover link">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link-hover link">Terms of use</a>
          <a className="link-hover link">Privacy policy</a>
          <a className="link-hover link">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;