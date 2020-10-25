import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { url } from './url';
export default class themlop extends Component {
    state = {
        PickerValueHolder: '',
        classname: '',
        isLoading: true
    }
    handleClassName = (text) => {
        this.setState({ classname: text })
    }
    insertclass = (classname) => {
        fetch(url + 'insertLop.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                class_name: classname,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                Alert.alert(responseJson);
            }).catch((error) => {
                console.error(error);
            })
        this.setState({ classname: '' })
    }
    render() {
        return (
            <View style={styles.container, { flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>

                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Lớp..."
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={this.handleClassName}
                        value={this.state.classname}
                    />

                    <View style={styles.contenButton}>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={
                                () => this.insertclass(this.state.classname)
                            }
                        >
                            <Text style={styles.submitButtonText}>SAVE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={
                                () => this.setState({ classname: '' })
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
