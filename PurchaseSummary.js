const PurchaseSummary = ({ movie, selectedSeats, total, onPurchase }) => (
  <div>
    <h2>{movie.titulo}</h2>
    <p>{movie.sinopse}</p>
    <p>Preço por ingresso: R$ {movie.preco}</p>
    <p>Assentos selecionados: {selectedSeats.join(", ")}</p>
    <p>Total: R$ {total}</p>
    <button onClick={onPurchase}>Comprar</button>
  </div>
);

export default PurchaseSummary;
