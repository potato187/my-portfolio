import { Container, Heading, HeadingGroup, Section } from "components/styled";
import React from "react";
import { ResumeInfo, ResumeWrapper, TimeLine } from "./ResumeStyles";

function Resume({ profile }) {
  return (
    <>
      <Section id="resume">
        <Container>
          <HeadingGroup>
            <Heading as="h2" color="Gray" size="xSmall">
              Resume
            </Heading>
            <Heading spacing="3px">DUONG HUU TAI</Heading>
          </HeadingGroup>
          <ResumeWrapper>
            {profile.map((info, index) => (
              <ResumeInfo key={index.toString()}>
                <TimeLine>{info.timeLine}</TimeLine>
                {info.desc}
              </ResumeInfo>
            ))}
          </ResumeWrapper>
        </Container>
      </Section>
    </>
  );
}

export default Resume;
