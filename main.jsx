// @flow
import Bars from './app/components/Bars';
import style from './app/components/style.css';



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

  // style.use();
