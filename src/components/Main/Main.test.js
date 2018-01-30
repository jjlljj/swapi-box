/* eslint-disable */

import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main', () => {

  it('should exist', () => {
    const renderedComponent = shallow(<Main />);

    expect(renderedComponent).toBeDefined();
  })

})
