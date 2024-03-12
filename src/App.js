import "./App.css";
import Select from "./Select"
import Input from "./Input"
import Label from "./Label"
import Container from "./Container"
import Fieldset from "./Fieldset";
import Article from "./Article";
import Clock from "./Clock";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  useEffect(() => {
    const loadCurrencies = async () => {
      try {
        const response = await axios.get("/ratesx.json");
        const plnValue = response.data.data.PLN.value;
        const includeCurrencies = ["EUR", "USD", "CHF", "GBP"];
        const currencyNames = {
          EUR: "Euro",
          USD: "Dolar amerykański",
          CHF: "Frank szwajcarski",
          GBP: "Funt brytyjski"
        }
        const filteredCurrencies = Object.values(response.data.data).filter(currency => includeCurrencies.includes(currency.code));
        const loadedCurrencies = filteredCurrencies.map(currency => ({
          ...currency,
          value: plnValue / currency.value,
          name: currencyNames[currency.code]
        }));
        setCurrencies(loadedCurrencies);
        setSelectedForeign(loadedCurrencies[0]);
        setSelectedNational(loadedCurrencies[0]);
      } catch (error) {
        console.error("Coś się popsuło", error);
      }
    };

    loadCurrencies();
  }, []);

  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState({ code: "", name: "", buy: "N/A", sell: "N/A" });
  const [selectedForeign, setSelectedForeign] = useState({ code: "", name: "", buy: "N/A", sell: "N/A" });
  const [selectedNational, setSelectedNational] = useState({ code: "", name: "", buy: "N/A", sell: "N/A" });
  
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
  };

  const handleToPlnInput = (event) => {
    setAmountToPln(event.target.value);
  };
  const handleFromPlnInput = (event) => {
    setAmountFromPln(event.target.value);
  };

  const calculateToPlnResult = () => {
    return amountToPln > 0 && selectedForeign.value ? (parseFloat(amountToPln) * 0.99 * selectedForeign.value).toFixed(2) : "N/A";
  };
  const calculateFromPlnResult = () => {
    return amountFromPln > 0 && selectedNational.value ? (parseFloat(amountFromPln) / 1.01 / selectedNational.value).toFixed(2) : "N/A";
  };

  const handleKeyDown = (event) => {
    if (event.key === "-") {
      event.preventDefault();
    }
  };

  return (
    <Article
      form={
        currencies.length > 0 ? (
        <>
          <Clock />
          <Fieldset
            title="Kursy walut"
            body={
              <>
                <Container
                  textAlign="center"
                  body={
                    <>
                      <Label
                        forContent="rates"
                        labelText="Dla:"
                      />
                      <Select
                        name="rates"
                        id="rates"
                        defaultValue=""
                        extraOption="Wybierz walutę"
                        onChange={handleCurrencySelect}
                        currencies={currencies}
                        renderOptionContent={(currency) => `${currency.code} (${currency.name})`}
                      />
                    </>
                  }
                />
                <p>
                  <Label
                    labelText="Kupno:"
                  />
                  <strong>{typeof selectedCurrency.value === "number" ? (selectedCurrency.value * 0.99).toFixed(2) : "N/A"} </strong>
                  PLN
                </p>
                <p>
                  <Label
                    labelText="Sprzedaż:"
                  />
                  <strong>{typeof selectedCurrency.value === "number" ? (selectedCurrency.value * 1.01).toFixed(2) : "N/A"} </strong>
                  PLN
                </p>
              </>
            }
          />

          <Fieldset
            title="Wymiana na złotówki"
            body={
              <>
                <Container
                  body={
                    <>
                      <Label
                        forContent="amountToPln"
                        labelText="Posiadam:"
                      />
                      <Input
                        value={amountToPln}
                        onChange={handleToPlnInput}
                        id="amountToPln"
                        onKeyDown={handleKeyDown}
                      />
                      <Select
                        name="toPln"
                        id="toPln"
                        defaultValue={currencies[0].code}
                        onChange={handleToPlnSelect}
                        currencies={currencies}
                        renderOptionContent={(currency) => currency.code}
                      />
                    </>
                  }
                />
                <p>
                  <Label
                    labelText="Otrzymam:"
                  />
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
                <Container
                  body={
                    <>
                      <Label
                        forContent="amountFromPln"
                        labelText="Posiadam:"
                      />
                      <Input
                        value={amountFromPln}
                        onChange={handleFromPlnInput}
                        id="amountFromPln"
                        onKeyDown={handleKeyDown}
                      />
                      PLN
                    </>
                  }
                />
                <p>
                  <Label
                    forContent="fromPln"
                    labelText="Otrzymam:"
                  />
                  <strong>{calculateFromPlnResult()} </strong>
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
        ) : (
          <div>Ładowanie danych...</div>
        )
      }
    />
  );
}

export default App;
