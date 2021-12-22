import React from "react";
import { BsCompass, BsBinoculars, BsBook } from "react-icons/bs";

const products_url = "https://course-api.com/react-store-products";
const single_product_url =
  "https://course-api.com/react-store-single-product?id=";

const links = [
  {
    id: 1,
    to: "/",
    label: "Home",
  },
  {
    id: 2,
    to: "/about",
    label: "About",
  },
  {
    id: 3,
    to: "/products",
    label: "Products",
  },
];

const services = [
  {
    id: 1,
    title: "Mission",
    icon: <BsCompass />,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi explicabo sit molestiae aspernatur quisquam!",
  },
  {
    id: 2,
    title: "Goals",
    icon: <BsBinoculars />,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi explicabo sit molestiae aspernatur quisquam!",
  },
  {
    id: 3,
    title: "History",
    icon: <BsBook />,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi explicabo sit molestiae aspernatur quisquam!",
  },
];

export { links, services, products_url, single_product_url };
