
import Menu from "../Menu";
import MainHeader from "../MainHeader";
import { BannerContainer } from "./styles";


const Header = () => (
    <BannerContainer className='background-image'>
        <div className='container'>
            <Menu />
            <MainHeader />
        </div>
    </BannerContainer>
);

export default Header;