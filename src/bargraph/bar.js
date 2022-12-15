export default function Bar(props) {
  let color = props.color;
  let height = parseInt(props.height)*3  + 1;
  console.log(window.innerHeight)
  let style_obj = {
    transition: "0.7s",
    width: "150px",
    backgroundColor: color,
    height: height,
    position : "fixed",
    bottom : "22rem"
  };
  return (
      <div style={{ display: "inline-block",width : "22rem",position : "relative"}}>
        <div style={style_obj}>
        </div>
        <div style={{width : "150px",position : "fixed",bottom : "19rem"}}>
            <p>{props.name}</p>
        </div>
      </div>
  );
}
