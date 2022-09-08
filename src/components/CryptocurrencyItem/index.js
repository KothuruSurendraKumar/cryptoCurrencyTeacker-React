// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, currencyLogo, euroValue, usdValue} = cryptoDetails

  return (
    <li className="table-row">
      <div className="currency-name">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="currency-text">{currencyName}</p>
      </div>
      <div className="money-type">
        <p className="usd-text">{usdValue}</p>
        <p className="euro-text">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
