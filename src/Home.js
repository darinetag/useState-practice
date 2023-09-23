
import { useState } from "react";
const Home = () => {
  // let name = 'Ella';
  const [name, setName] = useState ("Ella");
  const [age, setAge] = useState (23)

  const handleClick = () => {
    setName("Enchanted Ella");
    setAge(2000);
  }

  return (
    <div className="home">
      <h2 >Far Faraway Land</h2>
      <h3>{ name } is { age } years old</h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;
// useState is a hook; It returns an array with two values: 
// the current state and a function to update it. 
// The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.