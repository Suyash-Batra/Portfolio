import ProjectCard from "./ProjectCard";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  return (
    <section id="projects">
      <div className="sectionContainer bg2">
        <center>
          <div className="title">
            <b>My Projects</b>
            <div className="underline"></div>
          </div>
        </center>

        <div className="parallelContainers">
          <ProjectCard
            category="web"
            image={`${process.env.PUBLIC_URL}/images/chat.jpg`}
            title="ChatHub"
            description="ChatHub is a web application for group discussions real-time"
            tags={["WebApp", "Django", "Daphne", "Redis", "Celery", "API", "JavaScript"]}
            viewLink="https://github.com/Suyash-Batra/Chathub.git"
          />
          <ProjectCard
            category="game"
            image={`${process.env.PUBLIC_URL}/images/icon.png`}
            title="Ashborn"
            description="A 2D RPG Game"
            tags={["Game Dev", "Unity", "2D", "C#"]}
            viewLink="https://play.unity.com/en/games/d39f9fe8-d3ae-4ecf-9e37-e5032a33f850/ashborn  "
            viewText="Play"
            downloadLink={{
              href: "https://suyash-batra.itch.io/ashborn",
              icon: faDownload,
            }}
          />
          <ProjectCard
            category="web"
            image={`${process.env.PUBLIC_URL}/images/Exp.jpg`}
            title="BudgetEase"
            description="Expense Tracker with Visual Graphs and Excel"
            tags={["Website", "HTML", "CSS", "Composer", "PHP", "Python"]}
            viewLink="https://github.com/Suyash-Batra/BudgetEase"
          />
          <ProjectCard
            category="web"
            image={`${process.env.PUBLIC_URL}/images/port.jpg`}
            title="SpeedArena"
            description="Speed Arena is a competitive platform where users test their speed and challenge others"
            tags={[
              "Website",
              "HTML",
              "CSS",
              "JavaScript",
              "JSP",
              "Java",
              "SQL",
            ]}
            viewLink="https://github.com/Suyash-Batra/SpeedArena"
          />

          <ProjectCard
            category="mobile"
            image={`${process.env.PUBLIC_URL}/images/icon.jpg`}
            title="StreetRunner"
            description="A 3D Endless Runner Game Prototype"
            tags={["Game Dev", "Unity", "3D", "C#"]}
            viewLink="https://suyash-batra.itch.io/"
          />
        </div>
      </div>
    </section>
  );
}
