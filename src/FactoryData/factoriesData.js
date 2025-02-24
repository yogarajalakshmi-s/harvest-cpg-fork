// factoriesData.js

const placeholderImage1 = "https://via.placeholder.com/600x400?text=Factory+Image+1";
const placeholderImage2 = "https://via.placeholder.com/600x400?text=Factory+Image+2";
const placeholderImage3 = "https://via.placeholder.com/600x400?text=Factory+Image+3";
const placeholderImage4 = "https://via.placeholder.com/600x400?text=Factory+Image+4";

const factoriesData = [
  {
    id: "1",
    name: "Bind Chocolate",
    averageCostPerUnit: "$3.50",
    description: {
      // General description shown by default (viewIndex = -1)
      general:
        "Bind Chocolate, established in 1971, is a premium Turkish chocolatier that blends traditional craftsmanship with modern techniques. Inspired by European traditions, Bind offers a diverse range of high-quality chocolates made exclusively with cocoa butter.",
      // categoryDescriptions is now an array where each element represents one category.
      // Each category contains a categoryName and an array of subcategoryDescriptions.
      categoryDescriptions: [
        {
          categoryName: "Chocolates",
          subcategoryDescriptions: [
            {
              title: "Luxury Selection",
              content:
                "Bind’s Luxury Selection features handcrafted premium chocolates presented in elegant packaging, making them perfect for gifting. These chocolates include jewel-like pralines, heart-shaped collections, and decorative assortments.",
            },
            {
              title: "Truffles",
              content:
                "The Truffle Collection includes artisan-crafted milk, dark, and white chocolate truffles filled with rich ganache flavors like hazelnut, raspberry, and coffee.",
            },
            {
              title: "Chocolate Bars & Snacks",
              content:
                "A wide range of milk, dark, and filled chocolate bars infused with flavors such as pistachio, orange, chili, and gianduja. Chocolate-covered snacks like pretzels, marshmallows, and cornflakes add a delightful mix of textures.",
            },
          ],
        },
        {
          categoryName: "Sweets",
          subcategoryDescriptions: [
            {
              title: "Chocolate-Covered Biscuits",
              content:
                "Bind Chocolate offers crispy biscuits coated in rich milk or dark chocolate, creating a satisfying crunch with every bite. These treats provide the perfect balance of buttery biscuit texture and smooth chocolate, making them ideal for tea-time snacks or on-the-go indulgence.",
            },
            {
              title: "Chocolate-Coated Cornflakes",
              content:
                "A delightful fusion of crispy cornflakes and creamy chocolate, these bite-sized treats offer a unique mix of textures. Available in milk chocolate and cocoa powder-coated varieties, they cater to those who enjoy light yet indulgent snacking options.",
            },
            {
              title: "ChocoBomb Collection (Marshmallow Treats)",
              content:
                "Soft and fluffy marshmallows dipped in rich chocolate, available in milk and dark chocolate variations, with caramel or classic flavors. These treats are perfect for gifting or enjoying as a nostalgic snack. The ChocoBomb Collection is designed to appeal to both children and adults looking for a fun and flavorful chocolate-covered delight.",
            },
          ],
        },
      ],
    },
    images: [placeholderImage1, placeholderImage2, placeholderImage3, placeholderImage4],
  },
  // ...Add other factories here if needed, ensuring each one has the same structure.
];

export default factoriesData;