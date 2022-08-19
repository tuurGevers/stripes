import React from 'react';
import {TouchableOpacity, View} from "react-native";
import Stripe from "./Stripe";

type props = {
    callback: any,
    RowState:boolean,
}
const Row1 = (props:props) => {
    const RowCheck = ()=>{

    }
    return (
        <View>
            <Stripe RowState={props.RowState} callback={props.callback} row={1}/>
        </View>
    );
};

export default Row1;
