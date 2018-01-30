/* eslint-disable */

import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {

  it('should exist', () => {
    const renderedComponent = shallow(<Header />);

    expect(renderedComponent).toBeDefined();
  })

})
