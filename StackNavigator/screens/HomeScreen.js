import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import { Container, Header, Content, Tab, Tabs, List, ListItem } from 'native-base';
import Tab1 from './tabs/tab1';
import Icon from 'react-native-vector-icons/Ionicons';
import { url } from './tabs/url';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      refresh: false,
      dataSource: []
    }
  }

  Action_Click(id, id_class, MaSV, name, image, email, phone_number) {
    this.props.navigation.navigate("Lane", {
      id: id,
      id_class: id_class,
      MaSV: MaSV,
      name: name,
      image: image,
      email: email,
      phone_number: phone_number
    })
  }

  componentDidMount() {
    fetch(url + 'getdataUsers.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
        })
      })
  }
  _renderItem = ({ item, index }) => {
    return (

      <View style={styles.item} >
        <Image
          source={{ uri: item.image }}
          style={{ width: 70, height: 70, margin: 5 }}
        >

        </Image>
        <View style={{
          flex: 1,
          flexDirection: 'column'
        }}>
          <Text>Mã sinh viên: {item.MaSV}</Text>
          <Text>Tên: {item.name}</Text>
          <Text>Lớp: {item.class_name}</Text>
          <Text>Email: {item.email}</Text>
          <Text>Phone Number: {item.phone_number}</Text>
        </View>
        <TouchableOpacity onPress={this.Action_Click.bind(this,
          item.id,
          item.id_class,
          item.MaSV,
          item.name,
          item.image,
          item.email,
          item.phone_number
        )}>
          <Text >Edit</Text>
        </TouchableOpacity>
      </View>
    )
  }
  refresh() {
    this.setState({
      refresh: true
    })
    fetch(url + 'getdataUsers.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
          refresh: false
        })
      })
  }

  render() {
    let { dataSource } = this.state

    return (
      <Container>
        <Tabs>
          <Tab heading="Thêm sinh viên" >
            <Tab1 />
          </Tab>
          <Tab heading="Danh sách sinh viên">

            <View style={styles.containerDatastudents}>
              <FlatList
                refreshing={this.state.refresh}
                onRefresh={() => { this.refresh() }}
                extraData={this.state.refresh}
                data={dataSource}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
              >
              </FlatList>

            </View>

          </Tab>
        </Tabs>
      </Container>
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
    flex: 1
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#009688',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  textitem: {
    color: "#fff",
  },
  MainContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff'
  }
})