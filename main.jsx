// @flow
import Bars from './app/components/Bars';

const bars = [
  {
    key: 1,
    title: 'Bar One',
    className: 'inactive',
    filled: 0
  },
  {
    key: 2,
    title: 'Bar Two',
    className: 'inactive',
    filled: 0
  },
  {
    key: 3,
    title: 'Bar Three',
    className: 'inactive',
    filled: 0
  }
];

ReactDOM.render(
  <Bars title="React Progress Bar" initalBars={bars} />,
  document.getElementById('app'));
