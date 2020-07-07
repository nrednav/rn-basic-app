import React, {useState} from 'react';

export const FruitContext = React.createContext();

export const FruitProvider = ({children}) => {
  const [fruits, setFruit] = useState([
    {
      name: 'Mango',
      quantity: 8,
    },
    {
      name: 'Apple',
      quantity: 7,
    },
  ]);

  return (
    <FruitContext.Provider value={fruits}>{children}</FruitContext.Provider>
  );
};
