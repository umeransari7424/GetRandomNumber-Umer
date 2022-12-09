import React, { useState } from "react";
import card from "../layouts/Data.json";

const Shuffle = () => {
  const [showState,setShowState] = useState(false)
  const [data, setData] = useState("");
  const[imag,setImag] = useState("");
  const[id,setId] = useState("");
  const [reward,setReward] = useState(false);
  const [giftValue , setGiftValue] = useState(1);
  // const arr1 = [1, 2, 3, 4, 5, 6];

  const myFunction = () => {
    const random_data = card[Math.floor(Math.random() * card.length)];
    // console.log(random_data.title);
    setImag(random_data.img);
    setId(random_data.id)
    setData(random_data.title);
    setShowState(true)
  };
  const openBox =()=>{
    setReward(true)
    const set = {1:0.4,2:0.3,3:0.2,4:0.1};

// get probabilities sum:
var sum = 0;
for(let j in set){
    sum += set[j];
}


// choose random integers:
setGiftValue(pick_random());

function pick_random(){
    var pick = Math.random()*sum;
    for(let j in set){
        pick -= set[j];
        if(pick <= 0){
            return j;
        }
    }
}
  }

  const backToHome=()=>{
    setShowState(false)
    setReward(false)

  }

  return (
    <div className="shuffle">
      <div className="container text-center">
      {  reward ? (
          
          <div className="row text-center random-card py-5">
          <div className="col-md-4"></div>
        <div className="col-md-4">
              {" "}
              <div className="card px-2 py-3" >
                {" "}
                <div className="random-img">

                <img src={imag} className="text-center  img-fluid" style={{width:"200px"}} />{" "}
                </div>
                <div className="card-body">
                  {" "}
                  <h1>{data}</h1>   
                </div>{" "}
               
                
                <div>
            <h1>
            { giftValue == 1 ? "You Won Bronze" 
            : giftValue == 2 ? "You Won Silver" 
            : giftValue == 3 ? "You Won Gold" 
            : null }
          </h1>
          </div>
              </div>{" "} 
              <br />
              
          
          


          <div>
            <button className="btn btn-primary" onClick={backToHome}>
            {" "}
            Back to Home
          </button>
          </div>

            </div>
        </div>
        
       )  
      
      
      : showState ? (
          <div className="row text-center random-card py-5">
          <div className="col-md-4"></div>
        <div className="col-md-4">
              {" "}
              <div className="card px-2 py-3" >
                {" "}
                <div className="random-img">

                <img src={imag} className="text-center  img-fluid" style={{width:"200px"}} />{" "}
                </div>
                <div className="card-body">
                  {" "}
                  <h1>{data}</h1>
                  <h5 className="card-title">Box {id}</h5>{" "}
                  
                </div>{" "}
              </div>{" "} <br />
              <button className="btn btn-primary" onClick={openBox}>
            {" "}
            Open Box
          </button>
          
          

            </div>
        </div>
        )   : ( 
        <div className="row  mt-5">
          {card.map((items) => (
            <div className="col-md-2">
              {" "}
              <div className="card px-2 py-3">
                {" "}
                <img src={items.img} className="card-img-top img-fluid" alt="404 not found" width={20}/>{" "}
                <div className="card-body">
                  {" "}
                  <h5 className="card-title" >Box {items.id}</h5>{" "}
                  {/* <p className="card-text">{items.text}</p>{" "} */}
                </div>{" "}
              </div>{" "}
            </div>
          ))}
          <div className=" py-5">
          <button className="btn btn-primary" onClick={myFunction}>
            {" "}
            Select Box
          </button>
        </div>
        </div>) }

        

        
        
      </div>
    </div>
  );
};

export default Shuffle;
