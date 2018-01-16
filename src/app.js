import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { logger } from 'redux-logger';
import reducers from './reducers';
import { Header } from './components/common';
import PostsList from './components/PostsList';


const createStoreWithMiddleware = applyMiddleware(logger, reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Header headerText="Reddit Feed" />
        <PostsList />
      </View>
    </Provider>
  );
};

export default App;
