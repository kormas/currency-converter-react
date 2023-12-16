import './App.css';
import Select from "./Select"
import Input from "./Input"
import Label from "./Label"
import Fieldset from "./Fieldset";
import Article from "./Article";
import React, { useState } from 'react';

function App() {

  const currencies = [
    {
      code: "EUR",
      name: "Euro",
      buy: 4.4556,
      sell: 4.4781
    },
    {
      code: "USD",
      name: "Dolar amerykański",
      buy: 4.1483,
      sell: 4.1708
    },
    {
      code: "CHF",
      name: "Frank szwajcarski",
      buy: 4.6205,
      sell: 4.6419
    },
    {
      code: "GBP",
      name: "Funt Brytyjski",
      buy: 5.1410,
      sell: 5.1658
    }
  ];

  const [selectedCurrency, setSelectedCurrency] = useState({ code: "", name: "", buy: "N/A", sell: "N/A" });
  const [selectedForeign, setSelectedForeign] = useState(currencies[0]);
  const [selectedNational, setSelectedNational] = useState(currencies[0]);
  const [amountToPln, setAmountToPln] = useState("");
  const [amountFromPln, setAmountFromPln] = useState("");

  const handleCurrencySelect = (event) => {
    const chosenCurrency = currencies.find(currency => currency.code === event.target.value);
    setSelectedCurrency(chosenCurrency);
  };
  const handleToPlnSelect = (event) => {
    const chosenCurrency = currencies.find(currency => currency.code === event.target.value);
    setSelectedForeign(chosenCurrency);
  };
  const handleFromPlnSelect = (event) => {
    const chosenCurrency = currencies.find(currency => currency.code === event.target.value);
    setSelectedNational(chosenCurrency);
  }

  const handleToPlnInput = (event) => {
    setAmountToPln(event.target.value);
  };
  const handleFromPlnInput = (event) => {
    setAmountFromPln(event.target.value);
  };

  const calculateToPlnResult = () => {
    return amountToPln && selectedForeign.buy ? (parseFloat(amountToPln) * selectedForeign.buy).toFixed(2) : "N/A";
  };
  const calculateFromPlnResult = () => {
    return amountFromPln && selectedNational.buy ? (parseFloat(amountFromPln) / selectedNational.buy).toFixed(2) : "N/A";
  };



  return (
    <Article
      form={
        <>
          <Fieldset
            title="Kursy walut"
            body={
              <>
                <p className="fieldset__select fieldset__media">
                  <Label forContent="rates" labelText="Dla:" />
                  <Select
                    name="rates"
                    id="rates"
                    defaultValue=""
                    extraOption="Wybierz walutę"
                    onChange={handleCurrencySelect}
                    currencies={currencies}
                    renderOptionContent={(currency) => `${currency.code} (${currency.name})`}
                  />
                </p>
                <p>
                  <span className="form__labelText">Kupno:</span>
                  <strong>{typeof selectedCurrency.buy === "number" ? selectedCurrency.buy.toFixed(2) : "N/A"} </strong>
                  PLN
                </p>
                <p>
                  <span className="form__labelText">Sprzedaż:</span>
                  <strong>{typeof selectedCurrency.sell === "number" ? selectedCurrency.sell.toFixed(2) : "N/A"} </strong>
                  PLN
                </p>
              </>
            }
          />

          <Fieldset
            title="Wymiana na złotówki"
            body={
              <>
                <p className="fieldset__media">
                  <Label forContent="amountToPln" labelText="Posiadam:" />
                  <Input
                    value={amountToPln}
                    onChange={handleToPlnInput}
                    id="amountToPln"
                  />
                  <Select
                    name="toPln"
                    id="toPln"
                    defaultValue={currencies[0].code}
                    onChange={handleToPlnSelect}
                    currencies={currencies}
                    renderOptionContent={(currency) => currency.code}
                  />
                </p>
                <p>
                  <span className="form__labelText">Otrzymam:</span>
                  <strong> {calculateToPlnResult()} </strong>
                  PLN
                </p>
              </>
            }
          />

          <Fieldset
            title="Wymiana na walutę obcą"
            body={
              <>
                <p className="fieldset__media">
                  <Label forContent="amountFromPln" labelText="Posiadam:" />
                  <Input
                    value={amountFromPln}
                    onChange={handleFromPlnInput}
                    id="amountFromPln"
                  />
                  PLN
                </p>
                <p>
                  <Label forContent="fromPln" labelText="Otrzymam:"
                    extraContent={<strong>{calculateFromPlnResult()} </strong>}
                  />
                  <Select
                    name="fromPln"
                    id="fromPln"
                    defaultValue={currencies[0].code}
                    onChange={handleFromPlnSelect}
                    currencies={currencies}
                    renderOptionContent={(currency) => currency.code}
                  />
                </p>
              </>
            }
          />
        </>
      }
    />
  );
}

export default App;
