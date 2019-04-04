import React, { Component } from 'react';
import './App.css';
import Chickens from './data/Chickens';
import Card from './Card';
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      loading: true,
      currentSelection: Chickens[0],
      Chickens
    };
    this.cycle = this.cycle.bind(this);
  }

  componentDidMount () {
    setTimeout(()=>{
      this.setState({
        loading: false
      })
    }, 250)
  }

  cycle (input) {
    if(input === 'left') {
      const newIndex = this.state.currentSelection.index - 1; 
      this.setState({
        currentSelection: Chickens[newIndex]
      });
    }
    else if (input === 'right') {
      const newIndex = this.state.currentSelection.index + 1; 
      this.setState({
        currentSelection: Chickens[newIndex]
      });
    }
    console.log("cycle, ", input)
  }

  render() {
    if (this.state.loading) return <Loading />

    return (
      <div className="Snicket-App">
        <section className="header">
          <h1 className="Title">Snicket Chickens</h1>
          <h5 className="Sub-title">The many rare breed chickens of addingham</h5>
        </section>
        <section className="cards-slider">
          <div className="cards-slider-wrapper">
            {this.state.Chickens.map((chicken)=>{
              if (chicken.breed === this.state.currentSelection.breed) {
                return (<Card chicken={chicken} highlighted={true} key={chicken.breed} />);    
              } else {
                return (<Card chicken={chicken} highlighted={false} key={chicken.breed} />);    
              };
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
