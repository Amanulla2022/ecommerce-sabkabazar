import React from "react";
import PropTypes from "prop-types";
import fruit from "../assets/catogaries/fruits.png";
import baby from "../assets/catogaries/baby.png";
import bakery from "../assets/catogaries/bakery.png";
import beverage from "../assets/catogaries/beverages.png";
import beauty from "../assets/catogaries/beauty.png";

const ProductCategory = ({ image, title, description, link }) => {
  return (
    <article className="arcticle-products flex items-center">
      <div className="flex flex-col justify-between items-center">
        <img src={image} alt={title} />
        <div className="text-center">
          <p className="text-lg font-semibold">{title}</p>
          <p className="description">{description}</p>
          <button className="rounded-md text-center text-sm px-2 py-2 border cursor-pointer relative inline-block mb-4 mt-4 text-white bg-pink-500 border-white">
            Explore {link}
          </button>
        </div>
      </div>
    </article>
  );
};

ProductCategory.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const Products = () => {
  const categories = [
    {
      image: fruit,
      title: "Fruits & Vegetables",
      description: "A variety of fresh fruits and vegetables",
      link: "fruit-and-veg",
    },
    {
      image: beverage,
      title: "Beverages",
      description:
        "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more.",
      link: "beverages",
    },
    {
      image: baby,
      title: "Baby Care",
      description:
        "Shop online for Baby Products, Diapers, Skin Care Products, etc.",
      link: "baby",
    },
    {
      image: beauty,
      title: "Beauty and Hygiene",
      description:
        "Buy beauty and personal care products online in India at best prices.",
      link: "beauty-hygiene",
    },
    {
      image: bakery,
      title: "Bakery Cakes and Dairy",
      description:
        "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
      link: "bakery-cakes-dairy",
    },
  ];

  return (
    <section className="flex flex-wrap justify-evenly  ">
      {categories.map((category, index) => (
        <ProductCategory key={index} {...category} />
      ))}
    </section>
  );
};

export default Products;
