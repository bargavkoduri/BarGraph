export default function Bar(props) {
  let color = props.color;
  let height = parseInt(props.height) * 4 + 2;
  let style_obj = {
    transition: "0.7s",
    width: "150px",
    backgroundColor: color,
    height: height,
    position : "fixed",
    bottom : "350px"
  };
  return (
      <div style={{ display: "inline-block",width : "300px",marginLeft : "50px",position : "relative" }}>
        <div style={style_obj}></div>
        <p style={{ position : "absolute", fontSize: "20px", fontWeight: "500",top : "-40px",left : '40px' }}>
          {props.name}
        </p>
      </div>
  );
}
