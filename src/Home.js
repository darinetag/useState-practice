

const Home = () => {

    const handleClick = (e) => {
        console.log('ABraCaDabra', e)
    }
    const handleClickAgain = (e) => {
        console.log ('swoosh', e.target)
    }

  return (
    <div className="home">
      <h2> Time Machine </h2>
      <button onClick={handleClick}> Press for magic</button>
      <button onClick={(e) => handleClickAgain(e)}>Magic</button>
    </div>
    
  );
}
 
export default Home;
// The onclick event executes a certain functionality when a button is clicked.
//  calls a function and performs an action when an element is clicked in an app.