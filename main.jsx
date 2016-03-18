// @flow
import Bars from './app/components/Bars';

const bars = [
  {
    title: 'Bar One',
  },
  {
    title: 'Bar Two',
  },
  {
    title: 'Bar Three',
  }
];

ReactDOM.render(
  <Bars title="React Progress Bar" initalBars={bars} />,
  document.getElementById('app'));
