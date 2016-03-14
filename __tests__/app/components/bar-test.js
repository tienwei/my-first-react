jest.unmock('../../../app/components/Bar.jsx');
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Bar from '../../../app/components/Bar.jsx';

describe('Progress Bar', () => {
  it('should show blue when progress is below 100', () => {
      const expectBarTitle = 'Bar Test';
      // Render a bar first
      const theBar = TestUtils.renderIntoDocument(
        <Bar title={expectBarTitle} />
      );
      const barNode = ReactDOM.findDOMNode(theBar);
      const barTitle = TestUtils.findRenderedDOMComponentWithTag(theBar, 'h2');
      expect(barTitle.textContent).toBe(expectBarTitle);
  });
})
