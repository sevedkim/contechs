//entry.js
import React from 'react';
import EntryForm from './entryForm';

class Entry extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        { this.props.term } : { this.props.definition }
      </div>
    )
  }
}

export default Entry;
