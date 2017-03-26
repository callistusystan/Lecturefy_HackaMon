import React from 'react';

export default (props) => {
	return (
    <div className="App">
      <div className="app-header card-3" id="header" style={{padding: '5px 30px'}}>
        <h1>Lecturefy</h1>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};
