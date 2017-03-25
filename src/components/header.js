import React from 'react';

export default (props) => {
	return (
    <div className="App">
      <div className="app-header card-3">
        <h1>Pineapple.JS</h1>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};
