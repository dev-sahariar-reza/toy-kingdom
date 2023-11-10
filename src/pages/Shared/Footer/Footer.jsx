import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.jpg";
import {
  FaFacebook,
  FaSquareXTwitter,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <section>
      <footer className="footer p-10 text-base-content">
        <aside>
          <img
            src={logo}
            alt="Logo of Kid Kingdom"
            className="w-10 lg:w-28 h-10 lg:h-28"
          />
          <p className="text-base lg:text-xl font-bold text-primary">
            TOY KINGDOM.
            <br />
            Your Toy, Your Passion
          </p>
        </aside>
        <nav>
          <header className="footer-title text-primary">Services</header>
          <a className="link link-hover text-primary font-bold">Branding</a>
          <a className="link link-hover text-primary font-bold">Design</a>
          <a className="link link-hover text-primary font-bold">Marketing</a>
          <a className="link link-hover text-primary font-bold">
            Advertisement
          </a>
        </nav>
        <nav>
          <header className="footer-title text-primary">Company</header>
          <a className="link link-hover text-primary font-bold">About us</a>
          <a className="link link-hover text-primary font-bold">Contact</a>
          <a className="link link-hover text-primary font-bold">Jobs</a>
          <a className="link link-hover text-primary font-bold">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title text-primary">Legal</header>
          <a className="link link-hover text-primary font-bold">Terms of use</a>
          <a className="link link-hover text-primary font-bold">
            Privacy policy
          </a>
          <a className="link link-hover text-primary font-bold">
            Cookie policy
          </a>
        </nav>
      </footer>

      <div className="divider"></div>

      <div className="text-center mb-5">
        <h3 className="mb-8 text-primary text-xl lg:text-2xl font-bold">
          Follow Us on Social Media
        </h3>
        <div className="flex justify-center items-center">
          <Link to="https://www.facebook.com/" className="mr-5">
            <button className="btn text-xl text-white hover:text-black bg-[#7743DB]">
              <FaFacebook />
            </button>
          </Link>
          <Link to="https://www.twitter.com/" className="mr-5">
            <button className="btn text-xl text-white hover:text-black bg-[#7743DB]">
              <FaXTwitter />
            </button>
          </Link>
          <Link to="https://www.instagram.com/" className="mr-5">
            <button className="btn text-xl text-white hover:text-black bg-[#7743DB]">
              <FaInstagram />
            </button>
          </Link>
          <Link to="https://www.youtube.com/" className="mr-5">
            <button className="btn text-xl text-white hover:text-black bg-[#7743DB]">
              <FaYoutube />
            </button>
          </Link>
        </div>
      </div>

      <div className="divider"></div>
      <div className="text-center">
        <p className="text-primary font-bold mb-4">
          Copyright ©2023 Toy Kingdom
        </p>
        <p className="text-primary font-bold">
          Developed by S. M. Sahariar Reza
        </p>
      </div>
    </section>
  );
};

export default Footer;
