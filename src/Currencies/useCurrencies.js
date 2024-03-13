import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrencies = () => {

    const [lastUpdate, setLastUpdate] = useState("");
    const [currencies, setCurrencies] = useState([]);
    const [selectedForeign, setSelectedForeign] = useState({ code: "", name: "", buy: "N/A", sell: "N/A" });
    const [selectedNational, setSelectedNational] = useState({ code: "", name: "", buy: "N/A", sell: "N/A" });
    
    useEffect(() => {
      const loadCurrencies = async () => {
        try {
          const response = await axios.get("/ratesx.json");
          setLastUpdate(new Date(response.data.meta.last_updated_at));
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
  
    return {lastUpdate, setLastUpdate, currencies, setCurrencies, selectedForeign, setSelectedForeign, selectedNational, setSelectedNational}
  }

  export default useCurrencies;