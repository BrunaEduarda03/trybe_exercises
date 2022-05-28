import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './form.css'

class PersonalInformation extends Component {
  render() {
    const { nameValue,emailValue, ageValue, handleChange } = this.props;
    return (
    <fieldset>
      <legend>Informações pessoais</legend>
      <label htmlFor="name">
        Nome:
        <input 
          id="name" 
          name="name" 
          type="text" 
          value={nameValue} 
          onChange={handleChange}
          />
      </label>   
      <label htmlFor='email'>
            Email: 
            <input 
            id="email" 
            name="email" 
            type="email" 
            value = { emailValue } 
            onChange={ handleChange }
            />
          </label>
          <label htmlFor="age">
            Idade:
            <select 
            id="age" 
            name="age"
            value={ageValue}
            onChange={handleChange}
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="teen">Menor que 18</option>
            </select>
          </label>
          </fieldset>
    )
  }
}

PersonalInformation.propTypes = {
  handleChange:PropTypes.func.isRequired,
  nameValue:PropTypes.string.isRequired,
  emailValue:PropTypes.string.isRequired,
  ageValue:PropTypes.string.isRequired,
}
export default PersonalInformation ;

