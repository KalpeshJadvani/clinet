import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions ,TouchableOpacity} from 'react-native';
import config from '../../config';

class Post extends Component {

    constructor(){
        super();
        this.state = {
            screenWidth:Dimensions.get('window').width,
            liked:false,
        };
    }

    render() {

        console.log(this.props.item); 
        likeToggled = ()=> {
            this.setState({
                liked: !this.state.liked
            });
        }
        const imageHeight = Math.floor(Dimensions.get('window').width * 1.1);
        const imageSlection = this.props.item.index % 2 == 0
        ?"https://i.kym-cdn.com/entries/icons/facebook/000/010/346/gdggfjjgfjgfgg.jpg"
        :"https://i.pinimg.com/236x/ae/c6/09/aec609967eca57cda510ff45b795ae4a--oral-cancer-cavities.jpg"
          
        const imageUri = imageSlection;
        const heartIconColor = this.state.liked ? 'rgb(252,61,57)' : null ;


        return (
              <View style = {{flex:1 , width:100 +'%'}} >
                <View style = {styles.userBar}> 
                  <View  style = {{ flexDirection :'row', alignItems:'center'}}>
                   <Image style = { styles.userPic} source = {config.images.photo2} />
                     <Text style = {{marginLeft:10}}> Kalpesh</Text>
                    </View>
                   <View style = {{ alignContent:'center'}}> 
                       <Text style ={{fontSize:30}}>...</Text>
                    </View> 
                </View> 
                <TouchableOpacity activeOpacity={0.7 } aonPress={()=>{ likeToggled(); }}>
                    <Image  style={{width: this.state.width , height:410 }}
                    source = {{ uri : imageUri}}/>
                </TouchableOpacity>
                <View style = { styles.iconBar}>
                   <Image  style={[styles.icon,{ height:45, width:45, tintColor:heartIconColor}]} source = { config.images.heartIcon} />
                   <Image  style={[styles.icon,{ height:36, width:36}]}  source = { config.images.bubbleIcon} />
                   <Image  resizeMode='stretch'  style={[styles.icon,{ height:50, width:40}]}  source = { config.images.arrowIcon} />
                </View>
                <View style={ styles.iconBar}>
                <Image  style={[styles.icon,{ height:30, width:30}]}  source = { config.images.heartIcon} />
                <Text>123 Likes</Text>
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
        paddingHorizontal:10,
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
    },
    commentBar:{
        width:100 + "%",
        borderBottomColor :'rgb(233,233,233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default Post;
