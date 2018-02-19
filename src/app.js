import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { StackNavigator } from 'react-navigation';

import reducers from './reducers';
import PostsList from './components/PostsList';
import WebPage from './components/WebPage';


const createStoreWithMiddleware = applyMiddleware(logger, reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const AppNavigator = StackNavigator({
  Home: {screen: PostsList},
  Web: { screen: WebPage}
})

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
