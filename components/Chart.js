import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width - 20

const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientTo: '#dfaa13',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16
    }
}

const Chart = props => {
    const data = {
        labels: ['Population', '1st Smoking', '1st Drinking'],
        datasets: [{
            data: [props.data.population, props.data.smoking, props.data.drinking]
        }]
    }

    return (
        <View style={styles.root}>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={styles.graph}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 2
    },
    graph: {
        marginVertical: 8,
        borderRadius: 16
    }
});

export default Chart;