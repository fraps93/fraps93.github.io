import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Project.scss";
import {openSource} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const {isDark} = useContext(StyleContext);

  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank", "noopener,noreferrer");
    win && win.focus();
  }

  if (!openSource.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="opensource">
        <div>
          <h1 className="skills-heading">{openSource.title}</h1>
          {openSource.subtitle && (
            <p
              className={
                isDark
                  ? "dark-mode project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {openSource.subtitle}
            </p>
          )}

          <div className="opensource-grid">
            {openSource.projects.map((project, i) => (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
                onClick={() => openUrlInNewTab(project.url)}
                style={{cursor: "pointer"}}
              >
                <div className="project-image">
                  <i
                    className={project.icon}
                    style={{
                      fontSize: 56,
                      color: project.languageColor
                    }}
                  ></i>
                </div>
                <div className="project-detail">
                  <h5
                    className={
                      isDark ? "dark-mode card-title" : "card-title"
                    }
                  >
                    {project.name}
                  </h5>
                  <p
                    className={
                      isDark ? "dark-mode card-subtitle" : "card-subtitle"
                    }
                  >
                    {project.description}
                  </p>
                  <div className="project-card-footer">
                    {project.language && (
                      <span
                        className={
                          isDark ? "dark-mode project-tag" : "project-tag"
                        }
                      >
                        {project.language}
                      </span>
                    )}
                    <span
                      className={
                        isDark ? "dark-mode project-tag" : "project-tag"
                      }
                      onClick={e => {
                        e.stopPropagation();
                        openUrlInNewTab(project.url);
                      }}
                    >
                      View on GitHub
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Fade>
  );
}
