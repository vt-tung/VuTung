import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { url } from './url';
export default class themmon extends Component {
  state = {
    PickerValueHolder: '',
    Ten_Mon: '',
    TinChi: '',
    isLoading: true
  }
  handleTen_Mon = (text) => {
    this.setState({ Ten_Mon: text })
  }
  handleTinChi = (text) => {
    this.setState({ TinChi: text })
  }
  insertMon = (Ten_Mon, TinChi) => {
    fetch(url + 'insertMon.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        TenMon: Ten_Mon,
        SoTinChi: TinChi
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      })
      this.setState({ Ten_Mon: '', TinChi:'' })
  }
  render() {
    return (
      <View style={styles.container, { flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Tên môn học..."
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleTen_Mon}
            value={this.state.Ten_Mon}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Số tín chỉ..."
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleTinChi}
            value={this.state.TinChi}
          />
          <View style={styles.contenButton}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={
                () => this.insertMon(this.state.Ten_Mon,this.state.TinChi)
              }
            >
              <Text style={styles.submitButtonText}>SAVE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={
                () => this.setState({ Ten_Mon: '', TinChi:'' })
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
