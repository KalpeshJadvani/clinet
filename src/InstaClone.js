
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions ,TouchableOpacity} from 'react-native';

import  { Postfeed }   from './components/container';


class InstaClone extends Component {

    render() {
        return (
            <View style = {{ flex :1, width : 100 +"%", height : 100+"%"}}>
                <View  style={styles.tempNav}  >
                <Text> Instagrame</Text>
                </View> 
                <Postfeed />
            </View>
        );
    }
}  

// define your styles
const styles = StyleSheet.create({
    tempNav : {
        width: 100 + "%", 
        height:56, 
        marginTop: 20, 
        backgroundColor : 'rgb(250,250,250)', 
        borderBottomColor :'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default InstaClone;
