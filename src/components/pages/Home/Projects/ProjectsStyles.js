import { Section } from "components/styled";
import styled from "styled-components";
export const ProjectsSection = styled(Section)`
  min-height: 100vh;
  height: 100vh;
`;
export const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Project = styled.div`
  font-size: 2rem;
  padding: 1rem 2rem;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
`;
