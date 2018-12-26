import React, { Component } from "react";
import "./App.css";
import Web3 from 'web3';
import GameEngine from './GameEngine';
import ERC721MintableBurnableImpl from './ERC721MintableBurnableImpl';

let currentTokenId = 1
async function createAndApproveToken(token, tokenId, gameContractAddress, beneficiaryAddress, approversAddress) {
  console.log("token", token)
  await token.methods.mint(beneficiaryAddress, tokenId).send( {from: approversAddress,
    inputs: beneficiaryAddress, tokenId});
  // await token.methods.approve(gameContractAddress, tokenId, {from: beneficiaryAddress});
}


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
  
  getERC721MintableBurnableImplToken = async () => {
    const amount = 1
    const otherAccount = '0x2f4cE4f714C68A3fC871d1f543FFC24b9b3c2386'
    await ERC721MintableBurnableImpl.methods.mint(this.state.accounts[0], 1 ).send({
      from : this.state.accounts[0],
      inputs : [this.state.accounts[0], amount]
    })
  }


  // playGame = async event => {
  //   await GameEngine.methods.play("0xace8248a9198cc0cb0fd30d9e50e2256e3ceb577", 100).send({
  //     from: this.state.accounts[0],
  //     inputs: ["0xace8248a9198cc0cb0fd30d9e50e2256e3ceb577", 100]
  //   }).then((result)=>(console.log(result)));
  //   console.log("done")
  // }


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
        {this.state.hasMetaMask && <h1>Has Meta Mask 👉 click to get accounts
          <button onClick={this.requestMetaMaskInfo} >Click</button>
        </h1>}
        {this.state.hasMetaMask && this.state.accounts &&<h1>Click to get a mintable &amp burnable token to play with <button onClick={this.getERC721MintableBurnableImplToken}>GET ERC721</button></h1>}
        {this.state.accounts && <h2>{this.state.accounts}</h2>}
        {this.state.isEmptyAccounstArray && <p>You might need to login to MetaMask and try again</p>}
      </div>
    );
  }
}

export default App;
