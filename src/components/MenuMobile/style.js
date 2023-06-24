import styled from "styled-components";

export const NavSection = styled.div`

    display: block;
    color: #666;
    padding: 10px 10px;
`;

export const MenuMobile = styled.div`

    height: 100rem;
    top:0;
    left: ${props => props.isMenuOpened ? 0 : -75}%;
    padding: 0px;
    width: 75%;
    transition: all 0.2s ease-out;
    z-index:10;
    background-color:#252B42;

    > svg {
    position: absolute;
    top: 1rem;
    }
`
export const MenuOverlay = styled.div`
    opacity: ${props => props.isMenuOpened ? 1 : 0};
    visibility: ${props => props.isMenuOpened ? "visible" : "hidden"};
    background-color: rgba(0,0,0,0.5);
    transition: all 0.2s ease-out;
    z-index: 5;
    top:0;
    height:100vh;
`