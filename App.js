import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity , Alert} from 'react-native';


export default class App extends React.Component {

  _onPressButton() {
    Alert.alert('App still in progress, please wait')
  }


  render() {



    return (
      <View style={styles.container}>

<View elevation={8} style={styles.header}></View>

<Text style={styles.text}>Ohm's Law calculator</Text>
<Image  style={styles.image} source={require('./ohm.png')} />
<View style={[{ top:110, marginLeft: 'auto',
marginRight: 'auto'}]}>


<TouchableOpacity elevation={20} onPress={this._onPressButton}
  style={styles.submit} >
<Text style={styles.submitText}>Enter</Text>
</TouchableOpacity>

</View>


</View>


    );
  }
}

const styles = StyleSheet.create({


  submit:{
    top:100,
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
height: 200,
width: 200,
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
