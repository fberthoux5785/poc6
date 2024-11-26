const Seat = ({ number, available, selected, onClick }) => (
  <button
    style={{
      backgroundColor: selected
        ? "orange"
        : available
        ? "white"
        : "darkgray",
      cursor: available ? "pointer" : "not-allowed",
      margin: "5px",
      width: "30px",
      height: "30px",
      border: "1px solid black",
    }}
    disabled={!available}
    onClick={onClick}
  >
    {number}
  </button>
);
export default Seat;
