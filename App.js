import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class App extends React.Component {
  render() {



    return (
      <View style={styles.container}>

<View elevation={8} style={styles.header}></View>

<Text style={styles.text}>Ohm's Law calculator</Text>
<Image  style={styles.image} source={require('./ohm.png')} />
</View>


    );
  }
}

const styles = StyleSheet.create({









image:{
top: 50,
height: 150,
width: 150,
marginLeft: 'auto',
marginRight: 'auto'

},

text:{
top: 30,
  color: 'black',
      fontWeight: 'bold',
      fontSize: 28,
      justifyContent: 'center',
textAlign:'center',
fontFamily: 'notoserif'

},





container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',

  },



header:{
backgroundColor:'black',
flexDirection:'row',
flex:0.15,
shadowOpacity: 0.75,
        shadowRadius: 800,
        shadowColor: 'black',
        shadowOffset: { height: 100, width: 0 },








}


});
