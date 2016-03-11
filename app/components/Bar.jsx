import React from 'react';
const {Component} = React;

const divStyle = {
  border: '1px solid black',
  height: '50px'
};

class App extends Component {
  constructor(props) {
    super(props);
    // this.fillBar = () => this.fillBar(); For some reason, this will invoke max stack calls
    this.state = {filled: this.props.initPercent};
  }

  fillBar() {
    let newPercent = (this.state.filled < 100)?
      this.state.filled += 10:
      this.state.filled;
    this.setState({filled: newPercent});
  }

  unfillBar() {
    let newPercent = (this.state.filled > 0)?
      this.state.filled -= 10:
      this.state.filled;
    this.setState({filled: newPercent});
  }

  render() {
    let spanStyle = {
      width:`${this.state.filled}%`,
      background: 'red',
      height: '100%',
      display: 'inline-block'
    };

    return (
      <div>
        <h2>{this.props.title}</h2>
        <div style={divStyle}>
          <span style={spanStyle}></span>
        </div>
        <p>{`Progress: ${this.state.filled}%`}</p>
      </div>
    );
  }
}



App.propTypes = { initPercent: React.PropTypes.number };
App.defaultProps = { initPercent: 0 };

export default App;
