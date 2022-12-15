import { useState } from "react";
import Bar from "./bar";
export default function BarGraph() {
  const [height, setHeight] = useState({
    height_easy: "0",
    height_med: "0",
    height_hard: "0",
  });

  const [inp,setInp] = useState({
    easy : "",
    medium : "",
    hard : ""
  })

  const fun = () => {
    setHeight({
      height_easy : document.getElementById("easy").value,
      height_med  : document.getElementById("medium").value,
      height_hard : document.getElementById("hard").value
    });
  };

  const Inpufun = (e) => {
    let num = parseInt(e.target.value)
    if(num <= 100 || e.target.value === ""){
        setInp({...inp,[e.target.name] : e.target.value})
    }
  }

  return (
    <div className="container" style={{ paddingLeft: "15rem" }}>
      <div>
        <Bar color={"#90EE90"} height={height.height_easy} name={"Easy"} />
        <Bar color={"#FFD580"} height={height.height_med} name={"Medium"} />
        <Bar color={"#FF7276"} height={height.height_hard} name={"Hard"} />
      </div>

      <div style={{ position: "fixed", bottom: "10rem"}}>
        <div style={{ display: "inline-block", width: "300px" }}>
          <label htmlFor="easy">Easy</label>
          <input
            className="form-control"
            style={{
              width: "200px",
              display: "inline-block",
              marginLeft: "10px",
            }}
            id="easy"
            name="easy"
            type="number"
            min="0"
            max="100"
            value={inp.easy}
            onChange={(e) => Inpufun(e)}
          ></input>
        </div>
        <div style={{ display: "inline-block", width: "300px" }}>
          <label htmlFor="medium">Medium</label>
          <input
            className="form-control"
            style={{
              width: "200px",
              display: "inline-block",
              marginLeft: "10px",
            }}
            id="medium"
            name="medium"
            type="number"
            min="0"
            max="100"
            value={inp.medium}
            onChange={(e) => Inpufun(e)}
          ></input>
        </div>
        <div style={{ display: "inline-block", width: "300px" }}>
          <label htmlFor="hard">
            Hard
          </label>
          <input
            className="form-control"
            style={{
              width: "200px",
              display: "inline-block",
              marginLeft: "10px",
            }}
            id="hard"
            type="number"
            name="hard"
            min="0"
            max="100"
            value={inp.hard}
            onChange={(e) => Inpufun(e)}
          ></input>
        </div>
        <br />
        <button
          onClick={() => fun()}
          className="btn btn-primary"
          style={{ marginTop: "30px", marginLeft: "45%" }}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
