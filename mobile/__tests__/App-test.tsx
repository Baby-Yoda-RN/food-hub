/**
 * @format
 */

import 'react-native';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {testButton} from './Button';

// Note: test renderer must be required after react-native.
import renderer, {create} from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON;
  expect(tree).toMatchSnapshot();
});
