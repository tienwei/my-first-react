
import Bar from './Bar';

const {Component} = React;

class Bars extends Component {
  constructor(props) {
    super(props);
    this.state = {theBar: '', theStep: 10};
    this.fillBar = this.fillBar.bind(this);
    this.unfillBar = this.unfillBar.bind(this);
    this.selectBar = this.selectBar.bind(this);
    this.selectStep = this.selectStep.bind(this);
  }

  fillBar() {
    const theBar = this.refs[`${this.state.theBar}`];
    const theStep = this.state.theStep;
    let {filled} = theBar.state;
    let newPercent = filled += theStep;
      theBar.setState({filled: newPercent});
  }

  unfillBar() {
    const theBar = this.refs[`${this.state.theBar}`];
    const theStep = this.state.theStep;
    let {filled} = theBar.state;
    let newPercent = (filled > 0) ? filled -= theStep : filled;
      theBar.setState({filled: newPercent});
  }

  selectBar(e) {
    // Assign the bar
    this.setState({theBar: e.target.value});
  }

  selectStep(e) {
    // Assign the step
    this.setState({theStep: parseFloat(e.target.value)});
  }

  render() {

    return (
      <div>
        <h1>{this.props.title}</h1>

        {this.props.initalBars.map((bar) => {
          return <Bar title={bar.title} className={bar.className} key={bar.key} ref={'bar' + bar.key} ></Bar>
        })}

        <strong>Controller:</strong>&nbsp;
        <select onChange={this.selectBar}>
          <option value='0'>Select a bar:</option>
          <option value='bar1'>Bar One</option>
          <option value='bar2'>Bar Two</option>
          <option value='bar3'>Bar Three</option>
        </select>&nbsp;
        <select onChange={this.selectStep}>
          <option value='0'>Select a step:</option>
          <option value='2.5'>2.5</option>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='20'>20</option>
        </select>&nbsp;
        <button onClick={this.fillBar}>+</button>
        <button onClick={this.unfillBar}>-</button>
      </div>
    );
  }
}

export default Bars;
