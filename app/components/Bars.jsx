import React from 'react';
import Bar from './Bar';

const {Component} = React;

const Bars = (props) =>
  <div>
    <h1 title="React Progress Bar"></h1>
    <Bar title="Bar One"></Bar>
    <Bar title="Bar Two"></Bar>
    <Bar title="Bar Three"></Bar>
  </div>;

export default Bars;
