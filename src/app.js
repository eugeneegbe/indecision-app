import React from 'react';
import ReactDom from 'react-dom';

const template = React.createElement('p', {}, 'testing123');

ReactDom.render(template, document.getElementById('app'));