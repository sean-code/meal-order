import React from "react";
import "./Form.css";

function AdminForm() {
  return (
    <div className="upload-form-wrapper">
      <form onSubmit={handleSubmit} id="form" className="upload-form">
        <h2 className="title"> Meal Update Form </h2>
        <div className="input-field">
          <label>Meal name:</label>
          <input
            onChange={handleChange}
            value={menuDetails.name}
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="input-field">
          <label> Image:</label>
          <input
            onChange={handleChange}
            value={menuDetails.image}
            type="text"
            id="image"
            name="image"
          />
        </div>
        <div className="input-field">
          <label> Cuisine:</label>
          <textarea
            onChange={handleChange}
            value={menuDetails.cuisine}
            name="cuisine"
            id="cuisine"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div className="input-field">
          <label> Price:</label>
          <textarea
            onChange={handleChange}
            value={menuDetails.price}
            name="price"
            id="price"
            rows="4"
          ></textarea>
        </div>
        <div className="input-field">
          <label> Restraunt: </label>
          <br />
          <input
            onChange={handleChange}
            value={menuDetails.restraunt}
            type="text"
            id="restraunt"
            name="restraunt"
          />
          <br />
        </div>
        <div className="submit-wrapper">
          <input type="submit" id="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
