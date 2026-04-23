import React from "react";
import { useParams } from "react-router-dom";

import image1 from '../assets/Image1.png'
import image2 from '../assets/Image2.png'
import image3 from '../assets/Image3.png'
import image4 from '../assets/Image4.png'
import image5 from '../assets/Image5.png'
import "../stylesheet/DetailsPage.css";

function Detailpage() {
  const { id } = useParams();

  const products = [
    { id: 1, name: "3 BHK Flat for Rent in Kanhangad", rent: "30000", image: image1, desc: "Spacious flat with balcony" },
    { id: 2, name: "3 BHK House for Rent in Kochi", rent: "25000", image: image2, desc: "Near city center" },
    { id: 3, name: "2 BHK Flat for Sale in Kannur", rent: "18000", image: image3, desc: "Affordable home" },
    { id: 4, name: "1 BHK Flat for sale in Vadakara", rent: "10000", image: image4, desc: "Best for bachelors" },
    { id: 5, name: "2 BHK Flat for Rent in Kollam", rent: "26000", image: image5, desc: "Spacious flat with one balcony" }
  ];

  const property = products.find((item) => item.id === parseInt(id));

  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div className="detail-container">
      <img src={property.image} alt={property.name} />

      <div className="detail-info">
        <h2>{property.name}</h2>
        <p className="rent">₹{property.rent}</p>
        <p>{property.desc}</p>

        <button className="btn">Contact Owner</button>
      </div>
    </div>
  );
}

export default Detailpage;