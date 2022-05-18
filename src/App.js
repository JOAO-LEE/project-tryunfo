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
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardSave: [],
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

  initialState = () => {
    this.setState((previousState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      cardSave: [...previousState.cardSave, previousState],
    }));
  };

  resetState = (pare) => {
    pare.preventDefault();
    this.setState(this.initialState());
    this.isTrunfo();
  };

  isTrunfo = () => {
    const { cardTrunfo } = this.state;
    switch (cardTrunfo) {
    case true:
      this.setState({ hasTrunfo: true });
      break;
    default:
      this.setState({ hasTrunfo: false });
    }
  };

  handleChange = (event) => {
    const { value, name, checked } = event.target;
    this.setState({ [name]: name === 'cardTrunfo' ? checked : value },
      this.inputValidations);
  };

  render() {
    const {
      isSaveButtonDisabled,
      cardSave,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onSaveButtonClick={ this.resetState }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        {cardSave.map((value) => (
          <Card
            key={ value.cardName }
            cardName={ value.cardName }
            cardImage={ value.cardImage }
            cardDescription={ value.cardDescription }
            cardAttr1={ value.cardAttr1 }
            cardAttr2={ value.cardAttr2 }
            cardAttr3={ value.cardAttr3 }
            cardRare={ value.cardRare }
            cardTrunfo={ value.cardTrunfo }
          />
        ))}
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
