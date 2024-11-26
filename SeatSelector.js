import Seat from "./Seat";

const SeatSelector = ({ seats, onSelect }) => (
  <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "300px" }}>
    {seats.map((seat) => (
      <Seat
        key={seat.number}
        number={seat.number}
        available={seat.disponivel}
        selected={seat.selected}
        onClick={() => onSelect(seat.number)}
      />
    ))}
  </div>
);

export default SeatSelector;
