import React from 'react';
import { StyleSheet, Modal, View, TextInput, Text, Button } from 'react-native';

const SurveyForm = props => {
    const [inputData, setInputData] = React.useState({
        name: '',
        age: '',
        smoking: '',
        drinking: ''
    });

    const onChangeHandler = (key, value) => setInputData({ ...inputData, [key]: value });

    async function onSubmitHandler() {
        await props.socket.send(JSON.stringify(inputData));
        setInputData({
            name: '',
            age: '',
            smoking: '',
            drinking: ''
        });
        props.toggle();
    };

    const submitDisabled = inputData.name === ''
        || inputData.age === ''
        || parseInt(inputData.age) > 100
        || parseInt(inputData.smoking) > 100
        || parseInt(inputData.drinking) > 100
        || parseInt(inputData.smoking) > parseInt(inputData.age)
        || parseInt(inputData.drinking) > parseInt(inputData.age)

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={props.visible}
        >
            <View style={styles.backdrop}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Text style={{ fontWeight: 'bold' }}>Name: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Your Name"
                            value={inputData.name}
                            onChangeText={(text) => onChangeHandler('name', text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={{ fontWeight: 'bold' }}>Age: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Your Age"
                            value={inputData.age}
                            onChangeText={(text) => onChangeHandler('age', text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={{ fontWeight: 'bold' }}>First smoking age: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="First smoking age"
                            value={inputData.smoking}
                            onChangeText={(text) => onChangeHandler('smoking', text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={{ fontWeight: 'bold' }}>First drinking age: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="First drinking age"
                            value={inputData.drinking}
                            onChangeText={(text) => onChangeHandler('drinking', text)}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Submit" onPress={onSubmitHandler} disabled={submitDisabled} />
                        <Button title="Cancel" color="salmon" onPress={props.toggle} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },

    container: {
        width: 300,
        height: 500,
        paddingVertical: 30,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },

    inputContainer: {
        flex: 1,
        marginHorizontal: 10,
    },

    input: {
        height: 40,
        marginTop: 5,
        paddingHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },

    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});

export default SurveyForm;