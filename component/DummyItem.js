import React, {useState} from "react";
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import { globalStyles } from "../styles/global";

const DummyItem = ({item,navigation, route })=>{
    return(
        <View style={styles.listCont}>
            <Text style={styles.listText}>{item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listCont:{
        padding:10,
        marginVertical:5,
        backgroundColor:'#333'
    },
    listText:{
        textAlign:'center',
        color:'#eee'
    }
})

export default DummyItem;