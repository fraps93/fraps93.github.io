import React, {useContext, useState} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const PAGE_SIZE = 4;

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const cards = achievementSection.achievementsCards || [];
  const numPages = Math.max(1, Math.ceil(cards.length / PAGE_SIZE));
  const [page, setPage] = useState(0);

  const goPrev = () => setPage(p => (p - 1 + numPages) % numPages);
  const goNext = () => setPage(p => (p + 1) % numPages);

  if (!achievementSection.display) {
    return null;
  }

  const visible = cards.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>

          <div className="achievement-carousel">
            <button
              type="button"
              aria-label="Previous achievements"
              className="achievement-nav-btn achievement-nav-btn--left"
              onClick={goPrev}
            >
              <i className="fas fa-chevron-left" />
            </button>

            <div className="achievement-carousel-stage">
              <Fade key={page} duration={500}>
                <div className="achievement-page">
                  {visible.map((card, i) => (
                    <AchievementCard
                      key={page * PAGE_SIZE + i}
                      isDark={isDark}
                      cardInfo={{
                        title: card.title,
                        description: card.subtitle,
                        image: card.image,
                        imageAlt: card.imageAlt,
                        footer: card.footerLink
                      }}
                    />
                  ))}
                </div>
              </Fade>
            </div>

            <button
              type="button"
              aria-label="Next achievements"
              className="achievement-nav-btn achievement-nav-btn--right"
              onClick={goNext}
            >
              <i className="fas fa-chevron-right" />
            </button>
          </div>

          {numPages > 1 && (
            <div className="achievement-dots" role="tablist">
              {Array.from({length: numPages}).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === page}
                  aria-label={`Go to page ${i + 1}`}
                  className={
                    i === page
                      ? "achievement-dot achievement-dot--active"
                      : "achievement-dot"
                  }
                  onClick={() => setPage(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
