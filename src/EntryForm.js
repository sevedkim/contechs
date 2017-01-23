//entryForm.js
import React from 'react';
import Entry from './entry';

class EntryForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { term: "", definition: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(){
    this.setState({
      term: this.refs.termField.value,
      definition: this.refs.definitionField.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const {postEntry} = this.props;
    postEntry({term: this.state.term, definition: this.state.definition});
    this.setState({ term: "", definition: ""})
  }
  render(){
    return(
      <form onSubmit={ this.handleSubmit }>
        <input
          ref="termField"
          type='text'
          placeholder='Term'
          value={ this.state.term }
          onChange={ this.handleChange } />
        <input
          ref="definitionField"
          type='text'
          placeholder='Definition'
          value={ this.state.definition }
          onChange={ this.handleChange } />
        <input
          type='submit'
          value='Submit' />
      </form>
    )
  }
}


export default EntryForm;
