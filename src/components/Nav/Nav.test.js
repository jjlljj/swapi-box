/* eslint-disable */

import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav', () => {

  it('should exist', () => {
    const renderedComponent = shallow(<Nav />);

    expect(renderedComponent).toBeDefined();
  })

})
