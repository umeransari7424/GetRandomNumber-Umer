import React, { useState } from "react";

const Shuffle = () => {
  const [data, setData] = useState('');
  const arr1 = [1, 2, 3, 4, 5,6];
  
  const myFunction = () => {
    const random_data = arr1[Math.floor(Math.random() * arr1.length)];
    setData(random_data)
  };
  
  return (
    <div className="shuffle">
      <div className="container text-center py-5">
        <div className="row text-center">
            <div className="col-md-2">
            <div className="card text-center">
                <div>
                    <h1>Card</h1>
                    <h1>1</h1>
                </div>

            </div>
            </div>
            <div className="col-md-2">
            <div className="card text-center">
                <div>
                    <h1>Card</h1>
                    <h1>2</h1>
                </div>

            </div>
            </div><div className="col-md-2">
            <div className="card text-center">
                <div>
                    <h1>Card</h1>
                    <h1>3</h1>
                </div>

            </div>
            </div><div className="col-md-2">
            <div className="card text-center">
                <div>
                    <h1>Card</h1>
                    <h1>4</h1>
                </div>

            </div>
            </div><div className="col-md-2">
            <div className="card text-center">
                <div>
                    <h1>Card</h1>
                    <h1>5</h1>
                </div>

            </div>
            </div><div className="col-md-2">
            <div className="card text-center">
                <div>
                    <h1>Card</h1>
                    <h1>6</h1>
                </div>

            </div>
            </div>
        </div>
        
        <div className=" py-5">
          <button className="btn btn-primary" onClick={myFunction}>
            {" "}
            Click Me
          </button>
        </div>
        <div className="row text-center py-5">
        <div className="col-md-3 card-data">
        <div className="card m-4 p-2 text-center" style={{width:"200px",height:"150px"}}>
                <div >
                    <h1 >Card</h1>
                    <h1>{data}</h1>
                </div>

        </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Shuffle;
