import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: null,
    cardAttr2: null,
    cardAttr3: null,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };

  inputValidations = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const minAttributeValue = 0;
    const maxAttributeValue = 90;
    const totalAttributeValue = 210;
    const biggerThan = Number(cardAttr1) > maxAttributeValue
      || Number(cardAttr2) > maxAttributeValue
      || Number(cardAttr3) > maxAttributeValue;
    const lowerThan = Number(cardAttr1) < minAttributeValue
      || Number(cardAttr2) < minAttributeValue
      || Number(cardAttr3) < minAttributeValue;
    const sumOfAttributes = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10)
    > totalAttributeValue;
    console.log(sumOfAttributes);

    if (!cardName || !cardDescription || !cardImage || !cardRare) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (biggerThan || lowerThan) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (sumOfAttributes) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  handleChange = (event) => {
    const { value, name, checked } = event.target;
    this.setState({ [name]: name === 'cardTrunfo' ? checked : value },
      this.inputValidations); //
  };

  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
