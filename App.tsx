import {Button, StyleSheet, View} from 'react-native';
import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import Row3 from "./components/Row3";
import {useState} from "react";

function App(){
    const [row1, setRow1] = useState(false)
    const [row2, setRow2] = useState(false)
    const [row3, setRow3] = useState(false)
    const [alive,setAlive] = useState([
        true, true, true , true, true, true ,true, true, true
    ])
    const [player1, setPlayer1] = useState(true)

    const [selected, setSelected] = useState<number[]>([])

    const handleSelect = (id:number)=>{
        if( id in selected){
            setSelected(selected.splice(id, 1))
        }else{
            setSelected([...selected, id])
        }
    }

    const handleRestart = ()=>{
        setAlive([
            true, true, true , true, true, true ,true, true, true
        ])
        setPlayer1(true)
    }

    const handleAlive = ()=>{
        let tempAlive = alive
        selected.map((id:number)=>{
            tempAlive[id-1] = false
        })
        setAlive(tempAlive)
        setSelected([])
        let trueCount = 0
        alive.map((id)=>{
            id? trueCount++ : trueCount += 0
        })
        if(trueCount== 0){
            if(player1){
                alert("player 2 has won")
            }else{
                alert("player 1 has won")
            }
        }
        setPlayer1(!player1)
    }


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
          <Row1 selectCallback={handleSelect} alive={alive[0]} RowState={row1} callback={Row1Check}/>
          <Row2 selectCallback={handleSelect} alive={[alive[1], alive[2], alive[3]]} RowState={row2} callback={Row2Check}  />
          <Row3 selectCallback={handleSelect} alive={[alive[4], alive[5], alive[6], alive[7], alive[8]]} RowState={row3} callback={Row3Check}/>
          <Button title="confirm" onPress={handleAlive}/>
          <Button title="restart" onPress={handleRestart}/>

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
