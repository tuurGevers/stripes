import React from 'react';
import Stripe from "./Stripe";
import {View} from "react-native";

type props = {
    RowState : boolean,
    callback:any,
}

const Row3 = (props:props) => {
    return (
        <View style={{
            flexDirection:"row"
        }}>
            <Stripe  callback={props.callback} RowState={props.RowState} row={3}/>
            <Stripe  callback={props.callback} RowState={props.RowState} row={3}/>
            <Stripe  callback={props.callback} RowState={props.RowState} row={3}/>
            <Stripe  callback={props.callback} RowState={props.RowState} row={3}/>
            <Stripe  callback={props.callback} RowState={props.RowState} row={3}/>
        </View>
    );
};

export default Row3;
