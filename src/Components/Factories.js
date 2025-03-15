import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Factories.module.css";

const imagesContext = require.context("../Assets", false, /\.(png|jpe?g|svg)$/);
const allImages = imagesContext.keys().map(imagesContext);
console.log("Loaded images:", allImages);

function Factories() {
  // --- STATES ---
  const [searchTerm, setSearchTerm] = React.useState("");
  const [showCategory, setShowCategory] = React.useState(false);
  const [showSubcategory, setShowSubcategory] = React.useState(false);
  const [showCountry, setShowCountry] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = React.useState([]);
  const [selectedCountries, setSelectedCountries] = React.useState([]);
  const [avgPPUMin, setAvgPPUMin] = React.useState("");
  const [avgPPUMax, setAvgPPUMax] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 9;

  // --- UPDATED DUMMY DATA (15 factories) ---
  const factoryData = [
    {
      id: 1,
      name: "Bind Chocolate",
      country: "Turkey",
      categories: ["Sweets", "Chocolates", "Spreads", "Baked Goods"],
      subcategories: ["Biscuits", "Cookies", "Pralines, & more..."],
      avgPPU: "~ $3.50",
      image: allImages[0],
    },
    {
      id: 2,
      name: "Delly",
      country: "Turkey",
      categories: ["Energy Bars", "Protein Bars", "Fruit Bars", "Chocolates"],
      subcategories: ["Nut-Based Bars", "Nut Clusters", "Chocolate Bites", "Energy Bites, & more..."],
      avgPPU: "~ $2.75",
      image: allImages[1],
    },
    {
      id: 3,
      name: "Vitalidade",
      country: "Spain",
      categories: ["Superfood Snacks", "Protein Shakes", "Baked Goods"],
      subcategories: ["Granola Bars", "Juices", "Instant Pasta", "Cereals", "Cookies, & more..."],
      avgPPU: "~ $4.25",
      image: allImages[2],
    },
    {
      id: 4,
      name: "Bompi",
      country: "Turkey",
      categories: ["Meringues", "Baked Goods"],
      subcategories: ["Cookies", "Biscuits", "Biscotti"],
      avgPPU: "~ $3.50",
      image: allImages[3],
    },
    {
      id: 5,
      name: "Ecoficus",
      country: "Spain",
      categories: ["Figs", "Spreads", "Trail Mixes"],
      subcategories: ["Jams", "Vinegars", "Honeys", "Nuts, & more..."],
      avgPPU: "~ $2.50",
      image: allImages[4],
    },
    {
      id: 6,
      name: "Elvan",
      country: "Turkey",
      categories: ["Chocolates", "Candies", "Baked Goods", "Beverages", "Snacks", "Gifts"],
      subcategories: ["Energy Drinks", "Iced Teas", "Fruit Waters", "Donuts", "Cookies", "Gummies", "Chips, & more..."],
      avgPPU: "~ $3.00",
      image: allImages[5],
    },
    {
      id: 7,
      name: "Biovencer Healthcare",
      country: "India",
      categories: ["Nutraceuticals", "Ayurvedic Products", "Energy Bars"],
      subcategories: ["Herbal Supplements", "Skincare", "Vitamin-Infused Gummies, & more..."],
      avgPPU: "~ $4.00",
      image: allImages[6],
    },
    {
      id: 8,
      name: "Fresshh",
      country: "Germany",
      categories: ["Beverages"],
      subcategories: ["Sodas", "Energy Drinks, & more..."],
      avgPPU: "~ $1.50",
      image: allImages[7],
    },
    {
      id: 9,
      name: "Pete's Luxury Wholefoods",
      country: "Vietnam",
      categories: ["Energy Bars", "Granola", "Fruit Bars"],
      subcategories: ["Granola Bites", "Granola Mixes", "Granola Bars", "Cacao-Based Bars, & more..."],
      avgPPU: "~ $3.15",
      image: allImages[8],
    },
    {
      id: 10,
      name: "Lumicita",
      country: "Turkey",
      categories: ["Chocolates", "Spreads", "Coffee", "Baked Goods"],
      subcategories: ["Cookies", "Biscuits", "Biscotti", "Turkish Coffees", "Chocolate Bites", "Energy Bites, & more..."],
      avgPPU: "~ $3.50",
      image: allImages[9],
    },
    {
      id: 11,
      name: "Ayurvedhika",
      country: "India",
      categories: ["Supplements", "Teas", "Beverages", "Personal Care", "Baked Goods"],
      subcategories: ["Tablets", "Energy Drinks", "Herbal Supplements", "Skincare", "Cookies", "Vitamins, & more..."],
      avgPPU: "~ $3.75",
      image: allImages[11],
    },
    {
      id: 12,
      name: "Bakali",
      country: "Thailand",
      categories: ["Snacks"],
      subcategories: ["Rice Cakes", "Chips", "Corn Cakes", "Veggie Cakes", "Kids Snacks, & more..."],
      avgPPU: "~ $2.25",
      image: allImages[10],
    },
    /*{
      id: 13,
      name: "Z Natural Foods",
      country: "USA",
      categories: ["Textiles", "Machinery"],
      subcategories: ["Parts", "Dubai"],
      avgPPU: "$2.90",
      image: allImages[12],
    },*/
    /*{
      id: 14,
      name: "Xi Industries",
      country: "Germany",
      categories: ["Beverages", "Toys"],
      subcategories: ["Adult", "Kids"],
      avgPPU: "$1.80",
      image: allImages[13],
    },*/
    /*{
      id: 15,
      name: "Omicron Works",
      country: "China",
      categories: ["Automotive", "Chocolates"],
      subcategories: ["Truffle", "Pistachio"],
      avgPPU: "$3.50",
      image: allImages[14],
    },*/
  ];

  // --- AVAILABLE OPTIONS ---
  const availableCategories = ["Ayurvedic Products", "Baked Goods", "Beverages", "Candies", "Chocolates", "Coffee", "Energy Bars", "Figs", "Fruit Bars", "Gifts", "Granola", "Meringues", "Nutraceuticals", "Personal Care", "Protein Bars", "Protein Shakes", "Snacks", "Spreads", "Sweets", "Superfood Snacks", "Supplements", "Teas", "Trail Mixes"];
  const availableSubcategories = ["Biscotti", "Biscuits", "Cacao-Based Bars", "Cereals", "Chocolate Bites", "Chips", "Cookies", "Corn Cakes", "Donuts", "Energy Bites", "Energy Drinks", "Fruit Waters", "Granola Bars", "Granola Bites", "Granola Mixes", "Gummies", "Herbal Supplements", "Honeys", "Iced Teas", "Instant Pasta", "Jams", "Juices", "Kids Snacks", "Nut Clusters", "Nut-Based Bars", "Nuts", "Pralines", "Rice Cakes", "Skincare", "Sodas", "Tablets", "Turkish Coffees", "Veggie Cakes", "Vinegars", "Vitamin-Infused Gummies", "Vitamins"];
  const availableCountries = ["Turkey", "Spain", "India", "Germany", "Vietnam", "South Africa"];

  // --- FILTERING LOGIC ---
  const filteredFactories = factoryData.filter(function (factory) {
    if (searchTerm !== "") {
      const term = searchTerm.toLowerCase();
      const nameMatch = factory.name.toLowerCase().startsWith(term);
      const categoriesMatch = factory.categories.some((cat) => cat.toLowerCase().startsWith(term));
      const subcategoriesMatch = factory.subcategories.some((subcat) => subcat.toLowerCase().startsWith(term));
      if (!nameMatch && !categoriesMatch && !subcategoriesMatch) {
        return false;
      }
    }
    if (selectedCategories.length > 0) {
      const categoryMatch = factory.categories.some((cat) => selectedCategories.includes(cat));
      if (!categoryMatch) return false;
    }
    if (selectedSubcategories.length > 0) {
      const subcategoryMatch = factory.subcategories.some((subcat) => selectedSubcategories.includes(subcat));
      if (!subcategoryMatch) return false;
    }
    if (selectedCountries.length > 0) {
      if (!selectedCountries.includes(factory.country)) return false;
    }
    const price = parseFloat(factory.avgPPU.replace(/[^0-9.]/g, ''));
    if (avgPPUMin && price < avgPPUMin) return false;
    if (avgPPUMax && price > avgPPUMax) return false;
    return true;
  });

  const indexOfLastFactory = currentPage * itemsPerPage;
  const indexOfFirstFactory = indexOfLastFactory - itemsPerPage;
  const currentFactories = filteredFactories.slice(indexOfFirstFactory, indexOfLastFactory);
  const totalPages = Math.ceil(filteredFactories.length / itemsPerPage);

  // First, modify how we calculate min and max PPU
  const ppuValues = factoryData.map(factory => 
    parseFloat(factory.avgPPU.replace(/[^0-9.]/g, ''))
  );
  const minPPU = Math.floor(Math.min(...ppuValues));
  const maxPPU = Math.ceil(Math.max(...ppuValues));

  // --- STYLE DEFINITIONS ---
  const mainStyle = {
    background: `
      linear-gradient(180deg, 
        rgba(240, 253, 244, 0.8) 0%,
        rgba(240, 253, 244, 0.4) 200px,
        rgba(240, 253, 244, 0.2) 400px
      ),
      radial-gradient(circle at 20% 0%, #dcfce7 0%, transparent 25%),
      radial-gradient(circle at 80% 0%, #dcfce7 0%, transparent 25%),
      #f8faf8
    `,
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    padding: "2rem",
  };
  const titleStyle = {
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: "bold",
    color: "black",
    margin: "0 auto 1rem",
    maxWidth: "800px",
  };
  const coloredTitleStyle = {
    color: "#16a34a",
  };
  const subtitleStyle = {
    textAlign: "center",
    fontSize: "1.25rem",
    color: "black",
    margin: "0 auto 2rem",
    maxWidth: "800px",
  };

  // Search bar styles
  const searchContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3rem",
    maxWidth: "800px",
    margin: "0 auto",
  };
  const searchBoxStyle = {
    position: "relative",
    width: "100%",
    marginLeft: "0",
  };
  const inputStyle = {
    width: "100%",
    padding: "0.75rem 3rem 0.75rem 1.5rem",
    border: "1px solid #e5e7eb",
    borderRadius: "9999px",
    fontSize: "1rem",
    backgroundColor: "white",
  };
  const searchIconButtonStyle = {
    position: "absolute",
    right: "0.5rem",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
  };
  const searchIconStyle = {
    width: "1.5rem",
    height: "1.5rem",
    fill: "green",
  };
  const ppuContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    color: "#666",
    fontSize: "0.875rem",
    fontWeight: "600",
    padding: "0.5rem 1rem",
    borderTop: "1px solid #e5e7eb",
    backgroundColor: "white",
    position: "sticky",
    bottom: 0,
    marginTop: "auto",
  };

  const ppuPriceStyle = {
    color: "#16a34a",
    fontWeight: "500",
  };

  // --- GRID LAYOUT FOR CONTENT ---
  // Use a grid with two columns:
  // - Left: Filter panel (fixed width: 220px)
  // - Right: Factory tiles container
  const contentContainerStyle = {
    display: "flex",
    gap: "3rem",
    maxWidth: "1200px",
    margin: "0 auto",
    marginTop: "3rem",
  };

  // Left sidebar styles
  const filterPanelStyle = {
    width: "220px",
    flexShrink: 0,
    marginLeft: "-2rem",
  };

  const filterSectionStyle = {
    marginBottom: "1rem",
  };

  const filterHeaderStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "0.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  };

  // Right content area styles
  const mainContentStyle = {
    flex: 1,
  };

  const factoryCardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    overflow: "hidden",
    border: "1px solid #e5e7eb",
    height: "420px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  };

  // Fixed image container
  const cardImageContainerStyle = {
    padding: "0.75rem",
    backgroundColor: "white",
    width: "100%",
    aspectRatio: "16/9",
    flexShrink: 0,
    minHeight: "200px",
    maxHeight: "250px",
  };

  const cardImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "6px",
  };

  // Fixed title section
  const cardHeaderStyle = {
    padding: "0rem 1rem 1rem 1rem",
    borderBottom: "1px solid #e5e7eb",
    flexShrink: 0,
  };

  const cardTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  };

  // Scrollable content section
  const cardContentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    paddingTop: "0.75rem",
  };

  const cardScrollableContent = {
    padding: "0 1rem",
    overflowY: "auto",
    flex: 1,
    marginBottom: "0.5rem",
  };

  // Card content layout styles
  const cardCountryStyle = {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "0.25rem",
    fontWeight: "600",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  };

  const cardCategoriesStyle = {
    fontSize: "0.75rem",
    color: "#666",
    marginBottom: "0.25rem",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    lineHeight: "1.4",
  };

  const cardSubcategoriesStyle = {
    fontSize: "0.75rem",
    color: "#666",
    marginBottom: "0.75rem",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    lineHeight: "1.4",
  };

  //Factory tiles container
  const tilesContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  };

  // Checkbox label style
  const checkboxLabelStyle = {
    marginLeft: "0.75rem",
  };

  // Add a new style for the scrollable filter options container
  const filterOptionsContainerStyle = {
    maxHeight: "250px", // Shows about 10 items
    overflowY: "auto",
    paddingRight: "10px",
    marginBottom: "0.5rem",
  };

  // Add scrollbar styles for the filter sections
  const filterScrollbarStyles = `
    .filter-scroll::-webkit-scrollbar {
      width: 4px;
    }
    .filter-scroll::-webkit-scrollbar-thumb {
      background-color: #e5e7eb;
      border-radius: 4px;
    }
    .filter-scroll::-webkit-scrollbar-thumb:hover {
      background-color: #d1d5db;
    }
  `;

  // Add this to your style definitions
  const paginationContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
    gap: "0.5rem",
  };

  const pageButtonStyle = {
    padding: "0.5rem 1rem",
    border: "1px solid #e5e7eb",
    borderRadius: "0.375rem",
    backgroundColor: "white",
    cursor: "pointer",
    transition: "all 0.2s",
    color: "#374151",
  };

  const activePageButtonStyle = {
    ...pageButtonStyle,
    backgroundColor: "#16a34a",
    color: "white",
    borderColor: "#16a34a",
  };

  const pageButtonHoverStyle = {
    backgroundColor: "#f3f4f6",
  };

  // --- HANDLERS ---
  const handleInputChange = function (e) { setSearchTerm(e.target.value); };
  const handleSearchIconClick = function () {
    const inputElement = document.getElementById("searchInput");
    if (inputElement) inputElement.focus();
  };
  const handleAvgPPUMinChange = function (e) { setAvgPPUMin(e.target.value); };
  const handleAvgPPUMaxChange = function (e) { setAvgPPUMax(e.target.value); };
  const toggleShowCategory = function () { setShowCategory(!showCategory); };
  const toggleShowSubcategory = function () { setShowSubcategory(!showSubcategory); };
  const toggleShowCountry = function () { setShowCountry(!showCountry); };
  const toggleCategory = function (option) {
    if (selectedCategories.includes(option)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== option));
    } else {
      setSelectedCategories([...selectedCategories, option]);
    }
  };
  const toggleSubcategory = function (option) {
    if (selectedSubcategories.includes(option)) {
      setSelectedSubcategories(selectedSubcategories.filter((item) => item !== option));
    } else {
      setSelectedSubcategories([...selectedSubcategories, option]);
    }
  };
  const toggleCountry = function (option) {
    if (selectedCountries.includes(option)) {
      setSelectedCountries(selectedCountries.filter((item) => item !== option));
    } else {
      setSelectedCountries([...selectedCountries, option]);
    }
  };

  // --- CREATE THE SEARCH BAR ---
  const searchInput = React.createElement("input", {
    id: "searchInput",
    type: "text",
    placeholder: "Search for factories or categories (e.g., snacks, beverages, spices)",
    style: inputStyle,
    value: searchTerm,
    onChange: handleInputChange,
  });
  const searchIcon = React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      style: searchIconStyle,
      viewBox: "0 0 24 24",
      stroke: "green",
      fill: "green",
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d:
        "M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.35 4.35a7.5 7.5 0 0012.3 12.3z",
    })
  );
  const searchButton = React.createElement("button", { onClick: handleSearchIconClick, style: searchIconButtonStyle }, searchIcon);
  const searchBox = React.createElement("div", { style: searchBoxStyle }, searchInput, searchButton);
  const searchContainer = React.createElement("div", { style: searchContainerStyle }, searchBox);

  // --- CREATE THE FILTER PANEL ---
  const categoryArrow = React.createElement("span", { style: { color: "grey", marginLeft: "0.5rem" } }, showCategory ? "▼" : "►");
  const categoryHeader = React.createElement("div", { style: filterHeaderStyle, onClick: toggleShowCategory },
    React.createElement("span", null, "By Category"),
    categoryArrow
  );
  let categoryOptions = null;
  if (showCategory) {
    categoryOptions = React.createElement("div", 
      { 
        style: filterOptionsContainerStyle,
        className: "filter-scroll"
      },
      availableCategories.map(function (option) {
        return React.createElement("div", 
          { 
            style: { 
              marginBottom: "0.5rem", 
              display: "flex", 
              alignItems: "center" 
            } 
          },
          React.createElement("input", { 
            type: "checkbox", 
            id: option,
            checked: selectedCategories.includes(option),
            onChange: () => toggleCategory(option),
          }),
          React.createElement("label", { 
            htmlFor: option, 
            style: checkboxLabelStyle 
          }, option)
        );
      })
    );
  }
  const categorySection = React.createElement("div", { style: filterSectionStyle }, categoryHeader, categoryOptions);

  const subcategoryArrow = React.createElement("span", { style: { color: "grey", marginLeft: "0.5rem" } }, showSubcategory ? "▼" : "►");
  const subcategoryHeader = React.createElement("div", { style: filterHeaderStyle, onClick: toggleShowSubcategory },
    React.createElement("span", null, "By Subcategory"),
    subcategoryArrow
  );
  let subcategoryOptions = null;
  if (showSubcategory) {
    subcategoryOptions = React.createElement("div",
      {
        style: filterOptionsContainerStyle,
        className: "filter-scroll"
      },
      availableSubcategories.map(function (option) {
        return React.createElement("div",
          {
            style: {
              marginBottom: "0.5rem",
              display: "flex",
              alignItems: "center"
            }
          },
          React.createElement("input", {
            type: "checkbox",
            id: option,
            checked: selectedSubcategories.includes(option),
            onChange: () => toggleSubcategory(option),
          }),
          React.createElement("label", {
            htmlFor: option,
            style: checkboxLabelStyle
          }, option)
        );
      })
    );
  }
  const subcategorySection = React.createElement("div", { style: filterSectionStyle }, subcategoryHeader, subcategoryOptions);

  const countryArrow = React.createElement("span", { style: { color: "grey", marginLeft: "0.5rem" } }, showCountry ? "▼" : "►");
  const countryHeader = React.createElement("div", { style: filterHeaderStyle, onClick: toggleShowCountry },
    React.createElement("span", null, "By Country"),
    countryArrow
  );
  let countryOptions = null;
  if (showCountry) {
    countryOptions = React.createElement("div",
      {
        style: filterOptionsContainerStyle,
        className: "filter-scroll"
      },
      availableCountries.map(function (option) {
        return React.createElement("div",
          {
            style: {
              marginBottom: "0.5rem",
              display: "flex",
              alignItems: "center"
            }
          },
          React.createElement("input", {
            type: "checkbox",
            id: option,
            checked: selectedCountries.includes(option),
            onChange: () => toggleCountry(option),
          }),
          React.createElement("label", {
            htmlFor: option,
            style: checkboxLabelStyle
          }, option)
        );
      })
    );
  }
  const countrySection = React.createElement("div", { style: filterSectionStyle }, countryHeader, countryOptions);

  const avgPPUHeader = React.createElement("div", 
    { className: styles.filterHeader }, 
    "By Average PPU"
  );

  const avgPPUSection = React.createElement("div", 
    { className: styles.filterSection },
    React.createElement("div", { className: styles.filterHeader }, 
      "By Average PPU"
    ),
    React.createElement("div", 
      { className: styles.sliderContainer },
      // First slider (min value)
      React.createElement("input", {
        type: "range",
        min: minPPU,
        max: maxPPU,
        value: avgPPUMin || minPPU,
        step: "0.25",
        onChange: (e) => {
          const value = parseFloat(e.target.value);
          if (value <= (avgPPUMax || maxPPU)) {
            setAvgPPUMin(value);
            setCurrentPage(1);
          }
        },
        className: styles.slider
      }),
      // Second slider (max value)
      React.createElement("input", {
        type: "range",
        min: minPPU,
        max: maxPPU,
        value: avgPPUMax || maxPPU,
        step: "0.25",
        onChange: (e) => {
          const value = parseFloat(e.target.value);
          if (value >= (avgPPUMin || minPPU)) {
            setAvgPPUMax(value);
            setCurrentPage(1);
          }
        },
        className: styles.slider
      }),
      React.createElement("div", 
        { className: styles.sliderValues },
        React.createElement("span", null, `$${(avgPPUMin || minPPU).toFixed(2)}`),
        React.createElement("span", null, `$${(avgPPUMax || maxPPU).toFixed(2)}`)
      )
    )
  );

  const hrElement = React.createElement("hr", { style: { border: "none", borderBottom: "1px solid lightgrey", margin: "0.5rem 0" } });
  const filterPanelContent = React.createElement("div", null,
    categorySection, hrElement,
    subcategorySection, hrElement,
    countrySection, hrElement,
    avgPPUSection
  );
  const filterPanel = React.createElement("div", { style: filterPanelStyle }, filterPanelContent);

  // --- CREATE THE FACTORY TILES (each wrapped in a clickable Link) ---
  const tileElements = currentFactories.map(function (factory) {
    return React.createElement(Link, { 
      key: factory.id, 
      to: `/factory/${factory.id}`,
      style: { 
        textDecoration: "none", 
        color: "inherit",
        display: "block",
      }
    }, 
      React.createElement("div", { 
        style: factoryCardStyle,
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = "scale(1.02)";
          e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
        },
      },
        // Fixed image section
        React.createElement("div", { style: cardImageContainerStyle },
          React.createElement("img", {
            src: factory.image,
            alt: factory.name,
            style: cardImageStyle,
          })
        ),
        // Fixed title section
        React.createElement("div", { style: cardHeaderStyle },
          React.createElement("div", { style: cardTitleStyle }, factory.name)
        ),
        // Scrollable content section
        React.createElement("div", { style: cardContentStyle },
          React.createElement("div", { style: cardScrollableContent },
            React.createElement("div", { style: cardCountryStyle }, factory.country),
            React.createElement("div", { style: cardCategoriesStyle }, 
              React.createElement("strong", null, "Categories: "),
              factory.categories.join(", ")
            ),
            React.createElement("div", { style: cardSubcategoriesStyle }, 
              React.createElement("strong", null, "Subcategories: "),
              factory.subcategories.join(", ")
            )
          ),
          // PPU section outside the scrollable area
          React.createElement("div", { style: ppuContainerStyle },
            "Average PPU: ",
            React.createElement("span", { style: ppuPriceStyle }, factory.avgPPU)
          )
        )
      )
    );
  });
  const tilesContainer = React.createElement("div", { style: tilesContainerStyle }, tileElements);

  // --- ADD SCROLLBAR STYLES ---
  const scrollbarStyles = `
    .tile-info::-webkit-scrollbar {
      width: 6px;
    }
    .tile-info::-webkit-scrollbar-thumb {
      background-color: lightgrey;
      border-radius: 3px;
    }
  `;
  const scrollbarStyleTag = React.createElement("style", null, scrollbarStyles);

  // --- ADD CHAT BUTTON STYLES ---
  const chatButtonStyles = `
    .chat-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      border: 2px solid grey;
      border-radius: 9999px;
      background-color: white;
      color: grey;
      padding: 0.75rem 1.5rem;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s, border-color 0.3s;
      text-decoration: none;
      font-weight: bold;
    }
    .chat-button:hover {
      background-color: green;
      color: white;
      border-color: green;
    }
  `;
  const chatButtonStyleTag = React.createElement("style", null, chatButtonStyles);

  // --- CREATE THE CHAT BUTTON ---
  const chatButton = React.createElement(
    Link,
    { to: "https://harvest-ai-git-main-daivya-shahs-projects.vercel.app/", className: "chat-button" },
    "Chat with Harv"
  );

  // Create pagination controls component
  const createPaginationControls = () => {
    const pages = [];
    
    // Previous button
    pages.push(
      React.createElement("button", {
        key: "prev",
        onClick: () => setCurrentPage(prev => Math.max(prev - 1, 1)),
        disabled: currentPage === 1,
        style: {
          ...pageButtonStyle,
          opacity: currentPage === 1 ? 0.5 : 1,
        },
      }, "←")
    );

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        React.createElement("button", {
          key: i,
          onClick: () => setCurrentPage(i),
          style: currentPage === i ? activePageButtonStyle : pageButtonStyle,
          onMouseEnter: (e) => {
            if (currentPage !== i) {
              e.currentTarget.style.backgroundColor = pageButtonHoverStyle.backgroundColor;
            }
          },
          onMouseLeave: (e) => {
            if (currentPage !== i) {
              e.currentTarget.style.backgroundColor = "white";
            }
          },
        }, i)
      );
    }

    // Next button
    pages.push(
      React.createElement("button", {
        key: "next",
        onClick: () => setCurrentPage(prev => Math.min(prev + 1, totalPages)),
        disabled: currentPage === totalPages,
        style: {
          ...pageButtonStyle,
          opacity: currentPage === totalPages ? 0.5 : 1,
        },
      }, "→")
    );

    return React.createElement("div", { style: paginationContainerStyle }, pages);
  };

  // --- ASSEMBLE THE CONTENT CONTAINER ---
  const contentContainer = React.createElement("div", { style: contentContainerStyle },
    filterPanel,
    React.createElement("div", { style: mainContentStyle },
      tilesContainer,
      createPaginationControls()
    )
  );

  // Add this CSS style to the scrollbarStyles string (or create a new style string)
  const checkboxStyles = `
    input[type="checkbox"] {
      accent-color: #16a34a;
    }
  `;

  return React.createElement(
    "main",
    { style: mainStyle },
    scrollbarStyleTag,
    chatButtonStyleTag,
    React.createElement("style", null, checkboxStyles),
    React.createElement("style", null, filterScrollbarStyles),
    React.createElement("h1", { style: titleStyle }, 
      "Explore Our ",
      React.createElement("span", { style: coloredTitleStyle }, "Trusted Factories")
    ),
    React.createElement("h2", { style: subtitleStyle }, "Browse through hundreds of manufacturers and find the perfect partner for your brand."),
    searchContainer,
    contentContainer,
    chatButton
  );
}

export default Factories;