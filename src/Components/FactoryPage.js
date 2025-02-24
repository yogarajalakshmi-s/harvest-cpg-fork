// FactoryPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import factoriesData from "../FactoryData/factoriesData";

function FactoryPage() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  // viewIndex: -1 means showing the general description.
  // viewIndex >= 0 indicates the index within factory.description.categoryDescriptions.
  const [viewIndex, setViewIndex] = React.useState(-1);

  const factory = factoriesData.find((f) => f.id === id);
  if (!factory) return <div>Factory not found.</div>;

  // Use defaults to avoid undefined errors.
  const images = factory.images ?? [];
  const catDescs = factory.description?.categoryDescriptions ?? [];

  // --- Slideshow Navigation ---
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // --- STYLE DEFINITIONS ---
  const containerStyle = {
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    gap: "2rem",
  };
  const columnsContainerStyle = { display: "flex", gap: "2rem" };
  const leftStyle = { flex: 1, textAlign: "left" };
  const rightStyle = { width: "400px", display: "flex", flexDirection: "column", alignItems: "center" };
  const nameStyle = { fontWeight: "bold", fontSize: "2rem", marginBottom: "1rem" };
  const subHeaderStyle = { fontSize: "1.5rem", marginBottom: "0.5rem" };
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
  const slideshowFooterStyle = { display: "flex", alignItems: "center", justifyContent: "center" };
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

  // --- Slideshow Panel ---
  const currentImage = images[currentImageIndex];
  const bigPanel = (
    <div style={imagePanelStyle}>
      {currentImage ? (
        <img src={currentImage} alt={factory.name} style={bigImageStyle} />
      ) : (
        <div>No Image Available</div>
      )}
    </div>
  );
  const thumbnails = images.map((img, index) => {
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
  const prevImageButton = (
    <div className="arrow-button" style={arrowButtonStyle} onClick={prevImage}>
      <span>{"<"}</span>
    </div>
  );
  const nextImageButton = (
    <div className="arrow-button" style={arrowButtonStyle} onClick={nextImage}>
      <span>{">"}</span>
    </div>
  );
  const slideshowFooter = (
    <div style={slideshowFooterStyle}>
      {prevImageButton}
      {thumbnails}
      {nextImageButton}
    </div>
  );
  const slideshowPanel = (
    <div>
      {bigPanel}
      {slideshowFooter}
    </div>
  );

  // --- Category Navigation Buttons ---
  // If viewIndex === -1 (general), show only "Next Category" if there are any categories.
  // Otherwise, show "Previous Category" (if viewIndex >= 0) and "Next Category" if applicable.
  const hasNext = viewIndex === -1 ? catDescs.length > 0 : viewIndex < catDescs.length - 1;
  const hasPrev = viewIndex >= 0;
  const navButtons = (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      {hasPrev && (
        <button
          className="get-category-button"
          onClick={() => setViewIndex(viewIndex - 1)}
        >
          {"< Previous Category"}
        </button>
      )}
      {hasNext && (
        <button
          className="get-category-button"
          onClick={() => setViewIndex(viewIndex === -1 ? 0 : viewIndex + 1)}
        >
          {"Next Category >"}
        </button>
      )}
    </div>
  );

  // --- Header Area: Factory Title and Navigation Buttons ---
  const headerArea = (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={nameStyle}>{factory.name}</div>
      {navButtons}
    </div>
  );

  // --- Description Area ---
  // If viewIndex is -1, show the general description.
  // Otherwise, show the selected category with its subcategory descriptions.
  let descriptionArea;
  if (viewIndex === -1) {
    descriptionArea = (
      <div style={normalTextStyle}>
        {factory.description?.general || "No general description."}
      </div>
    );
  } else {
    const categoryObj = catDescs[viewIndex];
    descriptionArea = (
      <div>
        <div style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
          {categoryObj.categoryName}
        </div>
        {categoryObj.subcategoryDescriptions.map((sub, idx) => (
          <div key={idx}>
            <div style={{ fontSize: "1.15rem", fontWeight: "bold", marginBottom: "0.25rem" }}>
              {sub.title}
            </div>
            <div style={normalTextStyle}>{sub.content}</div>
          </div>
        ))}
      </div>
    );
  }

  // --- Left Column Content ---
  const leftContent = (
    <div style={leftStyle}>
      {headerArea}
      <div style={subHeaderStyle}>Average Cost per Unit: {factory.averageCostPerUnit}</div>
      <hr style={dividerStyle} />
      {descriptionArea}
    </div>
  );

  // --- Right Column: Slideshow and "Shipping Details" Button ---
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

  // --- Injected CSS for Buttons ---
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
        .get-category-button {
          border: 2px solid green;
          border-radius: 9999px;
          background-color: white;
          color: black;
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s, border-color 0.3s;
        }
        .get-category-button:hover {
          background-color: green;
          color: white;
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