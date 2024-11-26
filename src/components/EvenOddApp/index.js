// Write your code here
import {Component} from 'react'
import './index.css'
class EvenOddApp extends Component {
  state = {count: 0}
  onIncreament = () => {
    const randomNumber = () => Math.floor(Math.random() * 100)
    this.setState(oldState => ({count: oldState.count + randomNumber()}))
  }
  render() {
    const {count} = this.state
    const value = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="cart-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {value}</p>
          <button type="button" onClick={this.onIncreament} className="btn-1">
            Increment
          </button>
          <p className="para-1">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
