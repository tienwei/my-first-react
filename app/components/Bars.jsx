
import Bar from './Bar';

const {Component} = React;

class Bars extends Component {
  constructor(props) {
    super(props);
    this.state = {theBar: '', theStep: 10, progresses: [0, 0, 0]};
    this.fillBar = this.fillBar.bind(this);
    this.unfillBar = this.unfillBar.bind(this);
    this.selectBar = this.selectBar.bind(this);
    this.selectStep = this.selectStep.bind(this);
  }

  fillBar() {
    let theStep = parseInt(this.state.theStep);
    let newProgresses = this.state.progresses.map((p, i) => {
      return (parseInt(this.state.theBar) === i) ? p + theStep : p;
    });

    this.setState({progresses: newProgresses});
  }

  unfillBar() {
    let theStep = parseInt(this.state.theStep);
    let newProgresses = this.state.progresses.map((p, i) => {
      return (parseInt(this.state.theBar) === i) ? ((p - theStep) > 0 ? p - theStep : 0) : p;
    });

    this.setState({progresses: newProgresses});
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

        {this.props.initalBars.map((bar, i) => {
          let color = (this.state.progresses[i] > 100) ? 'red' : 'blue';
          return <Bar title = {bar.title} bgColor = {color} key = {i}
            progress = {this.state.progresses[i]}></Bar>
        })}

        <strong>Controller:</strong>&nbsp;
        <select onChange={this.selectBar}>
          <option value='-1'>Select a bar:</option>
            {this.props.initalBars.map((bar, i) => {
              return <option value={i} key={i}>Bar {i + 1}</option>
            })}
        </select>&nbsp;
        <select onChange={this.selectStep}>
          <option value='0'>Select a step:</option>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>&nbsp;
        <button onClick={this.fillBar}>+</button>
        <button onClick={this.unfillBar}>-</button>
      </div>
    );
  }
}

export default Bars;
