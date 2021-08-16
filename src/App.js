import React, { useState } from "react";
import "./styles.css";

var foodMenu = {
  "🍔": "Burger",
  "🌮": "Taco",
  "🎂": "Birthday Cake",
  "🍣": "Sushi",
  "🌭": "Hot Dog",
  "🍕": "Pizza",
  "🥞": "Pan cake",
  "🥪": "Sandwich",
  "🥗": "Salad",
  "🍝": "Spaghetti"
};

var foodWeKnow = Object.keys(foodMenu);

export default function App() {
  var [foodMeaning, setFoodMeaning] = useState("");

  function foodInputHandler(event) {
    var userInput = event.target.value;
    var meaning = foodMenu[userInput];

    if (meaning === undefined) {
      meaning = "oops ! We dont have this food emoji in our database";
    }
    setFoodMeaning(meaning);
  }

  function foodClickHandler(foodEmoji) {
    var meaning = foodMenu[foodEmoji];
    console.log(foodEmoji, meaning);
    setFoodMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        Name your Food
        <span role="img" aria-label="foodemoji">
          🍜
        </span>
      </h1>

      <input
        className="searchBar"
        placeholder="Search for a food emoji here"
        onChange={foodInputHandler}
      ></input>

      <div className="foodMeaning"> {foodMeaning} </div>
      {/* actual output set by react using useState() */}

      <h3>You can choose one from our database</h3>

      <div>
        {foodWeKnow.map(function (foodEmoji) {
          return (
            <span
              className="foodDatabase"
              key={foodEmoji}
              onClick={() => foodClickHandler(foodEmoji)}
            >
              {foodEmoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
