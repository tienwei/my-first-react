import React from 'react';
import Bar from './Bar';

const {Component} = React;

const Bars = (props) =>
  <div>
    <h1>{props.title}</h1>
    <Bar title="Bar One"></Bar>
    <Bar title="Bar Two"></Bar>
    <Bar title="Bar Three"></Bar>

    <h2>Controller:</h2>
    <select>
      <option value='0'>Select a bar:</option>
      <option value='1'>Bar One</option>
      <option value='2'>Bar Two</option>
      <option value='3'>Bar Three</option>
    </select>
  </div>;

export default Bars;
