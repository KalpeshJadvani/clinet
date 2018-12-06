//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
class InstaClone extends Component {
    render() {
        return (
            <View style = {{ flex :1, width : 100 +"%", height : 100+"%"}}>
                <View  style={styles.tempNav}  >
                <Text> Instagrame</Text>
                </View> 
                <View style = {styles.userBar}> 
                  <View  style = {{ flexDirection :'row', alignItems:'center'}}>
                   <Image style = { styles.userPic} source = {require('../assets/ic_launcher.png')}  style={{ width: 40, height : 40}}/>
                     <Text style = {{marginLeft:10}}> Kalpesh</Text>
                    </View>
                   <View> 
                       <Text>...</Text>
                    </View> 
                </View>
                <Image  style={{width: 100 + "%", height:100 }}
                source = {{ uri : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"}}/>
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
    },
    userBar:{
        width:100 +"%",
        height:50,
        backgroundColor:'rgb(255,255,255)',
        flexDirection:'row',
        paddingHorizontal:20,
        justifyContent:'space-between'
    },
    userPic:{
        height:40,
        width:40,
        borderRadius:20,
    }
});
 {/* container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    }, */}
//make this component available to the app
export default InstaClone;
