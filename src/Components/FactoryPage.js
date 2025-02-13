// FactoryPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import factoriesData from "../FactoryData/factoriesData";

function FactoryPage() {
  // Get the factory id from the URL
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const factory = factoriesData.find((f) => f.id === id);
  if (!factory) {
    return <div>Factory not found.</div>;
  }

  // --- Slideshow State & Navigation ---
  function nextImage() {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % factory.images.length);
  }
  function prevImage() {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + factory.images.length) % factory.images.length
    );
  }

  // --- STYLE DEFINITIONS ---
  const columnsContainerStyle = {
    display: "flex",
    gap: "2rem",
  };
  const containerStyle = {
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    gap: "2rem",
  };
  const leftStyle = { flex: 1, textAlign: "left" };
  const rightStyle = {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const nameStyle = { fontWeight: "bold", fontSize: "2rem", marginBottom: "1rem" };
  const subHeaderStyle = { fontSize: "1.5rem", marginBottom: "0.5rem" };
  // Use pre-wrap to preserve line breaks in longer descriptions:
  const normalTextStyle = { fontSize: "1rem", marginBottom: "1rem", lineHeight: "1.5", whiteSpace: "pre-wrap" };
  const dividerStyle = { border: "none", borderBottom: "1px solid grey", margin: "1rem 0", width: "95%" };

  const imagePanelStyle = {
    width: "100%",
    height: "400px",
    backgroundColor: "#e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
  };
  const bigImageStyle = { width: "100%", height: "100%", objectFit: "cover" };

  const thumbnailStyle = {
    width: "60px",
    height: "40px",
    objectFit: "cover",
    marginRight: "0.5rem",
    cursor: "pointer",
    border: "2px solid transparent",
  };
  const thumbnailSelectedStyle = { ...thumbnailStyle, border: "2px solid green" };

  const slideshowFooterStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const arrowButtonStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "2px solid grey",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    margin: "0 1rem",
    fontSize: "1.5rem",
    transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
  };

  // --- Build the Slideshow Panel (Right Column) ---
  const currentImage = factory.images[currentImageIndex];
  const bigPanel = (
    <div style={imagePanelStyle}>
      <img src={currentImage} alt={factory.name} style={bigImageStyle} />
    </div>
  );
  const thumbnails = factory.images.map((img, index) => {
    const style = index === currentImageIndex ? thumbnailSelectedStyle : thumbnailStyle;
    return (
      <img
        key={index}
        src={img}
        alt={`Thumbnail ${index + 1}`}
        style={style}
        onClick={() => setCurrentImageIndex(index)}
      />
    );
  });
  const prevButton = (
    <div className="arrow-button" style={arrowButtonStyle} onClick={prevImage}>
      <span>{"<"}</span>
    </div>
  );
  const nextButton = (
    <div className="arrow-button" style={arrowButtonStyle} onClick={nextImage}>
      <span>{">"}</span>
    </div>
  );
  const slideshowFooter = (
    <div style={slideshowFooterStyle}>
      {prevButton}
      {thumbnails}
      {nextButton}
    </div>
  );
  const slideshowPanel = (
    <div>
      {bigPanel}
      {slideshowFooter}
    </div>
  );

  // --- Get Started Button ---
const getStartedButton = (
  <div style={{ marginTop: "1rem" }}>
    <Link to="/logistics" className="get-started-button">
      Shipping Details
    </Link>
  </div>
);

  const rightContent = (
    <div style={rightStyle}>
      {slideshowPanel}
      {getStartedButton}
    </div>
  );

  // --- Build the Left Column Content (Factory Details) ---
  const leftContent = (
    <div style={leftStyle}>
      <div style={nameStyle}>{factory.name}</div>
      <div style={subHeaderStyle}>Category: {factory.category}</div>
      <div>
        <div style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>Sub-Categories:</div>
        <ul>
          {factory.subCategories.map((subCat) => (
            <li key={subCat} style={normalTextStyle}>
              {subCat}
            </li>
          ))}
        </ul>
      </div>
      <div style={normalTextStyle}>Average Cost per Unit: {factory.averageCostPerUnit}</div>
      <hr style={dividerStyle} />
      <div style={subHeaderStyle}>Subcategory Descriptions</div>
      <div>
        <div style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.25rem" }}>
          Luxury Selection
        </div>
        <div style={normalTextStyle}>{factory.description.luxury}</div>
      </div>
      <div>
        <div style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.25rem" }}>
          Truffles
        </div>
        <div style={normalTextStyle}>{factory.description.truffles}</div>
      </div>
      <div>
        <div style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.25rem" }}>
          Chocolate Bars & Snacks
        </div>
        <div style={normalTextStyle}>{factory.description.bars}</div>
      </div>
      <hr style={dividerStyle} />
      <div style={normalTextStyle}>{factory.description.general}</div>
    </div>
  );

  // --- Inject CSS for Arrow Buttons and Get Started Button ---
  const injectedStyles = (
    <style>
      {`
        .arrow-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid grey;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin: 0 1rem;
          font-size: 1.5rem;
          transition: background-color 0.3s, color 0.3s, border-color 0.3s;
        }
        .arrow-button:hover {
          background-color: green;
          color: white;
          border-color: green;
        }
        .get-started-button {
          display: inline-block;
          text-align: center;
          border: 2px solid yellow;
          border-radius: 9999px;
          background-color: yellow;
          color: black;
          padding: 0.75rem 1.5rem;
          text-decoration: none;
          font-weight: bold;
          transition: background-color 0.3s, color 0.3s, border-color 0.3s;
        }
        .get-started-button:hover {
          background-color: white;
          color: black;
          border-color: yellow;
        }
      `}
    </style>
  );

  const columnsContainer = (
    <div style={columnsContainerStyle}>
      {leftContent}
      {rightContent}
    </div>
  );

  return (
    <div style={containerStyle}>
      {injectedStyles}
      {columnsContainer}
    </div>
  );
}

export default FactoryPage;