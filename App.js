import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import AppNavigator from './AppNavigator';
import { createAppContainer } from 'react-navigation';
import { friendReducer } from './FriendReducer';
import { friendAdvancedReducer } from './FriendAdvancedReducer';


const appReducer = combineReducers({
    friends: friendReducer,
    selecting: friendAdvancedReducer
});

export default class App extends React.Component {
  

  render() {
    const store = createStore(appReducer);
    const AppContainer = createAppContainer(AppNavigator);
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    );
  }
}
