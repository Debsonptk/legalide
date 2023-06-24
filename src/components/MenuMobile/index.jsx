import { useState } from 'react';
import { MenuMobile, MenuOverlay, NavSection } from './style';
import { GiHamburgerMenu } from 'react-icons/gi'
import {AiOutlineClose } from 'react-icons/ai'

const IsMenuMobile = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false)
    return (
        <>
            <MenuOverlay
                isMenuOpened={isMenuOpened}
                onClick={() => setIsMenuOpened(false)}
                className="d-flex d-md-none position-fixed h-100 w-100" />
            <div
                className="d-flex align-items-end justify-content-between d-block d-lg-none">
                <GiHamburgerMenu
                    type="button"
                    onClick={() => setIsMenuOpened(true)} size={25} color="white" />
            </div>
            <MenuMobile
                isMenuOpened={isMenuOpened}
                className="d-flex flex-column d-md-none position-fixed">
                <NavSection className="container w-100">
                    <div className=" d-flex flex-column justify-content-center mb-3">
                        <AiOutlineClose
                            type="button"
                            onClick={() => setIsMenuOpened(false)} className="align-self-end" />
                        <div className="d-flex flex-column w-100">
                            <h4 id="logo" className='text-white'>Legalide</h4>
                            <a
                                href="#praticeareas"
                                className="me-4"
                                isMenuOpened={isMenuOpened}
                                onClick={() => setIsMenuOpened(false)}>Practice Areas</a>
                            <a
                                href="#praticeadivices"
                                className="me-4"
                                isMenuOpened={isMenuOpened}
                                onClick={() => setIsMenuOpened(false)}>Practice Advice</a>
                            <a
                                href="#WhoWeAre"
                                className="me-4"
                                isMenuOpened={isMenuOpened}
                                onClick={() => setIsMenuOpened(false)}>Who we are</a>
                            <a
                                href="#ContactUs"
                                className="me-4"
                                isMenuOpened={isMenuOpened}
                                onClick={() => setIsMenuOpened(false)}>Contact</a>
                        </div>
                    </div>
                </NavSection>
            </MenuMobile>
        </>
    );
}

export default IsMenuMobile;

