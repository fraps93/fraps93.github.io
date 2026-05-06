import React, {useContext, useState} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const PAGE_SIZE = 3;

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const cards = workExperiences.experience;
  const numPages = Math.ceil(cards.length / PAGE_SIZE);
  const [page, setPage] = useState(0);

  const goPrev = () => setPage(p => (p - 1 + numPages) % numPages);
  const goNext = () => setPage(p => (p + 1) % numPages);

  if (!workExperiences.display) {
    return null;
  }
  const visible = cards.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className="experience-heading">Experiences</h1>

            <div className="experience-carousel">
              <button
                type="button"
                aria-label="Previous experiences"
                className="experience-nav-btn experience-nav-btn--left"
                onClick={goPrev}
              >
                <i className="fas fa-chevron-left" />
              </button>

              <div className="experience-carousel-stage">
                <Fade key={page} duration={500}>
                  <div className="experience-page">
                    {visible.map((card, i) => (
                      <ExperienceCard
                        key={page * PAGE_SIZE + i}
                        isDark={isDark}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          role: card.role,
                          descBullets: card.descBullets,
                          bannerColor: card.bannerColor,
                          logoStyle: card.logoStyle
                        }}
                      />
                    ))}
                  </div>
                </Fade>
              </div>

              <button
                type="button"
                aria-label="Next experiences"
                className="experience-nav-btn experience-nav-btn--right"
                onClick={goNext}
              >
                <i className="fas fa-chevron-right" />
              </button>
            </div>

            <div className="experience-dots" role="tablist">
              {Array.from({length: numPages}).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === page}
                  aria-label={`Go to page ${i + 1}`}
                  className={
                    i === page
                      ? "experience-dot experience-dot--active"
                      : "experience-dot"
                  }
                  onClick={() => setPage(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
