import React from 'react';
import Stripe from "./Stripe";
import {View} from "react-native";

type props = {
    RowState : boolean,
    callback:any,
    alive: any,
    selectCallback:any

}
const Row2 = (props: props) => {

    return (
        <View style={{
            flexDirection:"row"
        }}>
            <Stripe selectCallback={props.selectCallback} id={2} alive={props.alive[0]} callback={props.callback} RowState={props.RowState} row={2}/>
            <Stripe selectCallback={props.selectCallback} id={3} alive={props.alive[1]} callback={props.callback} RowState={props.RowState} row={2}/>
            <Stripe selectCallback={props.selectCallback} id={4} alive={props.alive[2]} callback={props.callback} RowState={props.RowState} row={2}/>

        </View>
    );
};

export default Row2;
