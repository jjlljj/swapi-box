/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

const localStorage = {}

describe('App', () => {

  it('should exist', () => {
    const renderedComponent = shallow(<App />, {disableLifecycleMethods: true});

    expect(false).toEqual(true);
  });
  
});
