import { Paraph } from "components/styled";
import styled from "styled-components";

export const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  position: relative;
  margin-bottom: 5rem;
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -4rem;
    height: 100%;
    width: 5px;
    transform: translate(-50%, -50%);
    background-color: #f4f4f4;
  }

  ::after {
    content: "";
    position: absolute;
    left: -4rem;
    bottom: -3.5rem;
    width: 2.5rem;
    height: 2.5rem;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 3px solid #f4f4f4;
  }
`;

export const ResumeInfo = styled(Paraph)`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.light};
  min-height: 50px;
  margin-bottom: 2rem;
  text-align: left;
  border-radius: 3px;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 1rem;
    left: -4rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: #f4f4f4;
    transform: translate(-50%, -50%);
  }

  ::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    border: 1rem solid transparent;
    transform: translateX(-100%);
    border-right-color: #f4f4f4;
  }
`;

export const TimeLine = styled.span`
  font-size: 1rem;
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const Icons = styled.div``;
export const IconWrapper = styled.span`
  & svg {
    fill: ${({ theme, color }) => theme.colors[color]};
  }
`;
