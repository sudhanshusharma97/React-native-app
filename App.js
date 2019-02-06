import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  static navigationOptions = {

     headerStyle: {
       backgroundColor: '#000000',
       shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 10.46,

elevation: 9,

     },
     headerTintColor: '#FFFFFF',
     headerTitleStyle: {
       fontWeight: 'bold',
     },
   };

  render() {
    return (
<View style={styles.container}>
<Text style={styles.text}>Ohm's Law calculator</Text>
<Image  style={styles.image} source={require('./ohm.png')} />
        <TouchableOpacity elevation={20} onPress={() => this.props.navigation.navigate('Details')}
          style={styles.submit} >
        <Text style={styles.submitText}>Enter</Text>
        </TouchableOpacity>

    </View>


    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {

     headerStyle: {
       backgroundColor: '#000000',
       shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 10.46,

elevation: 9,

     },
     headerTintColor: '#FFFFFF',
     headerTitleStyle: {
       shadowColor: '#FFFFFF',
       fontWeight: 'bold',
     },
   };

render() {
    return (
      <View style={styles.containercalculator}>
        <Text style={styles.textcalculator} >Add values below</Text>
        <TextInput style={styles.textinput}
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />
      <Text></Text>
      <TextInput style={styles.textinput}
      {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable = {true}
      maxLength = {40}
    />
        <View elevation={8} style={styles.bottomheader}></View>
      </View>

    );
  }
}









const styles = StyleSheet.create({


  submit:{
    top:140,
    width:150,
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#00B2EB',
    borderRadius:50,
    borderWidth: 1,
    borderColor: 'white',
    alignSelf:'center',
    justifyContent:'center',
 elevation: 10

  },
  submitText:{

      color:'white',
      textAlign:'center',
      fontSize:20
  },


Button:{

alignSelf: 'stretch'


},


image:{
top: 100,
height: 150,
width: 150,
marginLeft: 'auto',
marginRight: 'auto'

},

text:{
top: 60,
  color: 'black',
      fontWeight: 'bold',
      fontSize: 32,
      justifyContent: 'center',
textAlign:'center',
fontFamily: 'notoserif'

},

textcalculator:{
top: 60,
  color: 'black',
      fontWeight: 'bold',
      fontSize: 32,
      justifyContent: 'center',
textAlign:'center',
fontFamily: 'notoserif',

alignSelf:'center',

justifyContent:'center'
},




container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',

  },

  containercalculator: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
justifyContent:'center',

    },


bottomheader:{
backgroundColor:'#00B2EB',
flexDirection:'row',
flex:1,
top:350,

},

textinput:{

top:100,
alignSelf:'center',
justifyContent:'center',
borderBottomColor: '#000000',
borderWidth: 1,
width:200,
height:40,
borderRadius: 50,
textAlign: 'center',

}













});



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
