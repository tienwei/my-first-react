import React from 'react';
const {Component} = React;

const divStyle = {
  border : '1px solid black',
  height : '50px',
  position : 'relative'
};

const midSpanStyle = {
  position : 'absolute',
  top: '15px',
  left: '50%'
};

class App extends Component {
  constructor(props) {
    super(props);
    // this.fillBar = () => this.fillBar(); For some reason, this will invoke max stack calls
    this.state = {filled : this.props.initPercent};
  }

  render() {
    let bgColour = (this.state.filled > 100) ? 'red' : 'blue';
    let fillArea = (this.state.filled > 100) ? 100 : this.state.filled;
    let spanStyle = {
      width :`${fillArea}%`,
      background : `${bgColour}`,
      height : '100%',
      display : 'inline-block'
    };

    return (
      <div>
        <h2>{this.props.title}</h2>
        <div style={divStyle}>
          <span style={spanStyle}></span>
          <span style={midSpanStyle}>{`Progress : ${this.state.filled}%`}</span>
        </div>

      </div>
    );
  }
}



App.propTypes = { initPercent : React.PropTypes.number };
App.defaultProps = { initPercent : 0 };

export default App;
