import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import axios from 'axios';

function ExchangeRates() {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState([]);
  const [supportedCurrencies, setSupportedCurrencies] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.openrates.io/latest?base=USD')
      .then(response => {
        let currencies = Object.keys(response.data.rates);
        currencies = currencies.map(currency => {
          return {
            label: currency[0].toUpperCase() + currency.substr(1),
            value: currency,
          };
        });
        setSupportedCurrencies(currencies);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (baseCurrency !== null) {
      axios
        .get(`https://api.openrates.io/latest?base=${baseCurrency}`)
        .then(response => {
          let rates = Object.keys(response.data.rates).map(currency => {
            return {
              currency: currency,
              rate: response.data.rates[currency],
            };
          });
          setExchangeRates(rates);
        })
        .catch(err => console.error(err));
    }
  }, [baseCurrency]);

  return (
    <View>
      <RNPickerSelect
        style={styles}
        onValueChange={value => setBaseCurrency(value)}
        items={supportedCurrencies}
        placeholder={{label: 'Select base currency:', value: null}}
      />
      <FlatList
        data={exchangeRates}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Text style={styles.currency}>{item.currency}</Text>
            <Text style={styles.exchangeRate}>{item.rate}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  currency: {
    fontSize: 18,
  },
  exchangeRate: {
    fontSize: 18,
  },
  viewContainer: {
    padding: 16,
  },
  inputAndroid: {
    color: 'green',
  },
  inputIOS: {},
});

ExchangeRates.navigationOptions = {
  title: 'Exchange Rates',
};

export default ExchangeRates;
