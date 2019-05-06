import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import friendReducer from './FriendReducer';
import AppNavigator from './AppNavigator';
import { createAppContainer } from 'react-navigation';
import thunk from 'redux-thunk';

export default class App extends React.Component {
  render() {
    const store = createStore(friendReducer, applyMiddleware(thunk));
    const AppContainer = createAppContainer(AppNavigator);
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    );
  }
}
