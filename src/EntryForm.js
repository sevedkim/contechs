//EntryForm.js
import React from 'react';

class EntryForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { term: '', definition: ''};
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTermChange(e){
    this.setState({ term: e.target.value });
  }
  handleDefinitionChange(e){
    this.setState({ definition: e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(`${this.state.term} : "${this.state.definition}"`)
    this.setState({ term: ''})
    this.setState({ definition: ''})
  }
  render(){
    return(
      <form onSubmit={ this.handleSubmit }>
        <input
          type='text'
          placeholder='Term'
          value={ this.state.term }
          onChange={ this.handleTermChange } />
        <input
          type='text'
          placeholder='Definition'
          value={ this.state.definition }
          onChange={ this.handleDefinitionChange } />
        <input
          type='submit'
          value='Submit' />
      </form>
    )
  }
}

export default EntryForm;
