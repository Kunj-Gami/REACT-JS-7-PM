import studentsData from "./data.jsx";
import Card from "./Card.jsx";

function App() {

  let std = studentsData.filter((i) => i.course === "Full Stack Development")
  return (
    <>
      {std.map((i) => {
        return <Card m={i.id} n={i.name} c={i.course} e={i.email} />;
      })}

     
    </>
  );
}

export default App;
