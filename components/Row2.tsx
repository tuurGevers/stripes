import React from 'react';
import Stripe from "./Stripe";
import {View} from "react-native";

type props = {
    RowState : boolean,
    callback:any,
}
const Row2 = (props: props) => {
    return (
        <View style={{
            flexDirection:"row"
        }}>
            <Stripe callback={props.callback} RowState={props.RowState} row={2}/>
            <Stripe callback={props.callback} RowState={props.RowState} row={2}/>
            <Stripe callback={props.callback} RowState={props.RowState} row={2}/>

        </View>
    );
};

export default Row2;
