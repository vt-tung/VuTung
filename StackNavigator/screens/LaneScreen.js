import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { url } from './tabs/url';
export default class Lane extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      TextInputId: '',
      TextInputIdClass: '',
      TextInputCodeStudent: '',
      TextInputName: '',
      TextInputImage: '',
      TextInputEmail: '',
      TextInputPhoneNumber: ''
    }
  }

  componentDidMount() {
    this.setState({
      TextInputId: this.props.route.params.id,
      TextInputIdClass: this.props.route.params.id_class,
      TextInputCodeStudent: this.props.route.params.MaSV,
      TextInputName: this.props.route.params.name,
      TextInputImage: this.props.route.params.image,
      TextInputEmail: this.props.route.params.email,
      TextInputPhoneNumber: this.props.route.params.phone_number
    });
    return fetch(url+'getdataClass.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function () {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  UpdateUser = () => {
    fetch(url+'update.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.TextInputId,
        id_class: this.state.TextInputIdClass,
        MaSV: this.state.TextInputCodeStudent,
        name: this.state.TextInputName,
        image: this.state.TextInputImage,
        email: this.state.TextInputEmail,
        phone_number: this.state.TextInputPhoneNumber
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }

  DeleteUser = () => {
    fetch(url+'delete.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.TextInputId
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
        <View style={{ flex: 1, paddingTop: 20, }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (

      <View style={styles.container, { flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
          <TextInput
            style={styles.input}
            placeholder="Code student..."
            placeholderTextColor="#9a73ef"
            onChangeText={TextInputValue => this.setState({ TextInputCodeStudent: TextInputValue })}
            value={this.state.TextInputCodeStudent}
          />
          <TextInput
            style={styles.input}
            placeholder="Username..."
            placeholderTextColor="#9a73ef"
            onChangeText={TextInputValue => this.setState({ TextInputName: TextInputValue })}
            value={this.state.TextInputName}
          />
          <View
            style={styles.Picker}
          >
            <Picker
              style={{
                height: 40, color: '#fff'

              }}
              selectedValue={(this.state && this.state.TextInputIdClass) || this.state.TextInputIdClass}
              onValueChange={(itemValue, itemIndex) => this.setState({ TextInputIdClass: itemValue })}
              itemStyle={{ backgroundColor: "black", color: "blue", fontFamily: "Ebrima", fontSize: 17 }}>

              {this.state.dataSource.map((item, key) => (
                <Picker.Item label={item.class_name} value={item.id_class} key={key} />)
              )}
            </Picker>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Image URL..."
            placeholderTextColor="#9a73ef"
            onChangeText={TextInputValue => this.setState({ TextInputImage: TextInputValue })}
            value={this.state.TextInputImage}
          />

          <TextInput
            style={styles.input}
            placeholder="Email..."
            placeholderTextColor="#9a73ef"
            onChangeText={TextInputValue => this.setState({ TextInputEmail: TextInputValue })}
            value={this.state.TextInputEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number..."
            placeholderTextColor="#9a73ef"
            onChangeText={TextInputValue => this.setState({ TextInputPhoneNumber: TextInputValue })}
            value={this.state.TextInputPhoneNumber}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.UpdateUser}
          >
            <Text style={styles.submitButtonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.DeleteUser}
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
    backgroundColor: '#009688',
  },
  input: {
    margin: 15,
    height: 40,
    padding: 10,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#009688',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 4
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  containerDatastudents: {
    flex: 1,
    paddingTop: 20,
    marginLeft: 5,
    marginRight: 5
  },

  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },

  MainContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff'
  }
})
