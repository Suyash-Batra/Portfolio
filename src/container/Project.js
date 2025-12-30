import ProjectCard from "./ProjectCard";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  return (
    <div className="sectionContainer bg2">
      <section id="projects">
        <center>
          <div className="title">
            <b>My Projects</b>
            <div className="underline"></div>
          </div>
        </center>

        <div className="parallelContainers">
          <ProjectCard
            category="web"
            image={`${process.env.PUBLIC_URL}/images/ecomm.jpg`}
            title="E-commerce Platform"
            description="A E-commerce Platform with Login & Add to Cart functionalities."
            tags={["Website", "HTML", "CSS", "JavaScript", "PHP", "MySQL"]}
            viewLink="https://github.com/Suyash-Batra/SymbiZone/"
            githubLink={{ href: "https://github.com", icon: faGithub }}
          />

          <ProjectCard
            category="web"
            image={`${process.env.PUBLIC_URL}/images/exp.jpg`}
            title="BudgetEase"
            description="Expense Tracker with Visual Graphs and Excel"
            tags={["Website", "HTML", "CSS", "Composer", "PHP", "Python"]}
            viewLink="https://github.com/Suyash-Batra/BudgetEase"
          />

          <ProjectCard
            category="mobile"
            image={`${process.env.PUBLIC_URL}/images/icon.jpg`}
            title="StreetRunner"
            description="A 3D Endless Runner Game Prototype"
            tags={["Game Dev", "Unity", "3D", "C#"]}
            viewLink="https://suyash-batra.itch.io/"
          />

          <ProjectCard
            category="mobile"
            image={`${process.env.PUBLIC_URL}/images/icon.png`}
            title="Ashborn"
            description="A 2D RPG Game"
            tags={["Game Dev", "Unity", "2D", "C#"]}
            viewLink="https://play.unity.com/en/games/..."
            viewText="Play"
            downloadLink={{
              href: "https://suyash-batra.itch.io/ashborn",
              icon: faDownload,
            }}
          />
        </div>
      </section>
    </div>
  );
}
