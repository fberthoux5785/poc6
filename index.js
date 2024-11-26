import { useState } from "react";
import Header from "../components/Header";
import SeatSelector from "../components/SeatSelector";
import PurchaseSummary from "../components/PurchaseSummary";

const movieData = {
  titulo: "A Forja",
  sinopse:
    "Um ano depois de encerrar o ensino médio, Isaías Wright é desafiado a descobrir seu propósito.",
  preco: 25.0,
  assentos: Array.from({ length: 60 }, (_, i) => ({
    numero: i + 1,
    disponivel: i % 10 !== 0, 
  })),
};

const Home = () => {
  const [seats, setSeats] = useState(
    movieData.assentos.map((seat) => ({ ...seat, selected: false }))
  );

  const handleSelect = (number) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.numero === number
          ? { ...seat, selected: !seat.selected }
          : seat
      )
    );
  };

  const selectedSeats = seats.filter((seat) => seat.selected).map((s) => s.numero);
  const total = selectedSeats.length * movieData.preco;

  const handlePurchase = () => {
    alert("Compra realizada com sucesso!");
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SeatSelector seats={seats} onSelect={handleSelect} />
        <PurchaseSummary
          movie={movieData}
          selectedSeats={selectedSeats}
          total={total}
          onPurchase={handlePurchase}
        />
      </div>
    </div>
  );
};

export default Home;
