import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Result = props => {
    return (
        <View style={styles.root}>
            <View style={styles.dataContainer}>
                <Text style={styles.topic}>No. of surveys: </Text>
                <Text style={{fontSize: 20, color: '#fff'}}>{props.data.total}</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.topic}>Avg. age of population: </Text>
                <Text style={{fontSize: 20, color: '#fff'}}>{props.data.population}</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.topic}>Avg. first smoking age: </Text>
                <Text style={{fontSize: 20, color: '#fff'}}>{props.data.smoking}</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.topic}>Avg. first drinking age: </Text>
                <Text style={{fontSize: 20, color: '#fff'}}>{props.data.drinking}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 20,
    },

    dataContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },

    topic: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#eedaa2',
    }
});

export default Result;