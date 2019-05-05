import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

/* Follow this page to install the react-navigation & react-native-gesture-handler
    1. yarn add react-navigation
      # or with npm
      # npm install --save react-navigation
    2. yarn add react-native-gesture-handler
      # or with npm
      # npm install --save react-native-gesture-handler
    3. react-native link react-native-gesture-handler
    4. Modify MainActivity.java in ./android/app/src/main/java/com/<project>/MainActivity.java
       The line with + is to add.
      
    package com.reactnavigation.example;

    import com.facebook.react.ReactActivity;
    + import com.facebook.react.ReactActivityDelegate;
    + import com.facebook.react.ReactRootView;
    + import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

    public class MainActivity extends ReactActivity {

      @Override
      protected String getMainComponentName() {
        return "Example";
      }

    +  @Override
    +  protected ReactActivityDelegate createReactActivityDelegate() {
    +    return new ReactActivityDelegate(this, getMainComponentName()) {
    +      @Override
    +      protected ReactRootView createRootView() {
    +       return new RNGestureHandlerEnabledRootView(MainActivity.this);
    +      }
    +    };
    +  }
    }
*/

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}