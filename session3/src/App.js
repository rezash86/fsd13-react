import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomAnimal() {
  //this one will give a random animal
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  const randomIndex = Math.floor(Math.random() * animals.length); //gives me between 0 to 6

  return animals[randomIndex];
}

function App() {
  const [animals, setAnimals] = useState([]);

  //you can have seperate components for each part
  // 1- the button can be a component
  // 2- the list of animals can also be a seperate animals
  //having a bunch of animals that are created randomly

  const handleClick = () => {
    //I have already one array and I want to have a new array that
    //has a new field and override the new array to the previous one
    var newArray = [...animals, getRandomAnimal()];
    setAnimals(newArray); //spread operator -> have the list and add one element
  };

  // const renderedAnimals = animals.map((anm) => {
  //   <AnimalShow type={anm}></AnimalShow>;
  // });

  const renderedAnimals = animals.map((anm, index) => (
    <AnimalShow type={anm} key={index}></AnimalShow>
  ));

  console.log(renderedAnimals);

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
