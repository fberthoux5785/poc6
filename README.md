# POC6

Bem-vindo ao **Cinema A Forja**, um projeto desenvolvido para criar uma interface interativa de reserva de assentos para cinemas. O objetivo é oferecer uma experiência funcional, intuitiva e agradável, além de mostrar como implementar temas claro e escuro e responsividade para diferentes dispositivos.

Este projeto foi desenvolvido em **Next.js**, com uma estrutura modular e organizada para facilitar o aprendizado e a compreensão do código.

---

## ** O que você vai encontrar neste projeto?**
1. **Interface de reserva de assentos:**
   - Mostra os assentos disponíveis, selecionados e indisponíveis.
   - Permite selecionar e desmarcar assentos interativamente.
   - Calcula automaticamente o valor total com base nos assentos selecionados.
2. **Resumo da compra:**
   - Exibe informações sobre o filme, incluindo título, sinopse e preço por ingresso.
   - Mostra os assentos escolhidos e o total a pagar.
   - Inclui um botão para finalizar a compra, exibindo uma mensagem de confirmação.
3. **Temas claro e escuro:**
   - O usuário pode alternar entre modos com um botão intuitivo.
4. **Design responsivo:**
   - A interface se adapta bem a diferentes tamanhos de tela, como desktops e dispositivos móveis.

---

## ** Estrutura do Projeto**

```
cinema-seat-booking/
├── components/          # Componentes reutilizáveis
│   ├── Header.js         # Cabeçalho com botão para alternar tema
│   ├── Seat.js           # Representa cada assento individualmente
│   ├── SeatSelector.js   # Renderiza o layout de todos os assentos
│   ├── PurchaseSummary.js# Resumo do filme e cálculo do total
├── pages/
│   ├── index.js          # Página principal
├── styles/
│   ├── global.css        # Estilos globais e variáveis de tema
├── package.json          # Gerenciamento de dependências e scripts
└── README.md             # Documentação do projeto
```

---

## ** Explicando o Código**

### 1. **Página Inicial (`pages/index.js`)**
Este é o arquivo principal do projeto. Ele carrega os dados do filme, gerencia o estado dos assentos e integra os componentes:

```javascript
const movieData = {
  titulo: "A Forja",
  sinopse: "Isaías Wright enfrenta os desafios da vida ao tentar descobrir seu propósito.",
  preco: 25.0,
  assentos: Array.from({ length: 60 }, (_, i) => ({
    numero: i + 1,
    disponivel: i % 10 !== 0, // Apenas um exemplo: alguns assentos são indisponíveis
  })),
};
```

A página principal usa o estado para gerenciar os assentos:

```javascript
const [seats, setSeats] = useState(
  movieData.assentos.map((seat) => ({ ...seat, selected: false }))
);
```

O botão de alternância de temas altera as classes do elemento `<body>`:

```javascript
const toggleTheme = () => {
  setDarkMode(!darkMode);
  document.body.className = darkMode ? "light-theme" : "dark-theme";
};
```

### 2. **Componente de Assento (`components/Seat.js`)**
Este componente representa cada assento no layout. Ele ajusta o estilo dependendo se o assento está disponível, selecionado ou indisponível.

```javascript
const Seat = ({ number, available, selected, onClick }) => (
  <button
    style={{
      backgroundColor: selected
        ? "var(--primary)"
        : available
        ? "var(--foreground)"
        : "gray",
      cursor: available ? "pointer" : "not-allowed",
    }}
    onClick={onClick}
    disabled={!available}
  >
    {number}
  </button>
);
```

### 3. **Seleção de Assentos (`components/SeatSelector.js`)**
Este componente renderiza todos os assentos. Ele usa o componente `Seat` para criar um layout organizado:

```javascript
const SeatSelector = ({ seats, onSelect }) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "10px" }}>
    {seats.map((seat) => (
      <Seat
        key={seat.numero}
        number={seat.numero}
        available={seat.disponivel}
        selected={seat.selected}
        onClick={() => onSelect(seat.numero)}
      />
    ))}
  </div>
);
```

### 4. **Resumo da Compra (`components/PurchaseSummary.js`)**
Exibe as informações do filme e o total com base nos assentos selecionados:

```javascript
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
```

### 5. **CSS Global (`styles/global.css`)**
O CSS utiliza variáveis para definir os temas claro e escuro:

```css
body.light-theme {
  --background: #f0f0f0;
  --foreground: #1a1a24;
  --primary: #db3d2e;
}

body.dark-theme {
  --background: #1a1a24;
  --foreground: #f0f0f0;
  --primary: #cd4a3e;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  transition: all 0.3s ease-in-out;
}
```

---

## **Como Rodar o Projeto**


### Passo a Passo:
1. **Baixe ou clone o projeto:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd cinema-seat-booking
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

---

## **Como Usar o Projeto**

1. **Página Inicial:**
   - O sistema exibe todos os assentos do cinema.
   - Assentos cinzas estão indisponíveis, enquanto assentos brancos estão disponíveis para seleção.

2. **Selecionando Assentos:**
   - Clique em um assento disponível para selecioná-lo.
   - Assentos selecionados ficam destacados em laranja.

3. **Resumo da Compra:**
   - O total é atualizado automaticamente com base nos assentos escolhidos.
   - Clique em "Comprar" para finalizar e ver a mensagem de sucesso.

4. **Alternância de Temas:**
   - Use o botão no cabeçalho para alternar entre modo claro e escuro.

---

