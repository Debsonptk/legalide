import './styles.css';
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import UpFooter from '../UpFooter';

const Footer = () => (
    <>
        <UpFooter />
        <section className='bg-footer  '>
            <div className='d-flex justify-content-between container'>
                <div className='row p-3'>
                    <div className='col text-light text-footer'>Made With Love By Figmaland All Right Reserved </div>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='text-light p-1'>
                        <FaFacebookSquare className='icons-footer' />
                    </div>
                    <div className='text-light p-1'>
                        <FaInstagram className='icons-footer' />
                    </div>
                    <div className='text-light p-1'>
                        <FaTwitter className='icons-footer' />
                    </div>
                    <div className='text-light p-1'>
                        <FaYoutube className='icons-footer' />
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Footer