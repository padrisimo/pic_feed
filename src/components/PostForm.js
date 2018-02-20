import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';


export default class PostForm extends Component {
    constructor() {
        super();
        this.state = {
            topic: ''
        }
        this.submit = this.submit.bind(this)
    }
    submit() {
        this.props.onNewTopic(this.state.topic.toLowerCase())
        this.setState({ topic: '' })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.txtInput}
                    placeholder="enter another topic"
                    onChangeText={topic => this.setState({ topic })}
                    value={this.state.topic}
                />
                <TouchableHighlight 
                    style={styles.button} 
                    onPress={this.submit} >
                    <Text style={styles.btnTxt}> Serch </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

PostForm.propTypes = {
    onNewTopic: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'lightgrey',
        paddingTop: 20,
        height: 70,
    },
    txtInput: {
        flex: 1,
        margin: 5,
        padding: 5,
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 5,
        backgroundColor: 'snow'
    },
    button: {
        backgroundColor: 'indigo',
        margin: 5,
        borderWidth: 1,
        borderRadius: 5
    },
    btnTxt: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 20
    }
});