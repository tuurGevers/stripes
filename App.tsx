import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import Row3 from "./components/Row3";
import {useState} from "react";

export default function App() {
    const [row1, setRow1] = useState(false)
    const [row2, setRow2] = useState(false)
    const [row3, setRow3] = useState(false)

    const Row1Check = () =>{
        setRow1(true)
        setRow2(false)
        setRow3(false)
    }
    const Row2Check = () =>{
        setRow1(false)
        setRow2(true)
        setRow3(false)
    }
    const Row3Check = () =>{
        setRow1(false)
        setRow2(false)
        setRow3(true)
    }
  return (
    <View style={styles.container}>
          <Row1 RowState={row1} callback={Row1Check}/>
          <Row2 RowState={row2} callback={Row2Check}  />
          <Row3 RowState={row3} callback={Row3Check}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
      alignItems:"center"
  },
});
