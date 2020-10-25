import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import { url } from './tabs/url';
export default class chitietlop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      refresh: false,
      dataSource: [],
      TextInputIdClass: '',
      TextInputClassName: '',
    }
  }

  componentDidMount() {
    this.setState({
      TextInputIdClass: this.props.route.params.id_class,
      TextInputClassName: this.props.route.params.class_name
    });
    fetch(url + 'getdataUserbyIdclass.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        // Getting the id.
        id_class: this.props.route.params.id_class
      })

    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
          refresh: false
        })
      })
  }
  _renderItem = ({ item, index }) => {
    return (

      <TouchableOpacity style={styles.item}>
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
          <Text>Lớp: {this.state.TextInputClassName}</Text>
          <Text>Email: {item.email}</Text>
          <Text>Phone Number: {item.phone_number}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  refresh() {
    this.setState({
      refresh: true,
      TextInputIdClass: this.props.route.params.id_class,
      TextInputClassName: this.props.route.params.class_name
    });
    fetch(url + 'getdataUserbyIdclass.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        // Getting the id.
        id_class: this.props.route.params.id_class
      })

    }).then((response) => response.json())
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