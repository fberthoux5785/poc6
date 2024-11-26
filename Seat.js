const Seat = ({ number, available, selected, onClick }) => (
  <button
    style={{
      backgroundColor: selected
        ? "var(--primary-light)"
        : available
        ? "var(--text-light)"
        : "var(--unavailable-light)",
      color: selected || !available ? "var(--text-light)" : "var(--foreground-light)",
      cursor: available ? "pointer" : "not-allowed",
      margin: "5px",
      width: "30px",
      height: "30px",
      border: "1px solid var(--foreground-light)",
      borderRadius: "5px",
    }}
    disabled={!available}
    onClick={onClick}
  >
    {number}
  </button>
);

export default Seat;

