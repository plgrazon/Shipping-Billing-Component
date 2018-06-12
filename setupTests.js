import React from 'react';
import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

import sinon from 'sinon';

// Set the default serializer for Jest to be from enzyme-to-json.
// This produces an easier to read (for humans) serialized format.
// expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

// React 16 Ezyme adapter
configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
global.React = React;
