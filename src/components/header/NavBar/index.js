import React from "react";
import {
  AiFillFacebook as Facebook,
  AiFillGithub as Github,
} from "react-icons/ai";
import {
  CopyRight,
  Logo,
  Menu,
  Nav,
  NavLink,
  SocialLink,
  SocialMedia,
  SocialMediaIntro,
  SocialMedias,
  SocialMediaWrapper,
  Contact,
  Info,
} from "./NavBarStyles";
import { AiOutlineMail as Mail, AiFillPhone as Phone } from "react-icons/ai";
import { TiLocation as Location } from "react-icons/ti";
function NavBar({ isOpen, toggle }) {
  const handleToggle = () => (toggle ? toggle() : 0);

  return (
    <>
      <Nav active={isOpen}>
        <Logo>
          <h1>Tai Duong</h1>
          <h3>Font End Developer Fresher</h3>
        </Logo>

        <Contact>
          <Info>
            <Phone />
            0799-645-822
          </Info>
          <Info>
            <Location />
            CanTho, VietNam
          </Info>
          <Info>
            <Mail />
            dhtai97@gmail.com
          </Info>
        </Contact>

        <Menu>
          <NavLink
            to="resume"
            spy={true}
            smooth={true}
            offset={-80}
            duration={750}
            onClick={handleToggle}
          >
            Resume
          </NavLink>
          <NavLink
            to="projects"
            spy={true}
            smooth={true}
            offset={80}
            duration={750}
            onClick={handleToggle}
          >
            My Projects
          </NavLink>
          <NavLink to="#" onClick={handleToggle} disabled={1}>
            Experience
          </NavLink>
          <NavLink to="#" onClick={handleToggle} disabled={1}>
            Contact
          </NavLink>
        </Menu>

        <SocialMedia>
          <SocialMediaWrapper>
            <SocialMediaIntro>Follow me on</SocialMediaIntro>
            <SocialMedias>
              <SocialLink
                href="https://www.facebook.com/dhtai97/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </SocialLink>
              <SocialLink
                href="https://github.com/potato187"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </SocialLink>
            </SocialMedias>
          </SocialMediaWrapper>
        </SocialMedia>
        <CopyRight>Copyright &copy; 2020. All rights reversed</CopyRight>
      </Nav>
    </>
  );
}

NavBar.defaultProps = {
  isOpen: false,
  toggle: null,
};
export default NavBar;
