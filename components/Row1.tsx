import React from 'react';
import { View} from "react-native";
import Stripe from "./Stripe";

type props = {
    callback: any,
    RowState:boolean,
    alive: boolean,
    selectCallback:any
}
const Row1 = (props:props) => {

    return (
        <View>
            <Stripe selectCallback={props.selectCallback} id={1} alive={props.alive} RowState={props.RowState} callback={props.callback} row={1}/>
        </View>
    );
};

export default Row1;
