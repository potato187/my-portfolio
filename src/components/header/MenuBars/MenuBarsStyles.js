import styled, { css } from "styled-components";

export const Menu = styled.div`
  cursor: pointer;

  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 999;
  width: 2.5rem;
  height: 2.5rem;

  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ active }) =>
    active &&
    css`
      transition: transform 0.3s;
      transform: rotate(45deg);
      & span {
        ::before,
        ::after {
          transform: rotate(90deg);
        }
      }
    `};
  @media not screen and (max-width: 1030px) {
    display: none;
  }
`;

export const Bars = styled.span`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 5px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.dark};

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background-color: inherit;
    transition: transform 0.3s;
  }

  ::before {
    transform: translateY(-1rem);
  }
  ::after {
    transform: translateY(1rem);
  }
`;
