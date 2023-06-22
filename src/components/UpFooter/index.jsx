import './styles.css';
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { HiOutlinePaperAirplane } from "react-icons/hi";

const UpFooter = () => (
    <section className='bg-upfooter'>
        <div className="container">
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-5  justify-content-around'>
                <div className='col text-light p-5'>
                    <h5 className='text-upfooter pb-3'>Company Info</h5>
                    <h6 className='text-upfooter pb-1'>About Us</h6>
                    <h6 className='text-upfooter pb-1'>Carrier</h6>
                    <h6 className='text-upfooter pb-1'>We are hiring</h6>
                    <h6 className='text-upfooter'>Blog</h6>
                </div>
                <div className='col text-light p-5'>
                    <h5 className='text.upfooter pb-3'>Legal</h5>
                    <h6 className='text.upfooter pb-1'>About Us</h6>
                    <h6 className='text.upfooter pb-1'>Carrier</h6>
                    <h6 className='text.upfooter pb-1'>We are hiring</h6>
                    <h6 className='text.upfooter'>Blog</h6>
                </div>
                <div className='col text-light p-5'>
                    <h5 className='text.upfooter pb-3'>Features</h5>
                    <h6 className='text.upfooter pb-1'>Business Marketing</h6>
                    <h6 className='text.upfooter pb-1'>User Analytic</h6>
                    <h6 className='text.upfooter pb-1'>Live Chat</h6>
                    <h6 className='text.upfooter'>Unlimited Support</h6>
                </div>
                <div className='col text-light p-5'>
                    <h5 className='text.upfooter pb-3'>Resources</h5>
                    <h6 className='text.upfooter pb-1'>IOS &amp; Android</h6>
                    <h6 className='text.upfooter pb-1'>Watch a Demo</h6>
                    <h6 className='text.upfooter pb-1'>Customers</h6>
                    <h6 className='text.upfooter'>API</h6>
                </div>
                <div className='col text-light p-5'>
                    <h5 className='text.upfooter pb-3'>Get in Toutch</h5>
                    <div className='d-flex pb-1'>
                        <BsTelephone className='icon-upfooter'/> 480 555-0103
                    </div>
                    <div className='d-flex pb-1'>
                        <FiMapPin className='icon-upfooter' /> 4517 Washington Ave.
                    </div>
                    <div className='d-flex '>
                        <HiOutlinePaperAirplane className='icon-upfooter'/> holt@example.com
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default UpFooter