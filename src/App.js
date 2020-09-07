import React from 'react';
import Table from '../src/components/Table/Table';
import './App.css';

const URL = 'https://reqres.in/api/unknown?per_page=12';

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
