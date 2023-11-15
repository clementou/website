import '../styles/Progress.css';
import circle from '../../assets/images/circle.png';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from 'react-native';

export default function Progress() {
  return (
    <div className="sidebar">
      <img src={circle} className="progress-circle" />
      <LinearGradient colors={['#CE3259', '#CCD7F6']} style={styles.background} />
    </div>
  );
}

const styles = StyleSheet.create({
  background: {
    height: 2020,
    width: 10,
  },
});