// FactoryPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import factoriesData from "../FactoryData/factoriesData";
import styles from "../styles/FactoryPage.module.css";

function FactoryPage() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [viewIndex, setViewIndex] = React.useState(-1);

  const factory = factoriesData.find((f) => f.id === id);
  if (!factory) return <div>Factory not found.</div>;

  const images = factory.images ?? [];
  const catDescs = factory.description?.categoryDescriptions ?? [];
  const currentImage = images[currentImageIndex];
  const hasNext = viewIndex === -1 ? catDescs.length > 0 : viewIndex < catDescs.length - 1;
  const hasPrev = viewIndex >= 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{factory.name}</h1>
          <div className={styles.buttonContainer}>
            {hasPrev && (
              <button
                className={styles.categoryButton}
                onClick={() => setViewIndex(viewIndex - 1)}
              >
                &lt; Previous Category
              </button>
            )}
            {hasNext && (
              <button
                className={styles.categoryButton}
                onClick={() => setViewIndex(viewIndex === -1 ? 0 : viewIndex + 1)}
              >
                Next Category &gt;
              </button>
            )}
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.imageColumn}>
          <div className={styles.flexColumn}>
            <div className={styles.mainImageContainer}>
              <img
                src={currentImage}
                alt={factory.name}
                className={styles.mainImage}
                onClick={toggleFullscreen}
              />
              <button 
                className={styles.fullscreenButton}
                onClick={toggleFullscreen}
              >
                ⤢
              </button>
            </div>
            <div className={styles.thumbnailsContainer}>
              <button
                className={styles.arrowButtonLeft}
                onClick={prevImage}
              >
                ←
              </button>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={
                    index === currentImageIndex
                      ? styles.thumbnailSelected
                      : styles.thumbnail
                  }
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
              <button
                className={styles.arrowButtonRight}
                onClick={nextImage}
              >
                →
              </button>
            </div>
            <div className={styles.marginAuto}>
              <Link 
                to="/logistics" 
                className={styles.shippingButton}
              >
                Shipping Details
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.contentColumn}>
          <div className={styles.contentContainer}>
            <div className={styles.cost}>
              Average Cost per Unit: {factory.averageCostPerUnit}
            </div>
            <div className={styles.scrollableContent}>
              {viewIndex === -1 ? (
                <div className={styles.description}>
                  {factory.description?.general}
                </div>
              ) : (
                <>
                  <h2 className={styles.categoryTitle}>
                    {catDescs[viewIndex].categoryName}
                  </h2>
                  {catDescs[viewIndex].subcategoryDescriptions.map((sub, idx) => (
                    <div key={idx}>
                      <h3 className={styles.subcategoryTitle}>
                        {sub.title}
                      </h3>
                      <p className={styles.subcategoryDescription}>
                        {sub.content}
                      </p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {isFullscreen && (
        <div className={styles.fullscreenOverlay} onClick={toggleFullscreen}>
          <img
            src={currentImage}
            alt={factory.name}
            className={styles.fullscreenImage}
          />
        </div>
      )}
    </div>
  );
}

export default FactoryPage;