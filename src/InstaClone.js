//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions ,TouchableOpacity} from 'react-native';
import config from './config';



// create a component
class InstaClone extends Component {

  
    constructor(){
        super();

        this.state = {
            screenWidth:Dimensions.get('window').width
        };

    }

   

    render() {
   
        const imageHeight = Math.floor(Dimensions.get('window').width * 1.1);
        

        const imageUri = "https://i.kym-cdn.com/entries/icons/facebook/000/010/346/gdggfjjgfjgfgg.jpg";

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
                   <View style = {{ alignContent:'center'}}> 
                       <Text style ={{fontSize:30}}>...</Text>
                    </View> 
                </View>
                <TouchableOpacity onPress={()=>(alert('press'))}>
                    <Image  style={{width: this.state.width , height:410 }}
                    source = {{ uri : imageUri}}/>
                </TouchableOpacity>
                <View style = { styles.iconBar}>
                   <Image  style={[styles.icon,{ height:45, width:45, tintColor:'rgb(252,61,57)'}]} source = { config.images.heartIcon} />
                   <Image  style={[styles.icon,{ height:36, width:36}]}  source = { config.images.bubbleIcon} />
                   <Image  style={[styles.icon,{ height:50, width:40}]}  source = { config.images.arrowIcon} />
                </View>
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
        height:config.stayleConstants.rowHeight,
        backgroundColor:'rgb(255,255,255)',
        flexDirection:'row',
        paddingHorizontal:20,
        justifyContent:'space-between'
    },
    userPic:{
        height:40,
        width:40,
        borderRadius:20,
    },
    iconBar:{
        height:config.stayleConstants.rowHeight,
        width:100 + "%",
        borderBottomColor :'rgb(233,233,233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection:'row',
        alignItems:'center',
    },
    icon :{
       
         marginLeft:5,
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
