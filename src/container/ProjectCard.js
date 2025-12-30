import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard({
  image,
  title,
  description,
  tags,
  viewLink,
  githubLink,
  downloadLink,
  category,
  viewText = "View",
}) {
  return (
    <div className="project-card" data-category={category}>
      <div className="project-img">
        <img src={image} alt={title} />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>

        <div className="project-links">
          {viewLink && (
            <a href={viewLink} target="_blank" rel="noreferrer">
              <button className="btn custom-btn">{viewText}</button>
            </a>
          )}

          <div className="icon-links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={githubLink.icon} />
              </a>
            )}

            {downloadLink && (
              <a href={downloadLink.href} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={downloadLink.icon} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
