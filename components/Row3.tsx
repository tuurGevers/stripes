import React from 'react';
import Stripe from "./Stripe";
import {View} from "react-native";

type props = {
    RowState : boolean,
    callback:any,
    alive:any,
    selectCallback:any

}

const Row3 = (props:props) => {

    return (
        <View style={{
            flexDirection:"row"
        }}>
            <Stripe selectCallback={props.selectCallback} id={5} alive={props.alive[0]}  callback={props.callback} RowState={props.RowState} row={3}/>
            <Stripe selectCallback={props.selectCallback} id={6} alive={props.alive[1]} callback={props.callback} RowState={props.RowState} row={3}/>
            <Stripe selectCallback={props.selectCallback} id={7} alive={props.alive[2]} callback={props.callback} RowState={props.RowState} row={3}/>
            <Stripe selectCallback={props.selectCallback} id={8} alive={props.alive[3]} callback={props.callback} RowState={props.RowState} row={3}/>
            <Stripe selectCallback={props.selectCallback} id={9} alive={props.alive[4]} callback={props.callback} RowState={props.RowState} row={3}/>
        </View>
    );
};

export default Row3;
