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
    let spanStyle = {
      width :`${Math.min(this.props.progress, 100)}%`,
      background : `${this.props.bgColor}`,
      height : '100%',
      display : 'inline-block'
    };

    return (
      <div>
        <h2>{this.props.title}</h2>
        <div style={divStyle}>
          <span style={spanStyle}></span>
          <span style={midSpanStyle}>{`Progress : ${this.props.progress}%`}</span>
        </div>

      </div>
    );
  }
}



App.propTypes = { initPercent : React.PropTypes.number };
App.defaultProps = { initPercent : 0 };

export default App;
