import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick, hasTrunfo } = this.props;
    return (
      <section>
        <form action="">
          <label htmlFor="name">
            Nome
            <input
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              data-testid="name-input"
              placeholder="Insira seu nome aqui"
              id="name"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="atribute1">
            Atributo 1
            <input
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              id="atribute1"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="atribute2">
            Atributo 2
            <input
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              id="atribute2"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="atribute3">
            Atributo 3
            <input
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              id="atribute3"
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              id="image"
              type="text"
              data-testid="image-input"
            />
          </label>
          <label htmlFor="rare">
            Raridade
            <select
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              id="rare"
              data-testid="rare-input"
            >
              <option>
                normal
              </option>
              <option>
                raro
              </option>
              <option>
                muito raro
              </option>
            </select>
          </label>
          { hasTrunfo === true ? (<p>Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <label htmlFor="supercard">
              <input
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                id="supercard"
                type="checkbox"
                data-testid="trunfo-input"
              />
            </label>
          )}
          <button
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            type="submit"
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};
