import './App.css';
import { useState, useEffect } from 'react'
// import CardContainer  from './components/CardContainer';
import Card from './components/Card';
// import Form from './components/Form';

function App() {
    /*
      TODOS:
      1. create state for colorPairs and update on matching cards
    */

  
  let colorPairs = [
    {
      id: 1,
      left: "red",
      right: "rose"
    },
    {
      id: 2,
      left: "blue",
      right: "sky"
    },
    {
      id: 3,
      left: "green",
      right: "grass"
    }
  ]

  //for selected card on left
  const [colorCard, setColorCard] = useState(null)
  //for selected card on right
  const [stuffCard, setStuffCard] = useState(null);


    //runs when either colorCard or stuffCard gets updated
    useEffect(() => {
      if(colorCard === stuffCard){
        console.log('YOU WERE RIGHT')
        //remove from set
      } else {
        console.log('NO')
      }
    }, [colorCard, stuffCard])
  
  //function executes when we click on card
  const handleClick = function(id, someSetter){
    // console.log(`${colorCard} for color and ${stuffCard} for stuff`)
    //use some setter
    someSetter(id) //setColorCard(id), setStuffCard(id)
  }

  return (
    <div className="App">
      
      <div style={{display: "flex"}} className="cards-container">
        {/* Left cards */}
        <div className="card-section colors">
            {
              colorPairs.map((el) => 
                <Card handleClick={function(){handleClick(el.id, setColorCard)}} 
                word={el.left} 
                //el.left represents a color string...cuz its cute
                color={colorCard === el.id ? el.left : "black"}
                />
              )
            }
        </div>

        {/* Right cards */}
        <div className='card-section stuff'>
          {
            colorPairs.map((el) => 
              <Card 
              handleClick={function(){ handleClick(el.id, setStuffCard) }} 
              word={el.right} 
              color={stuffCard === el.id ? "red" : "black"}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
