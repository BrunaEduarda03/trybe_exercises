import React, { Component } from 'react'
import PersonalInformation from './personalFieldset';
import DataInformation from './DataFieldset';
import './form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email : '',
      age:'',
      estadoFavorito:'',
      presence:false,
    };
  }


  handleChange({target}) {
    const { name } = target
    const value = (target.type === 'checkbox') ? target.checked : target.value //para checkbox mudar o estado
    this.setState({ 
      [name]: value,  //(email,nome,...) === event.target.value
    });
   
  }

  render() {
    const { name,email, age, estadoFavorito,presence } = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
      
          <PersonalInformation 
          namevalue={name} 
          emailValue={email}
          ageValue={age}
          handleChange={this.handleChange} />
          <DataInformation 
           favoriteStateValue={estadoFavorito}
           handleChange={this.handleChange}
           />
         
         
          
          <label htmlFor="presente">
            Corcordo com os termos e acordos
            <input 
            id = "checkbox" 
            name='presence'
            type="checkbox"
            value={presence}
            onChange={this.handleChange}
            ></ input>
            </label>

      </form>
      </div>
    );
  }
}

export default Form;