import React from 'react';

export default (props) => {
	return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to Pineapple JS</h2>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};
