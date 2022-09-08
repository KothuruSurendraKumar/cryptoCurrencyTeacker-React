// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptoData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      `https://apis.ccbp.in/crypto-currency-converter`,
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    console.log(updatedData)
    this.setState({cryptoData: updatedData, isLoading: false})
  }

  renderCryptoCurrencies = () => {
    const {cryptoData} = this.state

    return (
      <div className="crypto-container">
        <h1 className="header">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-img"
        />
        <ul className="table-container">
          <li className="table-header">
            <p className="crypto">Coin Type</p>
            <div className="list-elements">
              <p className="usd">USD</p>
              <p className="euro">EURO</p>
            </div>
          </li>
          {cryptoData.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} cryptoDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="container">
        {isLoading ? (
          <div className="loader" testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptoCurrencies()
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
