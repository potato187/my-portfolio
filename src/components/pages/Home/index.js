import { Profile, ProjectsData, SourceCode } from "portfolio";
import React from "react";
import Projects from "./Projects";
import Resume from "./Resume";

function Home() {
  return (
    <main>
      <Resume profile={Profile} />
      <Projects projects={ProjectsData} sourceCode={SourceCode} />
    </main>
  );
}

export default Home;
