import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import friendReducer from './FriendReducer';
import AppNavigator from './AppNavigator';
import { createAppContainer } from 'react-navigation';
import promise from 'redux-promise-middleware';

export default class App extends React.Component {
  render() {
    const middleware = [promise];
    const store = createStore(friendReducer, applyMiddleware(...middleware));
    const AppContainer = createAppContainer(AppNavigator);
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    );
  }
}
