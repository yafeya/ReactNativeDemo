import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendReducer from './FriendReducer';
import AppNavigator from './AppNavigator';
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    const store = createStore(friendReducer);
    const AppContainer = createAppContainer(AppNavigator);
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    );
  }
}
