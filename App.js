import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, Appbar, Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { render } from 'react-dom';
import Displaylove from './component/Displaylove';

class App extends React.Component {
  state = {
    fname: '',
    sname: '',
    result:'loading'
  }
  submit()
  {
      fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,{
        "headers": {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key": "9beccab0b5msh0daf82e1f40af32p10bf4ajsn66675da3b328"
        }
      }).then
      (data=>data.json()).then(data2=>{
        //console.log(data2)
        this.setState({
          result:data2
        })
      })
  }
  render() {
    return (

      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Love % Calculator" 
           style={{alignItems:"center"}}
          />
        </Appbar.Header>
        <TextInput
          style={{padding:5}}
          label="Male"
          value={this.state.fname}
          onChangeText={text => this.setState( { fname:text})}
        />
        <TextInput
         style={{padding:5}}
          label="Female"
          value={this.state.sname}
          onChangeText={text => this.setState( { sname:text})}
        />
        <Button 
        style={{margin:10,marginTop:30}}
        icon="pin" 
        mode="contained" 
        onPress={() => this.submit()}>
          Calculate
        </Button>
        <Displaylove
        data={this.state.result}/>
        <StatusBar style="auto"/>
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
