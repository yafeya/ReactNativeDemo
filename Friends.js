import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFriends, addFriend } from './FriendActions';

class Friends extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Fetch all possible friends" onPress={() => this.props.fetchFriends()} />
        <View>
          {
            this.props.friends.isFetching && <Text>Loading...</Text>
          }
        </View>
        <Text>Add friends here!</Text>
        {
          this.props.friends.possible.map((friend, index) => (
            <Button
              key={friend.name}
              title={`Add ${friend.name}`}
              onPress={() =>
                this.props.addFriend(index)
              }
            />
          )
          )
        }
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
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
  const { friends } = state
  return { friends }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchFriends,
    addFriend,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
