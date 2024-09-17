import "./index.css";
const Light = (props) => {
  const { color, currentColor } = props;
  console.log(color);
  //console.log(currentColor);
  return (
    <div
      className="light"
      style={{
        backgroundColor: currentColor === color ? `${currentColor}` : `grey`,
      }}
    ></div>
  );
};
export default Light;
