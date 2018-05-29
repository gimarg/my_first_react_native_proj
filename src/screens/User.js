import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import ajax from '../services/FetchUsers';
import UserList from '../components/UserList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B6A6BB',
  }
})

export class User extends Component {

  state = {
    users: []
  }

  async componentDidMount() {
    const responseJson = await ajax.fetchUsers();
    this.setState({
      users: responseJson.users,
    }, function(){

    });
  }

  // componentDidMount() {
  //   // console.log('here');
  //   // fetch('http://10.1.1.185:8000/users')
  //   //   .then((res) => res.json())
  //   //   // .then((users) => this.setState({users}))
  //   //   .then((responseJson) => {

  //   //             // Showing response message coming from server after inserting records
  //   //             Alert.alert(responseJson);
  
  //   //         }).catch((error) => {
  //   //             console.error(error);
  //   //           });

  //            fetch('https://facebook.github.io/react-native/movies.json')
  //   .then((response) => response.json())
  //   .then((responseJson) => {

  //     this.setState({
  //       users: responseJson.movies,
  //     }, function(){

  //     });

  //   })
  //   .catch((error) =>{
  //     console.error(error);
  //   });
  // }



  // componentDidMount(){
  //   return fetch('http://10.1.1.185:8000/users')
  //     .then((response) => response.json())
  //     .then((responseJson) => {

  //       this.setState({
  //         users: responseJson.users,
  //       }, function(){

  //       });

  //     })
  //     .catch((error) =>{
  //       console.error(error);
  //     });
  // }




  // fetch('http://10.1.1.185:8000/users', {
  //   method: 'GET',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   }

  // }).then((response) => response.json())
  //     .then((responseJson) => {

  //         // Showing response message coming from server after inserting records
  //         console.log("done");

  //     }).catch((error) => {
  //       console.log("notdone");
  //         console.error(error);
  //       });
      

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.users.length > 0
        ? <UserList users={this.state.users} />
        : <Text>zero</Text>
        
      }
      </View>
    )
    // 2ND WAY
    // return(
    //   <View style={{flex: 1, paddingTop:20}}>
    //     {/* <FlatList
    //       data={this.state.users}
    //       renderItem={({item}) => <Text>{item.email}, {item.name}</Text>}
    //       keyExtractor={(item, index) => index}
    //     /> */}
    //     <UserList users={this.state.users} />
    //   </View>
    // );
  }
}

export default User;