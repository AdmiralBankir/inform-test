import React from 'react';
import Table from '../src/components/Table/Table';
import './App.css';

export default props => {
    return(
      <div className="App">
        <Table
          caption="Pantone colors"
          url={URL} 
        />
      </div>
    );
};
