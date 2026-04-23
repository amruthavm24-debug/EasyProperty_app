import React from "react";
import image1 from '../assets/Image1.png'
import image2 from '../assets/Image2.png'
import image3 from '../assets/Image3.png'
import image4 from '../assets/Image4.png'
import Image5 from '../assets/Image5.png'
import "../stylesheet/Properties.css";
import { Link } from "react-router-dom";

function Properties() {
  const property = [
    { id: 1, name: "3 BHK Flat for Rent in Kanhangad", rent: "30000", image: image1 },
    { id: 2, name: "3 BHK House for Rent in Kochi", rent: "25000", image: image2 },
    { id: 3, name: "2 BHK Flat for Sale in Kannur", rent: "18000", image: image3 },
    { id: 4, name: "1 BHK Flat for sale in Vadakara", rent: "10000", image: image4 },
    { id: 5, name: "2 BHK Flat for Rent in Kollam", rent: "26000", image: Image5 }
  ];

  return (
    <div>
      <h2>Find your dream home easily.</h2>

      <div className="property-grid">
      {property.map((item) => (
        <Link to={`/property/${item.id}`} key={item.id} className="card-link">
          
          <div className="card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="rent">Rent - ₹{item.rent}</p>
          </div>

        </Link>
      ))}
    </div>
    </div>
  );
}

export default Properties;