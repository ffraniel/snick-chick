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
    this.changeCurrent = this.changeCurrent.bind(this);
  }

  componentDidMount () {
    setTimeout(()=>{
      this.setState({
        loading: false
      })
    }, 650)
  }

  cycle (input) {
    if(input === 'left') {
      const newIndex = this.state.currentSelection.index - 1; 
      if ((this.state.currentSelection.index - 1) > -1) {
        this.setState({
          currentSelection: Chickens[newIndex]
        });
      }
    }
    else if (input === 'right') {
      const newIndex = this.state.currentSelection.index + 1; 
      if ((this.state.currentSelection.index + 1) <= this.state.Chickens.length -1) {
        this.setState({
          currentSelection: Chickens[newIndex]
        });
      }
    }
  }

  changeCurrent (selectionIndex) {
    this.setState({
      currentSelection: Chickens[selectionIndex]
    });
  }

  render() {
    if (this.state.loading) return <Loading />

    return (
      <div className="Snicket-App">
        <section className="header">
          <h1 className="Title">Snicket Chickens</h1>
          <h5 className="Sub-title">The many rare breed chickens of Addingham</h5>
        </section>
        <section className="cards-slider">
          <div className="cards-slider-wrapper" style={{
            'transform': `translateX(-${this.state.currentSelection.index * (100 / this.state.Chickens.length) }%)`
          }}>
            {this.state.Chickens.map((chicken)=>{
              if (chicken.breed === this.state.currentSelection.breed) {
                return (<Card chicken={chicken} highlighted={true} key={chicken.breed} changeCurrent={this.changeCurrent} />);    
              } else {
                return (<Card chicken={chicken} highlighted={false} key={chicken.breed} changeCurrent={this.changeCurrent} />);    
              };
            })}
          </div>
        </section>
        <section className="buttons">
          <button className="cycle-button" onClick={()=>{this.cycle('left')}}>L</button>
          <button className="cycle-button" onClick={()=>{this.cycle('right')}}>R</button>
        </section>
      </div>
    );
  }
}

export default App;
