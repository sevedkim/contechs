//App.js
import React from 'react';
import EntryForm from './EntryForm';
import EntryList from './EntryList';

class App extends React.Component {
  render(){
    return(
      <div>
        <h3> Contechs </h3>
          <EntryForm />
          <EntryList />
      </div>
    )
  }
}

export default App;
