// src/FactoryData/factoriesData.js

// Import images for factory 1
//import factory1Img1 from "../assets/factory1_img1.png";
//import factory1Img2 from "../assets/factory1_img2.png";
//import factory1Img3 from "../assets/factory1_img3.png";
//import factory1Img4 from "../assets/factory1_img4.png";

// Import images for factory 2
//import factory2Img1 from "../assets/factory2_img1.png";
//import factory2Img2 from "../assets/factory2_img2.png";
//import factory2Img3 from "../assets/factory2_img3.png";
//import factory2Img4 from "../assets/factory2_img4.png";

const placeholderImage1 = "https://via.placeholder.com/600x400?text=Factory+Image+1";
const placeholderImage2 = "https://via.placeholder.com/600x400?text=Factory+Image+2";
const placeholderImage3 = "https://via.placeholder.com/600x400?text=Factory+Image+3";
const placeholderImage4 = "https://via.placeholder.com/600x400?text=Factory+Image+4";

const factoriesData = [
  {
    id: "1",
    name: "Bind Chocolate",
    category: "Chocolates",
    subCategories: ["Chocolate Bars", "Truffles", "Luxury"],
    averageCostPerUnit: "$3.50",
    description: {
      luxury:
        "Bind’s Luxury Selection features handcrafted premium chocolates presented in elegant packaging, making them perfect for gifting. These chocolates include jewel-like pralines, heart-shaped chocolate collections, and decorative table-box assortments. Made with 100% cocoa butter, these chocolates offer a smooth texture and indulgent taste, designed for those who appreciate fine chocolate artistry.",
      truffles:
        "The Truffle Collection includes artisan-crafted milk, dark, and white chocolate truffles filled with rich ganache flavors like hazelnut, raspberry, and coffee. These truffles are carefully made using high-quality ingredients and traditional techniques, offering a velvety melt-in-your-mouth experience. Packaged in sophisticated boxes, they are ideal for both personal indulgence and luxury gifts.",
      bars:
        "A wide range of milk, dark, and filled chocolate bars infused with flavors such as pistachio, orange, chili, and gianduja. These bars balance classic chocolate taste with modern flavors, catering to all palates. Additionally, Bind offers chocolate-covered snacks, including pretzels, marshmallows, and cornflakes, creating a delightful mix of crunchy and creamy textures.",
      general:
        "Bind Chocolate, established in 1971, is a premium Turkish chocolatier that blends traditional craftsmanship with modern techniques. Inspired by European chocolate-making traditions from Germany, Switzerland, and Belgium, Bind offers a diverse range of high-quality chocolates made exclusively with cocoa butter—free from other vegetable fats. With a 14,000 m² state-of-the-art facility, Bind Chocolate ensures top-tier quality from raw material selection to final packaging. The brand is renowned for its boutique-style offerings and specialty chocolates, catering to both retail and wholesale markets. Whether indulging in a luxurious gift box or enjoying a simple chocolate bar, Bind delivers exceptional taste and quality across all its product lines.",
    },
    images: [placeholderImage1, placeholderImage2, placeholderImage3, placeholderImage4], // Used for the detail page slideshow
  },
  // You can add more factory objects here as needed...
];

export default factoriesData;