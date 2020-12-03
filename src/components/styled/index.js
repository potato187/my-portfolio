import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const HeadingGroup = styled.div`
  text-align: left;
  margin-bottom: ${({ mb }) => mb || "2rem"};
`;

export const Heading = styled.h1.attrs(
  ({ size, color, padding, spacing, theme }) => ({
    size: theme.fontSize[size] || theme.fontSize.large,
    color: theme.colors[color] || theme.colors.fontColor,
    spacing: spacing || "1px",
    padding: padding || "0px",
  })
)`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  letter-spacing: ${(props) => props.spacing};
  padding: ${(props) => props.padding};
  font-weight: 600;
`;

export const Section = styled.section`
  padding: 2rem;
  margin: ${({ margin }) => margin};
  width: calc(100% - 26rem);
  transform: translateX(26rem);
  min-height: 100vh;
  @media screen and (max-width: 1030px) {
    width: 100%;
    transform: translateX(0);
  }
`;

export const Paraph = styled.p.attrs(
  ({ theme, size, color, weight, margin }) => ({
    size: size || theme.fontSize.medium,
    color: theme.colors[color] || theme.colors.fontColor,
    weight: weight || "400",
    margin: margin || "0 0 0 0",
  })
)`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  line-height: 1.4;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 3rem;
`;

export const GridItem = styled.div`
  background-color: ${({ theme, cl }) => theme.colors[cl]};
  min-height: 200px;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  overflow: hidden;
  & p {
    margin: 2rem 0;
    padding: 0 2rem;
  }
`;

export const GridContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 600;
  text-transform: capitalize;

  font-size: 1.8rem;
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  padding: 1rem 2rem;
  margin: ${({ margin }) => margin || "0 0.5rem"};
  outline: 0;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.dark};
  transition: all 0.3s ease;
  :hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const fadeLoading = keyframes` 
  100% {
    transform: scale(1.5);
    opacity: 0.25;
  }
}
`;

export const Bottom = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 998;

  visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
`;

export const Circle = styled.div`
  cursor: pointer;
  position: relative;
  width: 3rem;
  height: 3rem;
  background-color: pink;
  border-radius: 50%;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: inherit;
    animation: ${fadeLoading} 1s linear infinite forwards;
  }
`;
