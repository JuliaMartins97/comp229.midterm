import React, { useState } from "react";
import "./multiple.css";


export default function Multiple() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
    
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name},Description: ${formData.description}, Category: ${formData.category}, Quantity: ${formData.quantity}, Price: ${formData.price}`
    );
  }; 

  const handleCancel = () => {
    setFormData({
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
    });
  };
  

  return (
    <div className="Container">
    <form onSubmit={handleSubmit} className="multiple">
      <fieldset>
        <legend><h3>Question 1</h3></legend>
      <label className="multiple__text" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="multiple__input"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label className="multiple__text" htmlFor="description">
        Description:
      </label>
      <textarea
        type="text"
        id="description"
        className="multiple__textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="category">
      Category:
      </label>
      <textarea
        type="text"
        id="category"
        className="multiple__input" 
        name="category"
        value={formData.category}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="quantity">
        Quantity:
      </label>
      <input
        type="number" 
        id="quantity"
        className="multiple__input"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="price">
        Price:
      </label>
      <input
        type="text"
        id="price"
        className="multiple__input"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <button className="multiple__button" type="submit">
        Submit
      </button>

      <button className="multiple__button" type="button" onClick={handleCancel}>
        Cancel
      </button>
    </fieldset>
    </form>
    </div>
  );
  
}

