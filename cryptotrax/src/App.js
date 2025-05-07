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
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [coins, setCoins] = useState(sampleCryptoData);
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectCoin(id) {
    setSelectedId(id);
  }

  return (
    <div className="App">
      <NavBar>
        <Search query={query} setQuery={setQuery} />
      </NavBar>

      {/* MAIN NOW */}
      <CryptoList coins={coins} onSelectCoin={handleSelectCoin} />

      {selectedId ? (
        <CoinDetails coins={coins} selectedId={selectedId} />
      ) : (
        <div>Nothing Selected</div>
      )}
    </div>
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
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
function Logo() {
  return (
    <div className="logo">
      <span role="img">🚀</span>
    </div>
  );
}
function CryptoList({ coins, onSelectCoin }) {
  return (
    <ul className="list">
      {coins?.map((coin) => (
        <Coin coin={coin} key={coin.id} onSelectCoin={onSelectCoin} />
      ))}
    </ul>
  );
}

function Coin({ coin, onSelectCoin }) {
  return (
    <li className="coin">
      <button onClick={() => onSelectCoin(coin.id)} className="coin-btn">
        <img src={coin.image} alt={coin.name} width={32} />
      </button>
      <p>
        <strong>{coin.name}</strong> ({coin.symbol}) – $
        {coin.price_usd.toLocaleString()}
      </p>
    </li>
  );
}
function CoinDetails({ selectedId, coins }) {
  const coin = coins.find((c) => c.id === selectedId);

  if (!coin) return <div>Coin not found</div>;

  return (
    <div className="details">
      <h2>
        {coin.name} ({coin.symbol})
      </h2>
      <img src={coin.image} alt={coin.name} width={50} />
      <p>Price: ${coin.pric_usd}</p>
      <p>Market Cap: ${coin.market_cap_usd}</p>
      <p>24h Change: {coin.change_24h}%</p>
    </div>
  );
}

function CoinsChosen({ selectedID }) {}
// Once You choose an ID This compoenent will then take that ID and render it.
function ChosenCrypto({ coin }) {}
function Main({ children }) {
  return <main className="main"> {children} </main>;
}
