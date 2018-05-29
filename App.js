// import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
 
// Importing Stack Navigator library to add multiple activities.
import { createStackNavigator } from 'react-navigation';

import { KeyboardAvoidingView } from 'react-native';

// -----------------------------------------------------------------------------
import React, { Component } from 'react';
import {
  Platform
} from 'react-native';
// import { StackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import User from './src/screens/User';

const AppNavigator = createStackNavigator({
  // HomeScreen: { screen: Home },
  UserScreen: { screen: User }
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

AppRegistry.registerComponent('App', () => App);
// -----------------------------------------------------------------------------

// class RegisterActivity extends Component {
 
//   static navigationOptions =
//   {
//       title: 'Register',
//   };
    
//   constructor(props) {
  
//     super(props)

//     this.state = {

//       UserName: '',
//       UserEmail: '',
//       UserPassword: ''

//     }
//     this.focusNextField = this.focusNextField.bind(this);
//     // to store our input refs
//     this.inputs = {};
//   }
//   focusNextField(key) {
//     this.inputs[key].focus();
//   }
  
//   UserRegistrationFunction = () =>{
  
  
//     const { UserName }  = this.state ;
//     const { UserEmail }  = this.state ;
//     const { UserPassword }  = this.state ;



//     fetch('http://10.1.1.185/react_native_projects/PHP-ReactNative_Project/user_registration.php', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({

//         name: UserName,

//         email: UserEmail,

//         password: UserPassword

//       })

//     }).then((response) => response.json())
//         .then((responseJson) => {

//             // Showing response message coming from server after inserting records
//             Alert.alert(responseJson);

//             //If user has registered successfully
//             if(responseJson === 'User Registered Successfully')
//             {
  
//               //then go to homepage to login
//               this.props.navigation.navigate('Home');
  
//             }
//         }).catch((error) => {
//             console.error(error);
//           });


//   }
  
//   render() {
//     return (
      
//       <KeyboardAvoidingView style={styles.MainContainer} behavior="padding" enabled>     

//         <Text style= {styles.TextComponentStyle} >User Registration Form</Text>
  
//         <TextInput 

//           blurOnSubmit={ false }

//           ref={ input => {
//             this.inputs['username'] = input;
//           }}

//           // Adding hint in Text Input using Place holder.
//           placeholder="Enter User Name"

//           autoFocus = {true}

//           onChangeText={UserName => this.setState({UserName})}

//           onSubmitEditing={() => {
//             // specify the key of the ref, as done in the previous section.
//             this.focusNextField('useremail');
//           }}

//           // Making the Under line Transparent.
//           underlineColorAndroid='transparent'

//           style={styles.TextInputStyleClass}
//         />

//         <TextInput

//           blurOnSubmit={ false }

//           ref={ input => {
//             this.inputs['useremail'] = input;
//           }}
          
//           // Adding hint in Text Input using Place holder.
//           placeholder="Enter User Email"

//           onChangeText={UserEmail => this.setState({UserEmail})}
//           onSubmitEditing={() => {
//             // specify the key of the ref, as done in the previous section.
//             this.focusNextField('password');
//           }}
//           // Making the Under line Transparent.
//           underlineColorAndroid='transparent'

//           style={styles.TextInputStyleClass}
//         />

//         <TextInput

//           blurOnSubmit={ true }

//           ref={ input => {
//             this.inputs['password'] = input;
//           }}

//           // Adding hint in Text Input using Place holder.
//           placeholder="Enter User Password"

//           onChangeText={UserPassword => this.setState({UserPassword})}

//           returnKeyType={ "done" }

//           // Making the Under line Transparent.
//           underlineColorAndroid='transparent'

//           style={styles.TextInputStyleClass}

//           secureTextEntry={true}
//         />

//         <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" />
      
      
//       </KeyboardAvoidingView>
            
//     );
//   }
// }

// // Creating Login Activity.
// class LoginActivity extends Component {

//   // Setting up Login Activity title.
//   static navigationOptions =
//    {
//       title: 'Login',
//    };
 
//   constructor(props) {
 
//     super(props)
 
//     this.state = {
 
//       UserName: '',
//       UserPassword: ''
 
//     }
 
//     this.focusNextField = this.focusNextField.bind(this);
//     // to store our input refs
//     this.inputs = {};
//   }
  
//   focusNextField(key) {
//     this.inputs[key].focus();
//   }
  
//   OpenRegisterFunction = () =>
//   {
//     this.props.navigation.navigate('Register');
      
//   }

//   UserLoginFunction = () =>{
  
//     const { UserName }  = this.state ;
//     const { UserPassword }  = this.state ;
    
    
//     fetch('http://10.1.1.185/react_native_projects/PHP-ReactNative_Project/User_Login.php', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
    
//         username: UserName,
    
//         password: UserPassword
    
//       })
    
//     }).then((response) => response.json())
//         .then((responseJson) => {

//           // If server response message same as Data Matched
//           if(responseJson === 'Data Matched')
//           {

//               //Then open Profile activity and send user email to profile activity.
//               this.props.navigation.navigate('Profile', { username: UserName });

//           }
//           else{
//             // Showing response message coming from server after inserting records.
//             Alert.alert(responseJson);
//           }

//         }).catch((error) => {
//           console.error(error);
//         });
//   }
 
//   render() {
//     return (
 
//       <KeyboardAvoidingView style={styles.MainContainer} behavior="padding" enabled>
 
//         <Text style= {styles.TextComponentStyle}>User Login Form</Text>
  
//         <TextInput
        
//           blurOnSubmit={ false }

//           ref={ input => {
//             this.inputs['username'] = input;
//           }}

//           // Adding hint in Text Input using Place holder.
//           placeholder="Enter Username"
 
//           onChangeText={UserName => this.setState({UserName})}

//           onSubmitEditing={() => {
//             // specify the key of the ref, as done in the previous section.
//             this.focusNextField('password');
//           }}

//           // Making the Under line Transparent.
//           underlineColorAndroid='transparent'
 
//           style={styles.TextInputStyleClass}
//         />
 
//         <TextInput
        
          
//           ref={ input => {
//             this.inputs['password'] = input;
//           }}
          
//           // Adding hint in Text Input using Place holder.
//           placeholder="Enter User Password"
 
//           onChangeText={UserPassword => this.setState({UserPassword})}
 
//           // onSubmitEditing={() => {
//           //   // specify the key of the ref, as done in the previous section.
//           //   this.focusNextField('useremail');
//           // }}

//           // Making the Under line Transparent.
//           underlineColorAndroid='transparent'
 
//           style={styles.TextInputStyleClass}
 
//           secureTextEntry={true}
//         />
 
//         <View style = { styles.ButtonStyleClass }>
//           <Button title="Login" onPress={this.UserLoginFunction} color="#2196F3" />
//         </View>

//         <View style = { styles.ButtonStyleClass }>
//           <Button onPress = { this.OpenRegisterFunction } title = 'Register'/>
//         </View>
      
//       </KeyboardAvoidingView>
            
//     );
//   }
// }

// class ProfileActivity extends Component
// {
//   // Setting up profile activity title.
//    static navigationOptions =
//    {
//       title: 'Profile',
    
//    };
    
//     GoHomeFunction = () =>
//     {
//       Alert.alert("Logged out");
//       this.props.navigation.navigate('Home');
//     }

//    render()
//    {
//     // const {goBack} = this.props.navigation;

//     return(
//       <View style = { styles.MainContainer }>

//         <Text style = {styles.TextComponentStyle}> Hi </Text>
//         <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.username } </Text>
          
//         <Button title="Click here to Logout" onPress={ this.GoHomeFunction } />

//       </View>
//     );
//    }
// }


// export default createStackNavigator(
// {
//   Home: { screen: LoginActivity },
  
//   Register: { screen: RegisterActivity },

//   Profile: {screen: ProfileActivity}
// });

// const styles = StyleSheet.create({
 
//   MainContainer :{
  
//     flex:1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     // alignItems: 'center',
//     // marginTop: 10
//   },
  
//   ButtonStyleClass: {

//     marginBottom: 30,
//     marginLeft: 30,
//     marginRight: 30,
//   },

//   TextInputStyleClass: {
  
//     textAlign: 'center',
//     marginBottom: 7,
//     height: 40,
//     borderWidth: 1,
//     // Set border Hex Color Code Here.
//     borderColor: '#2196F3',
    
//     // Set border Radius.
//     borderRadius: 5 ,
    
//     // Set border Radius.
//     //borderRadius: 10 ,
//     },

//   TextComponentStyle: {
//     fontSize: 20,
//     color: "#000",
//     textAlign: 'center', 
//     marginBottom: 15
//   }
 
// });
 
// AppRegistry.registerComponent('ActivityProject', () => ActivityProject);
