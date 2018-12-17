import React, { Component } from "react";
import "./App.css";
import Web3 from 'web3';




class App extends Component {
  state = {
    noMetatMask: true,
    hasMetaMask : false,
    accounts : "",
    web3 : ""
  };

  componentDidMount() {
    if (window.ethereum || window.web3) {
      this.setState({ noMetatMask: false, hasMetaMask : true, web3 : new Web3(window.web3.currentProvider)});
    }
  }

  requestMetaMaskInfo = async event => {
    console.log('value :', this.state.web3.eth.getAccounts())
    if(window.ethereum){
      const enable = await window.ethereum.enable().then(console.log);
      const accounts = await this.state.web3.eth.getAccounts();
      const isEmptyAccounstArray = (accounts == false)
      this.setState({ accounts, isEmptyAccounstArray });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Testing Login</h1>
        <p>Testing out metamask login across multiple situations</p>
        <ul style={{textAlign: "left", width: '444px', margin: 'auto'}}>
          <li>Without MetaMask installed - chrome ✅</li>
          <li>Without MetaMask installed - safari ✅</li>
          <li>Metamask 5.2.2 (with privacy mode) - chrome ✅</li>
          <li>Metamask 4.16.0 (without privacy mode) - chrome ✅</li>
        </ul>
        <p>If it does not perform as expected in any of the scenarios above let me know. I will also test on mist etc in the future.</p>
        {this.state.noMetatMask && <h1>Please Install MetaMask</h1>}
        {this.state.hasMetaMask && <h1>Has Meta Mask
          <button onClick={this.requestMetaMaskInfo} >Click</button>
        </h1>}
        {this.state.accounts && <h2>{this.state.accounts}</h2>}
        {this.state.isEmptyAccounstArray && <p>You might need to login to MetaMask and try again</p>}
      </div>
    );
  }
}

export default App;
