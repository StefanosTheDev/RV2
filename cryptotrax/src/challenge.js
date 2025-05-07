import { useState } from 'react';
import './App.css';

const sampleCryptoData = [
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    price_usd: 64890.25,
    market_cap_usd: 1275000000000,
    change_24h: 1.25,
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  },
  {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    price_usd: 3410.15,
    market_cap_usd: 410000000000,
    change_24h: -0.67,
    image:
      'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
  },
  {
    id: 'solana',
    symbol: 'SOL',
    name: 'Solana',
    price_usd: 165.22,
    market_cap_usd: 72000000000,
    change_24h: 2.89,
    image:
      'https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422',
  },
  {
    id: 'ripple',
    symbol: 'XRP',
    name: 'Ripple',
    price_usd: 0.62,
    market_cap_usd: 33000000000,
    change_24h: 0.95,
    image:
      'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731',
  },
  {
    id: 'dogecoin',
    symbol: 'DOGE',
    name: 'Dogecoin',
    price_usd: 0.148,
    market_cap_usd: 21000000000,
    change_24h: -1.14,
    image:
      'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256',
  },
];

export default function App() {
  const [coins, setCoins] = useState(sampleCryptoData);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState('');

  function handleViewDetail(coin) {
    setSelectedCoin(coin);
  }

  function handleOnClose() {
    setSelectedCoin(null);
  }
  return (
    <div className="app">
      <CryptoCard>
        <NavBar>
          <Search query={query} setQuery={setQuery} />
        </NavBar>
        <CardList coins={coins} onViewDetail={handleViewDetail} />

        {/* Show Details IF SELECTED COIN TRUE */}
        {selectedCoin && (
          <CoinDetailsPanel coin={selectedCoin} onClose={handleOnClose} />
        )}
      </CryptoCard>
    </div>
  );
}

function CryptoCard({ children }) {
  return <div className="crypto-card">{children}</div>;
}
function CardList({ coins, onViewDetail }) {
  // Loop Through.
  return (
    <div className="card-list">
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            <img src={coin.image} alt={coin.name} width={50} />
            <p>Market Cap: ${coin.market_cap_usd}</p>
            <p>24h Change: {coin.change_24h}%</p>

            {/* RE USUABLE BUTTON  */}

            <Button
              label="View Details"
              color="blue"
              onClick={() => onViewDetail(coin)}
            />
            {/* END OF REUSABLE BUTTON */}
          </li>
        ))}
      </ul>
    </div>
  );
}
function CoinDetailsPanel({ coin, onClose }) {
  return (
    <div className="details-p[anel">
      <h2>
        {coin.name} ({coin.symbol})
      </h2>
      <Button label="close" color="red" onClick={onClose} />
    </div>
  );
}

function Button({ color, label, onClick }) {
  return (
    <button
      className={`padding-2 shadow-none hover:shadow background-light-${color} hover:background-dark-${color}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search For Coin"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    ></input>
  );
}
function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}
