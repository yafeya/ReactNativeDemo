import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { foundFriend } from './FriendActions'
import { bindActionCreators } from 'redux'

class Home extends React.Component {

  _onPress(e) { 
    let index = Math.round(Math.random() * 10);
    this.props.foundFriend(index)
  }

  render() {
    const friendElements = this.props.friends.current.map((friend) => <Text key={friend}>{friend}</Text>);
    let text;
    if (this.props.selecting !== undefined) {
      let value = this.props.selecting.selectIndex;
      text = <Text>{value.toString()}</Text>
    }
    return (
      <View style={styles.container}>
        <Button title="Select Mock" onPress={e => this._onPress(e)} />
        <Text>We have {this.props.friends.current.length} friends!</Text>
        {friendElements}
        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
        {text}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  const { friends, selecting } = state
  return { friends, selecting }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    foundFriend,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
