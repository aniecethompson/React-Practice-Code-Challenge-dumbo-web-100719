import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './containers/Form';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    displayIndex: 0,
    plates: [],
    budget: 150
  }

  componentDidMount = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushisList => {
      this.setState({
        sushis: sushisList
      })
    })
  }

  showFourSushis = () => {

    return this.state.sushis.slice(this.state.displayIndex,this.state.displayIndex + 4)
   }

  moreSushi = () => {
    let newIndex = this.state.displayIndex + 4
    this.setState({
      displayIndex: newIndex
    })
  }

  removeSushi = (e)=> {
    console.log(e)
   
    if(this.state.budget === 0){
      return alert("Sorry, not enough funds!")
    } else {
      this.setState({
        budget: this.state.budget - e.price
      })
    }
    let newSushiList = this.state.sushis.filter((sushi)=> sushi.id !==e.id)
  
    this.setState(prevState => ({
      plates: [...prevState.plates, e.id],
      sushis: newSushiList
    }))
  }

  addMoney = (e) =>{
    e.preventDefault()
    let newBudget = this.state.budget + Number(e.target.budget.value)
    this.setState({
      budget: newBudget
    })
  }  
  
  render() {
    return (
      <div className="app">
        {this.showFourSushis}
        <SushiContainer 
        sushis={this.showFourSushis()}
        moreSushi={this.moreSushi}
        removeSushi={this.removeSushi}
        />
        <Table 
        plates={this.state.plates}
        budget={this.state.budget}
        />
        <Form addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;