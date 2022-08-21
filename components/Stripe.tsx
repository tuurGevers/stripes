import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";

type props = {
    row: number;
    callback: any,
    RowState: boolean,
    alive: boolean,
    selectCallback:any,
    id:number

}

const Stripe = (props:props) => {
    const [selected, setSelected] = useState<boolean>(false);
    useEffect(() =>{
        if(!props.RowState){
            setSelected(props.RowState)
        }
        }
    ,[props.RowState])

    useEffect(() =>{
            setSelected(false)
        }
        ,[props.alive])

    const RowCheck = () =>{
        props.callback()
        setSelected(!selected)
        props.selectCallback(props.id)

    }
    const styles = StyleSheet.create({
        stripe: {
            backgroundColor: selected? '#ab0707': "#000",
            height:100,
            width:20,
            margin:20,
            display: props.alive? "flex": "none"
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
