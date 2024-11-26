import { useState } from "react";
import Head from "next/head";

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

export default function Home() {
  const [seats, setSeats] = useState(
    movieData.assentos.map((seat) => ({ ...seat, selected: false }))
  );

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "light-theme" : "dark-theme";
  };

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
    <>
      <Head>
        <title>Cinema Seat Booking</title>
      </Head>
      <header style={{ padding: "1rem", textAlign: "center" }}>
        <h1>Cinema Seat Booking</h1>
        <button
          onClick={toggleTheme}
          style={{
            padding: "0.5rem 1rem",
            marginTop: "1rem",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </header>
      <main style={{ display: "flex", justifyContent: "space-around", padding: "1rem" }}>
        <SeatSelector seats={seats} onSelect={handleSelect} />
        <PurchaseSummary
          movie={movieData}
          selectedSeats={selectedSeats}
          total={total}
          onPurchase={handlePurchase}
        />
      </main>
    </>
  );
}
