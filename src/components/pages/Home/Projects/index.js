import {
  Button,
  Buttons,
  Container,
  Heading,
  HeadingGroup,
  Paraph,
} from "components/styled";
import React from "react";
import { Project, ProjectsGrid, ProjectsSection } from "./ProjectsStyles";

function Projects({ projects, sourceCode }) {
  return (
    <>
      <ProjectsSection id="projects">
        <Container>
          <HeadingGroup>
            <Heading as="h2" color="Gray" size="xSmall">
              My Projects
            </Heading>
            <Heading spacing="3px"></Heading>
          </HeadingGroup>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <Project key={index.toString()}>
                <HeadingGroup mb="0">
                  <Heading as="h2" color="Gray" size="xSmall">
                    {project.title}
                  </Heading>
                  <Heading spacing="3px">{project.name}</Heading>
                </HeadingGroup>
                <Paraph margin="1rem 0rem">{project.desc}</Paraph>
                <Buttons>
                  <Button as="a" href={project.url_view} target="_blank">
                    View
                  </Button>
                  <Button as="a" href={project.url_code} target="_blank">
                    Source code
                  </Button>
                </Buttons>
              </Project>
            ))}
          </ProjectsGrid>

          <Button margin="1rem 0rem" as="a" href={sourceCode} target="_blank">
            View More
          </Button>
        </Container>
      </ProjectsSection>
    </>
  );
}

export default Projects;
