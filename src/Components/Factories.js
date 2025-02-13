import React from "react";
import { Link } from "react-router-dom";

const imagesContext = require.context("../assets", false, /\.(png|jpe?g|svg)$/);
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
    const price = parseFloat(factory.avgPPU.replace("$", ""));
    if (avgPPUMin !== "" && !isNaN(parseFloat(avgPPUMin))) {
      if (price < parseFloat(avgPPUMin)) return false;
    }
    if (avgPPUMax !== "" && !isNaN(parseFloat(avgPPUMax))) {
      if (price > parseFloat(avgPPUMax)) return false;
    }
    return true;
  });

  // --- STYLE DEFINITIONS ---
  const mainStyle = {
    background: "linear-gradient(to bottom, #facc15, #ffffff)",
    minHeight: "100vh",
    paddingTop: "6rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  };
  const titleStyle = {
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: "bold",
    color: "black",
    margin: "0 auto 1rem",
    maxWidth: "800px",
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
    marginBottom: "2rem",
  };
  const searchBoxStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "500px",
  };
  const inputStyle = {
    width: "100%",
    padding: "0.75rem 3rem 0.75rem 1rem",
    border: "1px solid lightgray",
    borderRadius: "9999px",
    fontSize: "1rem",
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

  // Factory tile styles
  const tileStyle = {
    width: "250px",
    height: "350px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  };
  const tileImageStyle = {
    height: "50%",
    backgroundColor: "#e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.9rem",
    color: "#6b7280",
  };
  const tileInfoStyle = {
    height: "50%",
    padding: "0.5rem",
    paddingRight: "4px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflowY: "auto",
  };
  const tileNameStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0 0 0.5rem 0",
  };
  const tileCountryStyle = {
    fontSize: "1rem",
    color: "gray",
    margin: "0 0 0.25rem 0",
  };
  const tileCategoriesStyle = {
    fontSize: "1rem",
    color: "gray",
    margin: "0 0 0.25rem 0",
  };
  const tileSubcategoriesStyle = {
    fontSize: "1rem",
    color: "gray",
    margin: "0",
  };
  const infoPPUStyle = {
    marginTop: "0.5rem",
    display: "flex",
    alignItems: "center",
  };
  const ppuLabelStyle = {
    fontSize: "1rem",
    color: "black",
    marginRight: "0.5rem",
  };
  const ppuPriceStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "black",
  };

  // --- GRID LAYOUT FOR CONTENT ---
  // Use a grid with two columns:
  // - Left: Filter panel (fixed width: 220px)
  // - Right: Factory tiles container
  const contentContainerStyle = {
    display: "grid",
    gridTemplateColumns: "220px 1fr",
    columnGap: "2rem",
    width: "100%",
  };

  // Filter panel styles: remains in the left grid cell.
  const filterPanelStyle = {
    width: "220px",
  };

  // Tiles container: update to use a grid that displays exactly 3 factory entries per row.
  const tilesContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 250px)",
    gap: "1rem",
    justifyContent: "center",
    marginRight: "250px",
  };

  // Horizontal rule style between filter sections
  const hrStyle = {
    border: "none",
    borderBottom: "1px solid lightgrey",
    margin: "0.5rem 0",
  };

  // Dropdown header style with arrow placement
  const dropdownHeaderStyle = {
    cursor: "pointer",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const dropdownContentStyle = { paddingLeft: "0.5rem", marginBottom: "0.5rem" };
  const optionContainerStyle = { display: "flex", alignItems: "center", marginBottom: "0.5rem", cursor: "pointer" };
  const checkboxUnselectedStyle = { width: "16px", height: "16px", border: "1px solid gray", marginRight: "0.5rem" };
  const checkboxSelectedStyle = {
    width: "16px",
    height: "16px",
    backgroundColor: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "0.5rem",
    color: "white",
    fontSize: "12px",
  };
  const inputAvgStyle = {
    width: "80px",
    padding: "0.25rem",
    border: "1px solid lightgray",
    borderRadius: "4px",
    fontSize: "1rem",
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
    placeholder: "Search for factories or categories",
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
  const categoryHeader = React.createElement("div", { style: dropdownHeaderStyle, onClick: toggleShowCategory },
    React.createElement("span", null, "By Category"),
    categoryArrow
  );
  let categoryOptions = null;
  if (showCategory) {
    categoryOptions = availableCategories.map(function (option) {
      return React.createElement("div", { style: optionContainerStyle, onClick: function () { toggleCategory(option); } },
        React.createElement("div", { style: selectedCategories.includes(option) ? checkboxSelectedStyle : checkboxUnselectedStyle },
          selectedCategories.includes(option) ? "✓" : ""
        ),
        option
      );
    });
    categoryOptions = React.createElement("div", { style: dropdownContentStyle }, categoryOptions);
  }
  const categorySection = React.createElement("div", null, categoryHeader, categoryOptions);

  const subcategoryArrow = React.createElement("span", { style: { color: "grey", marginLeft: "0.5rem" } }, showSubcategory ? "▼" : "►");
  const subcategoryHeader = React.createElement("div", { style: dropdownHeaderStyle, onClick: toggleShowSubcategory },
    React.createElement("span", null, "By Subcategory"),
    subcategoryArrow
  );
  let subcategoryOptions = null;
  if (showSubcategory) {
    subcategoryOptions = availableSubcategories.map(function (option) {
      return React.createElement("div", { style: optionContainerStyle, onClick: function () { toggleSubcategory(option); } },
        React.createElement("div", { style: selectedSubcategories.includes(option) ? checkboxSelectedStyle : checkboxUnselectedStyle },
          selectedSubcategories.includes(option) ? "✓" : ""
        ),
        option
      );
    });
    subcategoryOptions = React.createElement("div", { style: dropdownContentStyle }, subcategoryOptions);
  }
  const subcategorySection = React.createElement("div", null, subcategoryHeader, subcategoryOptions);

  const countryArrow = React.createElement("span", { style: { color: "grey", marginLeft: "0.5rem" } }, showCountry ? "▼" : "►");
  const countryHeader = React.createElement("div", { style: dropdownHeaderStyle, onClick: toggleShowCountry },
    React.createElement("span", null, "By Country"),
    countryArrow
  );
  let countryOptions = null;
  if (showCountry) {
    countryOptions = availableCountries.map(function (option) {
      return React.createElement("div", { style: optionContainerStyle, onClick: function () { toggleCountry(option); } },
        React.createElement("div", { style: selectedCountries.includes(option) ? checkboxSelectedStyle : checkboxUnselectedStyle },
          selectedCountries.includes(option) ? "✓" : ""
        ),
        option
      );
    });
    countryOptions = React.createElement("div", { style: dropdownContentStyle }, countryOptions);
  }
  const countrySection = React.createElement("div", null, countryHeader, countryOptions);

  const avgPPUHeader = React.createElement("div", { style: { fontWeight: "bold", marginBottom: "0.5rem" } }, "By Average PPU");
  const avgPPUInputs = React.createElement("div", { style: { display: "flex", gap: "0.5rem" } },
    React.createElement("input", { type: "text", placeholder: "Min", value: avgPPUMin, onChange: handleAvgPPUMinChange, style: inputAvgStyle }),
    React.createElement("input", { type: "text", placeholder: "Max", value: avgPPUMax, onChange: handleAvgPPUMaxChange, style: inputAvgStyle })
  );
  const avgPPUSection = React.createElement("div", null, avgPPUHeader, avgPPUInputs);

  const hrElement = React.createElement("hr", { style: hrStyle });
  const filterPanelContent = React.createElement("div", null,
    categorySection, hrElement,
    subcategorySection, hrElement,
    countrySection, hrElement,
    avgPPUSection
  );
  const filterPanel = React.createElement("div", { style: filterPanelStyle }, filterPanelContent);

  // --- CREATE THE FACTORY TILES (each wrapped in a clickable Link) ---
  const tileElements = filteredFactories.map(function (factory) {
    const imagePlaceholder = React.createElement("img", {
        src: factory.image,
        alt: factory.name,
        style: tileImageStyle,
      });
    const factoryName = React.createElement("div", { style: tileNameStyle }, factory.name);
    const factoryCountry = React.createElement("div", { style: tileCountryStyle }, factory.country);
    const factoryCategories = React.createElement("div", { style: tileCategoriesStyle }, "Categories: " + factory.categories.join(", "));
    const factorySubcategories = React.createElement("div", { style: tileSubcategoriesStyle }, "Subcategories: " + factory.subcategories.join(", "));
    const avgPPULabel = React.createElement("span", { style: ppuLabelStyle }, "Average PPU:");
    const avgPPUPrice = React.createElement("span", { style: ppuPriceStyle }, " " + factory.avgPPU);
    const avgPPURow = React.createElement("div", { style: infoPPUStyle }, avgPPULabel, avgPPUPrice);
    const infoContainer = React.createElement("div", { style: tileInfoStyle, className: "tile-info" },
      factoryName,
      factoryCountry,
      factoryCategories,
      factorySubcategories,
      avgPPURow
    );
    const tileDiv = React.createElement("div", { style: tileStyle }, imagePlaceholder, infoContainer);
    return React.createElement(Link, { key: factory.id, to: `/factory/${factory.id}`, style: { textDecoration: "none", color: "inherit" } }, tileDiv);
  });
  const tilesContainer = React.createElement("div", { style: tilesContainerStyle }, tileElements);

  // --- ADD SCROLLBAR STYLES FOR THE TILE INFO ---
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

  // --- ASSEMBLE THE CONTENT CONTAINER ---
  const contentContainer = React.createElement("div", { style: contentContainerStyle },
    filterPanel,
    tilesContainer
  );

  return React.createElement(
    "main",
    { style: mainStyle },
    scrollbarStyleTag,
    chatButtonStyleTag,
    React.createElement("h1", { style: titleStyle }, "Explore Our Trusted Factories"),
    React.createElement("h2", { style: subtitleStyle }, "Browse through hundreds of manufacturers and find the perfect partner for your brand."),
    searchContainer,
    contentContainer,
    chatButton
  );
}

export default Factories;