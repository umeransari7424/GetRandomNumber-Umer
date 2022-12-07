import React, { useState } from "react";
import card from "../layouts/Data.json";

const Shuffle = () => {
  const [data, setData] = useState("");
  const[imag,setImag] = useState("");
  const[id,setId] = useState("");
  // const arr1 = [1, 2, 3, 4, 5, 6];

  const myFunction = () => {
    const random_data = card[Math.floor(Math.random() * card.length)];
    // console.log(random_data.title);
    setImag(random_data.img);
    setId(random_data.id)
    setData(random_data.title);
  };

  return (
    <div className="shuffle">
      <div className="container text-center">
        <div className="row  mt-5">
          {card.map((items) => (
            <div className="col-md-2">
              {" "}
              <div className="card px-2 py-3">
                {" "}
                <img src={items.img} className="card-img-top img-fluid" alt="..." width={20}/>{" "}
                <div className="card-body">
                  {" "}
                  <h5 className="card-title">Card {items.id}</h5>{" "}
                  {/* <p className="card-text">{items.text}</p>{" "} */}
                </div>{" "}
              </div>{" "}
            </div>
          ))}

          
        </div>

        <div className=" py-5">
          <button className="btn btn-primary" onClick={myFunction}>
            {" "}
            Click Me
          </button>
        </div>
        <div className="row text-center random-card py-5">
          <div className="col-md-4"></div>
        <div className="col-md-4">
              {" "}
              <div className="card px-2 py-3" style={{}}>
                {" "}
                <div className="random-img">

                <img src={imag} className="text-center  img-fluid" style={{width:"200px"}} />{" "}
                </div>
                <div className="card-body">
                  {" "}
                  <h1>{data}</h1>
                  <h5 className="card-title">Card {id}</h5>{" "}
                  {/* <p className="card-text">{items.text}</p>{" "} */}
                </div>{" "}
              </div>{" "}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Shuffle;
