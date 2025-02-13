// src/Components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import globeImage from "../Assets/globeharvest.png";
import sourcingImage from "../Assets/sourcingImage.png";
import manufacturingImage from "../Assets/manufacturingImage.png";
import logisticsImage from "../Assets/logisticsImage.png";

function Home() {
  // HERO SECTION STYLES
  const heroContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "4rem 2rem",
    position: "relative",
    left: "",
    right: "",
    top: "",
    bottom: "",
  };

  const heroLeftStyle = {
    flex: 1,
    position: "relative",
    left: "",
    right: "",
    top: "",
    bottom: "",
  };

  const heroTitleStyle = {
    color: "black",
    fontWeight: "bold",
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
    position: "relative",
    left: "",
    right: "-50px",
    top: "",
    bottom: "",
  };

  const joinButtonStyle = {
    border: "2px solid green",
    borderRadius: "9999px",
    backgroundColor: "white",
    color: "black",
    padding: "0.75rem 1.5rem",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "background-color 0.3s, color 0.3s",
    position: "relative",
    left: "",
    right: "-50px",
    top: "",
    bottom: "",
  };

  const handleButtonMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = "green";
    e.currentTarget.style.color = "white";
  };

  const handleButtonMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = "white";
    e.currentTarget.style.color = "black";
  };

  // Globe image style – now using an imported image
  const globeImageStyle = {
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    objectFit: "cover",
    position: "relative",
    left: "-100px", // Adjust this value to shift the globe further to the left
    right: "",
    top: "",
    bottom: "",
  };

  // FAQ SECTION STYLES
  const faqContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
    padding: "2rem",
    position: "relative",
    left: "",
    right: "",
    top: "",
    bottom: "",
  };

  // Make FAQ boxes equal in size
  const faqBoxStyle = {
    backgroundColor: "green",
    color: "white",
    padding: "1rem",
    borderRadius: "8px",
    textAlign: "center",
    width: "300px",
    height: "60px",
    position: "relative",
    left: "",
    right: "",
    top: "",
    bottom: "",
  };

  // We'll split the FAQ items into two rows:
  const faqItems = [
    "What is the process?",
    "How do I place an order?",
    "What are the payment terms?",
    "Can I customize my order?",
    "What is your turnaround time?",
  ];
  const faqRow1Items = faqItems.slice(0, 3);
  const faqRow2Items = faqItems.slice(3);

  const faqRowStyle = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    position: "relative",
    left: "",
    right: "",
    top: "",
    bottom: "",
  };

  // For the second row, shift to the right for a checkerboard effect.
  const faqRow2Style = {
    ...faqRowStyle,
    marginLeft: "0px", // Adjust as needed
    marginTop: "25px",
  };

  // PROBLEMS SECTION STYLES
  const problemsContainerStyle = {
    padding: "2rem",
    position: "relative",
    left: "",
    right: "",
    top: "",
    bottom: "",
  };

  const problemRowStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
    position: "relative",
    left: "",
    right: "",
    top: "",
    bottom: "",
  };

  const problemTextStyle = {
    flex: 1,
    position: "relative",
    left: "",
    right: "",
    top: "",
    bottom: "",
  };

  const problemTitleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "black",
    marginBottom: "1rem",
    position: "relative",
    left: "",
    right: "-50px",
    top: "",
    bottom: "",
  };

  const problemDescStyle = {
    fontSize: "1rem",
    color: "black",
    lineHeight: "1.5",
    position: "relative",
    left: "",
    right: "-50px",
    top: "",
    bottom: "",
  };

  const problemImageStyle = {
    width: "450px",
    height: "250px",
    backgroundColor: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "2rem",
    position: "relative",
    left: "-50px",
    right: "",
    top: "",
    bottom: "",
  };

  const problems = [
    {
      title: "Sourcing",
      description:
        "Save hours finding the perfect factory with a catalogue vetted by Harvest.",
        image: sourcingImage,
    },
    {
      title: "Manufacturing",
      description:
        "Streamline production with our trusted network of manufacturers.",
        image: manufacturingImage,
    },
    {
      title: "Logistics",
      description:
        "Optimize your supply chain and reduce delivery times worldwide.",
        image: logisticsImage,
    },
  ];

  // HERO SECTION JSX
  const heroSection = (
    <div style={heroContainerStyle}>
      <div style={heroLeftStyle}>
        <div style={heroTitleStyle}>Build & Scale Your CPG Brand Simply</div>
        <a
          href="https://forms.gle/qpnvogn6D1X9fktE8" // Replace with your actual waitlist link
          target="_blank"
          rel="noopener noreferrer"
          style={joinButtonStyle}
          onMouseOver={handleButtonMouseOver}
          onMouseOut={handleButtonMouseOut}
        >
          Join Waitlist
        </a>
      </div>
      <div>
        <img src={globeImage} alt="Globe" style={globeImageStyle} />
      </div>
    </div>
  );

  // FAQ SECTION JSX
  const faqSection = (
    <div style={{ padding: "2rem" }}>
      {/* First row (3 boxes) */}
      <div style={faqRowStyle}>
        {faqRow1Items.map((item, index) => (
          <div key={index} className="faq-box" style={faqBoxStyle}>
            {item}
          </div>
        ))}
      </div>
      {/* Second row (2 boxes, shifted right) */}
      <div style={faqRow2Style}>
        {faqRow2Items.map((item, index) => (
          <div key={index} className="faq-box" style={faqBoxStyle}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );

  // PROBLEMS SECTION JSX
  const problemsSection = (
    <div style={{ padding: "2rem" }}>
      {problems.map((problem, index) => (
        <div key={index} style={problemRowStyle}>
          <div style={problemTextStyle}>
            <div style={problemTitleStyle}>{problem.title}</div>
            <div style={problemDescStyle}>{problem.description}</div>
          </div>
          <div style={problemImageStyle}>
            <img
              src={problem.image}
              alt={problem.title}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  // Injected CSS for FAQ checkerboard effect (if needed) and any other hover effects
  const injectedStyles = (
    <style>
      {`
        /* (Optional) Additional CSS for FAQ boxes can be added here */
      `}
    </style>
  );

  return (
    <div style={{ backgroundColor: "white", position: "relative", left: "", right: "", top: "", bottom: "" }}>
      {injectedStyles}
      {heroSection}
      {faqSection}
      {problemsSection}
    </div>
  );
}

export default Home;