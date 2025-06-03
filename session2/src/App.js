import FruitList from "./components/FruitList";
import Greeting from "./components/Greeting";

function App() {
  const students = [
    {
      id: 1,
      name: "Elena",
      grade: "A",
      img: "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    },
    {
      id: 2,
      name: "Ali",
      grade: "B",
      img: "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    },
    {
      id: 3,
      name: "Sara",
      grade: "A+",
      img: "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    },
  ];

  //loop through the list and show each name and each grade in th ul
  //you can use student id as the key !
  return (
    <div>
      {/* <div>
        <FruitList fruits={["Apple", "Banana", "Cherry"]} />
      </div>
      <div>
        <h1>Student List</h1>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} - Grade : {student.grade}
              <img src={student.img}></img>
            </li>
          ))}
        </ul>
      </div> */}
      <Greeting isLoggedIn={true} hasUnread={true} />
    </div>
  );
}

export default App;
