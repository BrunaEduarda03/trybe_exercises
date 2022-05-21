import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './form.css'

class DataInformation extends Component {
  render() {
    const {favoriteStateValue,handleChange} = this.props;
    return (
      <fieldset>
        <legend>Texto e arquivos</legend>
        <label htmlFor="estadoFavorito">
          Estado Favorito:
            <textarea 
            id="estadoFavorito" 
            name="estadoFavorito"
            value={favoriteStateValue}
            onChange={handleChange}
            > 
            </textarea>
            </label>
            <input type="file" />
            </fieldset>
    )
  }
}
DataInformation.propTypes = {
  favoriteStateValue:PropTypes.string.isRequired,
  presenceValue:PropTypes.string.isRequired,
  handleChange:PropTypes.func.isRequired,

}
export default DataInformation;
