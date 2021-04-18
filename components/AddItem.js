import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {
    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue);
    return (
        <View>
            <TextInput placeholder="Add Item..."
                onChangeText={onChange}
                style={StyleSheet.input} 
            />
            <TouchableOpacity 
                style={styles.btn}
                onPress={() => addItem(text)}>
                <Text style={styles.btnText}>
                    <Icon style={styles.btnIco} name="plus" size={20} />
                    Add Item 
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 9,
        margin: 5,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    btnText: {
        backgroundColor: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    },
    btnIco:{
     
    }
})

export default AddItem;
