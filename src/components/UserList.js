import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class UserList extends Component {

  static propTypes = {
      users: PropTypes.array.isRequired
  }; 
  render() {
    console.log("test");
    return (
      <View style={styles.usersList}>
        {this.props.users.map((user) => {
            return (
                <View key={user.id}>
                    <Text style={styles.usertext}>{user.name} | { user.email }</Text>
                </View>
            )
        })}
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
    usersList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    usertext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});