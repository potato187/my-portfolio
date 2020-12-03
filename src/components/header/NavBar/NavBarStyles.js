import styled, { css } from "styled-components";
import { Link as linkScroll } from "react-scroll";
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 26rem;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1030px) {
    transform: translateX(-100%);
    transition: transform 0.5s ease-out;
    ${({ active }) =>
      active &&
      css`
        transform: translateX(0);
      `}
  }
`;

export const Logo = styled.div`
  text-align: center;
  padding: 2rem;
  margin: 5rem 0;
  line-height: 1.5;
`;

export const Menu = styled.div`
  width: 100%;
  margin: 5rem 0;
`;

export const NavLink = styled(linkScroll)`
  display: block;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  text-transform: uppercase;
  position: relative;

  :not(:last-of-type) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: -1;
    transition: width 0.5s cubic-bezier(0.83, 0, 0.17, 1);
  }

  :hover::before {
    width: 100%;
    transition: width 0.5s cubic-bezier(0.83, 0, 0.17, 1);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
      pointer-events: none;
    `}
`;

export const SocialMedia = styled.div`
  margin: auto 0 5rem 0;
  text-align: center;
  padding: 2rem;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialMediaIntro = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  font-weight: 300;
  font-style: italic;
`;

export const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.super};
  padding: 0.5rem;
  & svg {
    fill: ${({ theme }) => theme.colors.gray};
    transition: all 0.3s linear;
    :hover {
      transform: scale(1.1);
      fill: ${({ theme }) => theme.colors.lightGray};
    }
  }
`;

export const CopyRight = styled.div`
  margin: 0 0 3rem 0;
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  text-align: center;
  color: rgb(255, 255, 255, 0.5);
  padding: 1rem;
`;

export const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  padding: 1rem;
  svg {
    margin-right: 0.5rem;
  }
`;
