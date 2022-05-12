import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <section>
        <form action="">
          <label htmlFor="name">
            Nome
            <input
              type="text"
              data-testid="name-input"
              placeholder="Insira seu nome aqui"
              id="name"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea data-testid="description-input" />
          </label>
          <label htmlFor="atribute1">
            Atributo 1
            <input
              type="number"
              id="atribute1"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="atribute2">
            Atributo 2
            <input
              type="number"
              id="atribute2"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="atribute3">
            Atributo 3
            <input
              type="number"
              id="atribute3"
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              id="image"
              type="text"
              data-testid="image-input"
            />
          </label>
          <label htmlFor="rare">
            Raridade
            <select
              name="rare"
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
          <label htmlFor="supercard">
            <input
              id="supercard"
              type="checkbox"
              data-testid="trunfo-input"
            />
          </label>
          <button
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
