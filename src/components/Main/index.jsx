import './styles.css';
import SectionTitle from '../SectionTitle';
import Card1 from '../Card1';
import Subscribe from '../Subscribe';

import { BsSpeedometer2, BsTelephone } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FaBalanceScale } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { BiPaperPlane } from "react-icons/bi";
import { ImHammer2 } from "react-icons/im";
import { IoNewspaperOutline } from "react-icons/io5";


import CardImage from '../CardImage';
import womancellphone from '../assets/womancellphone.png';
import twowoman from '../assets/twowoman.png'
import office from '../assets/office.png'
import chair from '../assets/chair.png'
import Card2 from '../Card2';


const Main = () => (
    <section className='bg-main bg-section-title'>
        <div className='container'>
            <div id="praticeareas">
                <SectionTitle
                    title="Our Practice Areas"
                    description="Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics"
                />
                <div className='row  row-cols-1 row-cols-md-3'>
                    <div className='col'>
                        <Card1
                            description="Family Law"
                            icon={ <FaBalanceScale size="3em"/> }
                        />
                    </div>
                    <div className='col'>
                        <Card1
                            description="Business Law"
                            icon={ <ImHammer2 size="3em"/> }
                        />
                    </div>
                    <div className='col'>
                        <Card1
                            description="Trust & Estates"
                            icon={ <IoNewspaperOutline size="3em"/> }
                        />
                    </div>
                </div>
            </div>
            <div id="praticeadivices">
                <SectionTitle
                    title="Practice Advice"
                    description="Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics"
                />
                <div className='row  g-2'>
                    <div className=' col m-3 d-flex'>
                        <CardImage
                            alt="woman in cellphone"
                            title="Frauds or Mislead"
                            description="Newton thought that
                            light was made up of
                            particles, but then it
                            was discovered "
                            image={womancellphone}
                        />
                    </div>
                    <div className=' col m-3  d-flex'>
                        <CardImage
                            alt="two womans in reunion"
                            title="Bailes & Warrants"
                            description="“Quantum mechanics”
                            is the description of the
                            behaviour of matter"
                            image={twowoman}
                        />
                    </div>
                    <div className='col m-3  d-flex'>
                        <CardImage
                            alt="table office"
                            title="Federal Drug Crimes"
                            description="They describe a
                            universe consisting of
                            bodies moving "
                            image={office}
                        />
                    </div>
                    <div className='col m-3  d-flex'>
                        <CardImage
                            alt="chair and table"
                            title="Traffic Related Crimes"
                            description="They finally obtained
                            a consistent description
                            of the behaviour  "
                            image={chair}
                        />
                    </div>
                </div>
            </div>
            <div id="WhoWeAre">
                <SectionTitle
                    title="Who We Are"
                    description="Problems trying to resolve the conflict between the two major realms
                    of Classical physics: Newtonian mechanics "
                />
                <div className='container pb-5'>
                    <div className='row  flex-wrap justify-content-between'>
                        <div className='col-lg-6'>
                            <div className="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/CDf7y5fXe4M"
                                        title="YouTube video"
                                        allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='d-flex flex-column text-light px-5'>
                                <SectionTitle
                                    align="start"
                                    title="Most trusted in our field"
                                    description="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
                                />
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='d-flex justify-content-start px-5'>
                                    <HiUserGroup className='icon-most p-1' />
                                    <h5 className='text-white'>the quick fox jumps over the lazy <br />dog</h5>
                                </div>
                                <p className='text-white d-flex justify-content-start px-5'>Things on a very small scale ...</p>
                                <div className='d-flex justify-content-start px-5 '>
                                    <BsSpeedometer2 className='icon-most p-1' />
                                    <h5 className='text-white'>the quick fox jumps over the lazy<br />dog</h5>
                                </div>
                                <p className='text-white d-flex justify-content-start px-5'>Things on a very small scale ...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe />
            <div>
                <SectionTitle
                    align="center"
                    title="Get In Touch"
                    description="Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics "
                />
                <div className='row g-0 pb-5 row-cols-sm-1 row-cols-lg-3'>
                    <div className='col mt-2'>
                        <Card2
                            icon={<BsTelephone size="4em"/>}
                            email1="georgia.young@example.com"
                            email2="georgia.young@ple.com"
                            h5="Get Support"
                            placeholder="Submit Request"
                        />
                    </div>
                    <div className='col'>
                        <Card2
                            icon={<ImLocation2 size="5em"/>}
                            email1="georgia.young@example.com"
                            email2="georgia.young@ple.com"
                            h5="Get Support"
                            placeholder="Submit Request"
                        />
                    </div>
                    <div className='col mt-2'>
                        <Card2
                            icon={<BiPaperPlane size="4em"/>}
                            email1="georgia.young@example.com"
                            email2="georgia.young@ple.com"
                            h5="Get Support"
                            placeholder="Submit Request"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Main;