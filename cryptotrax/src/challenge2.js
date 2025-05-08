// Crypto PortFolio Tracker (With Resuable Layout & Composotition)

import { useState } from 'react';
import './challenge2.css';
/**
 * 
 * A mini dashboard where users can:
See a list of coins ✅
Click to view details ✅
Add coins to their "portfolio" 🆕
View total market value of selected coins 🆕
Use component composition for layout 🧠
Use props well across multiple levels
 */
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
  const [portoflio, setPortfolio] = useState([]);

  function onHandleView(coin) {
    console.log(coin);
  }
  function onEditView(coin) {
    console.log(coin);
  }

  return (
    <div className="app">
      <DashboardTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.name}</td>
              <td>${coin.price_usd.toLocaleString()}</td>
              <td>{coin.change_24h}%</td>
              <td>
                <Button label={'View'} onClick={() => onHandleView(coin)} />
                <Button label={'Edit'} onClick={() => onEditView(coin)} />
              </td>
            </tr>
          ))}
        </tbody>
      </DashboardTable>
    </div>
  );
}
function DashboardTable({ children }) {
  return (
    <table className="table table-striped table-bordered table-hover">
      {children}
    </table>
  );
}
function CoinList(coins) {}

function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}
