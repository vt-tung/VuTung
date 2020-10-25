import React, { Component } from 'react';
 
import { ActivityIndicator, Alert, FlatList, Text, StyleSheet, View, TextInput } from 'react-native';
 
export default class DetailsScreen extends Component {
 
  constructor(props) {
 
    super(props);
 
    this.state = {
      isLoading: true,
      text: '',
      data: []
    }
 
    this.arrayholder = [];
  }
 
  componentDidMount() {
 
    return fetch('http://192.168.1.14/tr_reactnative/getdataUsers.php')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState({
          isLoading: false,
          data: responseJson,
        }, () => {
          // In this block you can do something with new state.
          this.arrayholder = responseJson;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
 

 
  searchData(text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });
 
    this.setState({
      data: newData,
      text: text
      })
    }
 
    itemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }

    Action_Click(id, name, email, phone_number) {
      this.props.navigation.navigate("Lane", {
        id: id,
        name: name,
        email: email,
        phone_number: phone_number
      })
    }
 
    render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
   
      return (
   
        <View style={styles.MainContainer}>
   
        <TextInput 
         style={styles.textInput}
         onChangeText={(text) => this.searchData(text)}
         value={this.state.text}
         underlineColorAndroid='transparent'
         placeholder="Search Name..." />
 
        <FlatList
          data={this.state.data}
          keyExtractor={ (item, index) => index.toString() }
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item }) => 
          <Text 
            style={styles.row}
            onPress={this.Action_Click.bind(this,
              item.id,
              item.name,
              item.email,
              item.phone_number
            )}
          >
            {item.name}
          </Text>}
          style={{ marginTop: 10 }} />
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
 
  },
 
  row: {
    fontSize: 18,
    padding: 12
  },
 
  textInput: {
 
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: "#FFFF"
 
  }
});