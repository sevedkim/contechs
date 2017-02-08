//app.js
import React from 'react';
import EntryForm from './entryForm.js';
import EntryList from './entryList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { entries: [] };
    this.postEntry = this.postEntry.bind(this);
  }
  postEntry(entry){
    this.setState({
      entries: this.state.entries.concat(entry)
    });
  }
  render(){
    return(
      <div>
        <h3> Contechs </h3>
          <EntryForm postEntry={this.postEntry} />
          <EntryList entries={this.state.entries} />
      </div>
    )
  }
}

export default App;
