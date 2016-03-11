import React from 'react';
import Bar from './Bar';

const {Component} = React;

class Bars extends Component {
  constructor(props) {
    super(props);
    this.state = {theBar: ''};
    this.fillBar = this.fillBar.bind(this);
    this.unfillBar = this.unfillBar.bind(this);
    this.selectBar = this.selectBar.bind(this);
  }

  fillBar() {
    const theBar = this.refs[`${this.state.theBar}`];
    let {filled} = theBar.state;
    let newPercent = (filled < 100) ? filled += 10 : filled;
      theBar.setState({filled: newPercent});
  }

  unfillBar() {
    const theBar = this.refs[`${this.state.theBar}`];
    let {filled} = theBar.state;
    let newPercent = (filled > 10) ? filled -= 10 : filled;
      theBar.setState({filled: newPercent});
  }

  selectBar(e) {
    // Assign the bar
    this.setState({theBar: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Bar title="Bar One" ref="bar1"></Bar>
        <Bar title="Bar Two" ref="bar2"></Bar>
        <Bar title="Bar Three" ref="bar3"></Bar>

        <strong>Controller:</strong>&nbsp;
        <select onChange={this.selectBar}>
          <option value='0'>Select a bar:</option>
          <option value='bar1'>Bar One</option>
          <option value='bar2'>Bar Two</option>
          <option value='bar3'>Bar Three</option>
        </select>&nbsp;
        <button onClick={this.fillBar}>+</button>
        <button onClick={this.unfillBar}>-</button>
      </div>
    );
  }
}

export default Bars;
