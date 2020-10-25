import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-community/picker';
export default class Tab1 extends Component {
  state = {
    PickerValueHolder: '',
    username: '',
    masv: '',
    email: '',
    img: '',
    phone: '',
    isLoading: true
  }

  handleName = (text) => {
    this.setState({ username: text })
  }
  handleMasv = (text) => {
    this.setState({ masv: text })
  }
  handleImg = (text) => {
    this.setState({ img: text })
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePhone = (text) => {
    this.setState({ phone: text })
  }

  login = (PickerValueHolder, username, masv, email, img, phone) => {
    fetch('http://192.168.1.14/tr_reactnative/insert.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_class: PickerValueHolder,
        name: username,
        MaSV: masv,
        email: email,
        image: img,
        phone_number: phone,
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      })
    this.setState({ PickerValueHolder: '', username: '', masv: '', email: '', img: '', phone: '' })
  }

  componentDidMount() {
    return fetch('http://192.168.1.14/tr_reactnative/getdataClass.php')
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
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container, { flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Code Student..."
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleMasv}
            value={this.state.masv}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Username..."
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleName}
            value={this.state.username}
          />
          <View
            style={styles.Picker}
          >
            <Picker
              style={{
                height: 40, color: '#fff'
              }}
              selectedValue={(this.state && this.state.PickerValueHolder)}
              onValueChange={(itemValue, itemIndex) => this.setState({ PickerValueHolder: itemValue })}
            >

              {this.state.dataSource.map((item, key) => (
                <Picker.Item label={item.class_name} value={item.id_class} key={key} />)
              )}
            </Picker>
          </View>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Link Image..."
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleImg}
            value={this.state.img}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email..."
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
            value={this.state.email}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Phone Number..."
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handlePhone}
            value={this.state.phone}
          />
          <View style={styles.contenButton}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={
                () => this.login(this.state.PickerValueHolder, this.state.username, this.state.masv, this.state.email, this.state.img, this.state.phone)
              }
            >
              <Text style={styles.submitButtonText}>SAVE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={
                () => this.setState({ PickerValueHolder: '', username: '', masv: '', email: '', img: '', phone: '' })
              }
            >
              <Text style={styles.submitButtonText}>Reset Text</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    padding: 10,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  Picker: {
    borderColor: '#009688',
    borderWidth: 2,
    margin: 15,
    backgroundColor: '#009688',
  },
  contenButton: {
    flexDirection: 'row'
  },
  submitButton: {
    backgroundColor: '#009688',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 4,
    flex: 1
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
