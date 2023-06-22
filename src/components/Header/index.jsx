
import Menu from "../Menu";
import MainHeader from "../MainHeader";
import { BannerContainer } from "./styles";

const Header = () => (
    <BannerContainer className='background-image'>
        < Menu />
        <MainHeader />
    </BannerContainer>
);

export default Header;