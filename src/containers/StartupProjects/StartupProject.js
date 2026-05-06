import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const PAGE_SIZE = 4;

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  const projects = bigProjects.projects;
  const numPages = Math.ceil(projects.length / PAGE_SIZE);
  const [page, setPage] = useState(0);

  const goPrev = () => setPage(p => (p - 1 + numPages) % numPages);
  const goNext = () => setPage(p => (p + 1) % numPages);

  if (!bigProjects.display) {
    return null;
  }
  const visible = projects.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-carousel">
            <button
              type="button"
              aria-label="Previous projects"
              className="projects-nav-btn projects-nav-btn--left"
              onClick={goPrev}
            >
              <i className="fas fa-chevron-left" />
            </button>

            <div className="projects-carousel-stage">
              <Fade key={page} duration={500}>
                <div className="projects-page">
                  {visible.map((project, i) => (
                    <div
                      key={page * PAGE_SIZE + i}
                      className={
                        isDark
                          ? "dark-mode project-card project-card-dark"
                          : "project-card project-card-light"
                      }
                    >
                      {project.image ? (
                        <div className="project-image">
                          <img
                            src={project.image}
                            alt={project.projectName}
                            className="card-image"
                            style={project.imageStyle}
                          ></img>
                        </div>
                      ) : null}
                      <div className="project-detail">
                        <h5
                          className={
                            isDark ? "dark-mode card-title" : "card-title"
                          }
                        >
                          {project.projectName}
                        </h5>
                        <p
                          className={
                            isDark ? "dark-mode card-subtitle" : "card-subtitle"
                          }
                        >
                          {project.projectDesc}
                        </p>
                        {project.footerLink ? (
                          <div className="project-card-footer">
                            {project.footerLink.map((link, j) => (
                              <span
                                key={j}
                                className={
                                  isDark
                                    ? "dark-mode project-tag"
                                    : "project-tag"
                                }
                                onClick={() => openUrlInNewTab(link.url)}
                              >
                                {link.name}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>

            <button
              type="button"
              aria-label="Next projects"
              className="projects-nav-btn projects-nav-btn--right"
              onClick={goNext}
            >
              <i className="fas fa-chevron-right" />
            </button>
          </div>

          <div className="projects-dots" role="tablist">
            {Array.from({length: numPages}).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === page}
                aria-label={`Go to page ${i + 1}`}
                className={
                  i === page
                    ? "projects-dot projects-dot--active"
                    : "projects-dot"
                }
                onClick={() => setPage(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
