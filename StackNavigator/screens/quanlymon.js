import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import { Container, Header, Content, Tab, Tabs, List, ListItem } from 'native-base';
import Themmon from './tabs/themmon';
import { url } from './tabs/url';
import Icon from 'react-native-vector-icons/Ionicons';
export default class quanlymon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            refresh: false,
            dataSource: []
        }
    }

    Action_Click(idMon, TenMon, SoTinChi) {
        this.props.navigation.navigate("editMon", {
            idMon: idMon,
            TenMon: TenMon,
            SoTinChi: SoTinChi
        })
    }

    componentDidMount() {
        fetch(url + 'getdataMon.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson,
                })
            })
    }

    refresh() {
        this.setState({
            refresh: true
        })
        fetch(url + 'getdataMon.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson,
                    refresh: false
                })
            })
    }


    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.item}>
                <Icon name='book' size={30} backgroundColor="#f4511e" color="#fff"
                ></Icon>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginLeft: 10
                }}>
                    <Text>Môn học: {item.TenMon}</Text>
                    <Text>Số tín chỉ: {item.SoTinChi}</Text>
                </View>
                <View style={{
                    flexDirection: 'column'
                }}>
                    <TouchableOpacity onPress={this.Action_Click.bind(this,
                        item.idMon,
                        item.TenMon,
                        item.SoTinChi
                    )}><Text >Edit</Text></TouchableOpacity>
                </View>
            </View>
        )
    }


    render() {
        let { dataSource } = this.state

        return (
            <Container>
                <Tabs>
                    <Tab heading="Thêm Môn" >
                        <Themmon />
                    </Tab>
                    <Tab heading="Danh Sách Môn">

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