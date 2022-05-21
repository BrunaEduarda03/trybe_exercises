import React, { Component } from 'react'
import './form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email : '',
    };
  }


  handleChange(event) {
    this.setState({ 
      email:event.target.value,
    })
   
  }

  render() {
    const { email } = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label htmlFor="name">
            Nome:
              <input id="name" name="name" type="text"/>
          </label>
          <label htmlFor='email'>
            Email: 
            <input id="email" type="email" name="name" value = { email }onChange={ this.handleChange }/>
          </label>
          <label htmlFor="age">
            Idade:
            <select id="age" name="age">
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="teen">Menor que 18</option>
            </select>
          </label>
          <label htmlFor="info">
            Informações:
            <textarea>
           
            </textarea>
            </label>
      </form>
      </div>
    );
  }
}

export default Form;