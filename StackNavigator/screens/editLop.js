import React from 'react';
import { View, Text ,StyleSheet, ActivityIndicator,TouchableOpacity, TextInput, Alert} from 'react-native';
import { url } from './tabs/url';
export default class editLop extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      TextInputId: '',
      TextInputIdClass: '',
      TextInputClassName: '',
    }
  }

  componentDidMount() {
    this.setState({
      TextInputIdClass: this.props.route.params.id_class,
      TextInputClassName: this.props.route.params.class_name
    });
  }

  UpdateLop = () => {
    fetch(url+'updateLop.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_class: this.state.TextInputIdClass,
        class_name: this.state.TextInputClassName
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }

  DeleteLop= () =>{
    fetch(url+'deleteLop.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_class : this.state.TextInputIdClass
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 , }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (

      <View style={styles.container, { flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
          <TextInput
            style={styles.input}
            placeholder="Lớp..."
            placeholderTextColor="#9a73ef"
            onChangeText={TextInputValue => this.setState({ TextInputClassName: TextInputValue })}
            value={this.state.TextInputClassName}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.UpdateLop}
          >
            <Text style={styles.submitButtonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.DeleteLop}
          >
            <Text style={styles.submitButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      paddingTop: 23
  },
  Picker: {
    borderColor: '#009688',
    borderWidth: 2,
    margin: 15,
    backgroundColor:'#009688',
  },
  input: {
      margin: 15,
      height: 40,
      padding:10,
      borderColor: '#7a42f4',
      borderWidth: 1
  },
  submitButton: {
      backgroundColor: '#009688',
      padding: 10,
      margin: 15,
      height: 40,
      borderRadius:4
  },
  submitButtonText: {
      color: 'white',
      textAlign:'center',
      textTransform:'uppercase'
  },
  containerDatastudents:{
    flex:1,
    paddingTop:20,
    marginLeft:5,
    marginRight:5
  },

  item:{
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:'#ddd'
  },

  MainContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff'
  }
})
