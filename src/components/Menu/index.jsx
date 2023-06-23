import {FaBars} from "react-icons/fa";
import MenuBar from "../MenuBar";

const Menu = () => (
    <section className = 'bg-header' >
        <div className = 'd-flex justify-content-between'>
            <div className = 'text-light fs-3 pt-5 d-flex'>
                <div className="navbar-brand" href="index.js">Legalide</div>
                <MenuBar />
            </div>
            <nav className="navbar navbar-expand-lg navbar-light pt-5">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-light"
                                href="#praticeareas">Pratice areas</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-light"
                                href="#praticeadivices">Pratice Advice</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light"
                                href="#WhoWeAre">Who we are</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light"
                                href="#ContactUs">Contact</a>
                        </li>
                    </ul>
                    <ul className="d-block d-md-none d-lg-none">
                        <li className="nav-item">
                            <a className="nav-link text-light"
                                href="index.js"
                                tabIndex="-1"><FaBars /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </section>
);

export default Menu;

