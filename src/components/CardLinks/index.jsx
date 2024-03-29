import React from "react";
import Card from "../Card";
import {
    faInstagram,
    faEtsy,
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faEnvelope,
  } from "@fortawesome/free-solid-svg-icons";


const links = [
  {
    id: 1,
    class: "shadow p-3 mb-2 rounded matchgrey outline-light",
    variant: "outline-light",
    icon: faInstagram,
    name: "Instagram",
    webLink: "https://www.instagram.com/surpointclothing/",
  },
  {
    id: 3,
    class: "shadow p-3 mb-2 rounded matchgrey outline-light",
    variant: "outline-light",
    icon: faEtsy,
    name: "Etsy",
    webLink: "https://www.etsy.com/shop/surpointclothing",
  },
  {
    id: 2,
    class: "mailto shadow p-3 mb-2 rounded matchgrey outline-light",
    variant: "outline-light",
    icon: faEnvelope,
    name: "Email Us",
    webLink: "mailto:surpointclothing@gmail.com",
  },

  
];

function Links() {
  return (
    <div className="container">
      <div className="row g-4 mt-2 mx-1">
        {links.map((link) => (
          <Card
            key={link.id}
            class={link.class}
            variant={link.variant}
            icon={link.icon}
            name={link.name}
            webLink={link.webLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Links;
