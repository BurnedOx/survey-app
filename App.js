import React from 'react'
import { View, Button, StyleSheet } from 'react-native';
import ReconnectingWebsocket from 'reconnecting-websocket';
import Chart from './components/Chart';
import Result from './components/Result';
import SurveyForm from './components/SurveyForm';

const surveySocket = new ReconnectingWebsocket('wss://survey-analysis-django.herokuapp.com/ws/survey/');

export default function App() {
  const [report, setReport] = React.useState({
    total: 0,
    population: 0,
    smoking: 0,
    drinking: 0
  });

  React.useEffect(() => {
    surveySocket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setReport({
        ...report,
        total: data['totalSurvey'],
        population: data['population'],
        smoking: data['smoking'],
        drinking: data['drinking']
      });
    };
  })

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleHandler = () => setIsOpen(!isOpen);

  return (
    <View style={styles.container}>
      <Result data={report} />

      <Chart data={report} />

      <View style={styles.buttonContainer}>
        <Button title="Survey" onPress={toggleHandler} />
      </View>

      <SurveyForm visible={isOpen} toggle={toggleHandler} socket={surveySocket} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#473a12',
  },

  buttonContainer: {
    flex: 1
  }
});