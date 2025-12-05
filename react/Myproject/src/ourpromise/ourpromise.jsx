import React from "react";
import "./OurPromise.css";

const items = [
  {
    id: 1,
    colorClass: "teal",
    title: "Top Code Quality",
    icon: "💻",
    text: "Our commitment goes beyond mere code – it encompasses providing solutions. You receive W3C fully compliant markup."
  },
  {
    id: 2,
    colorClass: "orange",
    title: "Responsive",
    icon: "📱",
    text: "We understand the value of timely responsiveness and adaptability."
  },
  {
    id: 3,
    colorClass: "blue",
    title: "Rockstar Team",
    icon: "👥",
    text: "You'll have access to an all-star team of experienced professionals."
  },
  {
    id: 4,
    colorClass: "purple",
    title: "Fast Turn-arounds",
    icon: "⚡",
    text: "We are swift and capable of providing high-quality code fast."
  },
  {
    id: 5,
    colorClass: "red",
    title: "Life-time Support",
    icon: "🛟",
    text: "If bugs emerge in the future, feel free to reach out for support."
  },
  {
    id: 6,
    colorClass: "green",
    title: "Secured Agreement",
    icon: "🛡️",
    text: "You own the creative work entirely — NDA guaranteed."
  }
];

const OurPromise = () => {
  return (
    <section className="our-promise">
      <div className="our-promise-container">
        <h2 className="our-promise-title">Our Promise</h2>
        <p className="our-promise-subtitle">
          As part of our high quality service, we'd like to offer something extra too.
        </p>

        <div className="promise-grid">
          {items.map((item) => (
            <div key={item.id} className={`promise-card ${item.colorClass}`}>
              <div className="promise-top-line" />
              <div className="promise-content">
                <div className="promise-header">
                  <span className="promise-icon">{item.icon}</span>
                  <h3 className="promise-heading">{item.title}</h3>
                </div>
                <p className="promise-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
