import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import { colors } from './src/helpers/utils';
import { store } from './src/reducers/store';
import ShoppingList from './src/screens/shoppingList';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        translucent={true}
        backgroundColor={colors.statusBar}
        barStyle={'dark-content'}
      />
      <ShoppingList />
    </Provider>
  );
};

export default App;
