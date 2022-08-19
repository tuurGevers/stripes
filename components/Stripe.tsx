import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableHighlight, TouchableOpacity, View} from "react-native";

type props = {
    row: number;
    callback: any,
    RowState: boolean,

}

const Stripe = (props:props) => {
    const [alive, setAlive] = useState<boolean>(true);
    const [selected, setSelected] = useState<boolean>(false);
    useEffect(() =>{
        if(!props.RowState){
            setSelected(props.RowState)

        }
        }
    ,[props.RowState])

    const RowCheck = () =>{
        props.callback()
        setSelected(!selected)

    }
    const styles = StyleSheet.create({
        stripe: {
            backgroundColor: selected? '#ab0707': "#000",
            height:100,
            width:20,
            margin:20
        },
    });

    return (
        <TouchableOpacity onPress={()=> RowCheck()}>
            <View style={styles.stripe}>

            </View>
        </TouchableOpacity>
    );

};



export default Stripe;
