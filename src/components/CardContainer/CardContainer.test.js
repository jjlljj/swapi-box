/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  
  it('should exist', () => {
    const renderedComponent = shallow(<CardContainer />);

    expect(renderedComponent).toBeDefined();
  })

})

