import { BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import './style.css'
import logo from "../../assets/icons/Black Logo Png.png"
export default function Footer() {
    return (
        <>
            <section className="footerInfo">
                <div className="footerMap">
                    <h2>
                        Our Facility
                    </h2>
                    <div className="map">

                    </div>
                    <div className="footerLine"></div>
                </div>

                <div className="footerTour">
                <h2>
                        Take A Tour
                    </h2>
                    <div className="map">

                    </div>
                </div>
            </section>
            <section className="footerTop" id="contact">
                <div className="footerBox">
                    <div className="imgfooterBox">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="footerBox">
                    <p className="fHeader">Our Address</p>
                    <p>@Teslim Balogun Stadium, <br />
                        Temporal Office: 3, Rafiu Ipaye Street. <br />
                        Off Agunlejika, ijeshatedo, Surulere, <br />
                        Lagos state.
                    </p>
                </div>
                <div className="footerBox">
                    <p className="fHeader">Contact Us</p>
                    <p>07020099185 <br />
                        08133561282
                    </p>
                </div>
                <div className="footerBox">
                <p className="fHeader">Email Us</p>
                    <p>
                    info@sparvifootballacademy.com
                    </p>
                </div>

            </section>
            <footer>
                <p>
                    Follow us on our social media pages for updates
                </p>
                <div className="footerSocials">
                    <ImFacebook />
                    <FiInstagram />
                    <FaTiktok />
                    <BsYoutube />
                </div>
            </footer>
        </>
    )
} 