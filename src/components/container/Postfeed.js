import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Post }  from '../presentation';
// import { JustText } from '../screens';

class Postfeed extends Component {

   renderPost(item){
    //    console.log(item);
       return <Post item = {item}/>
   }
   returnKey(item){
       return item.toString();
   }


    render() {
        return (
           <FlatList 
            data = { [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
            keyExtractor ={this.returnKey}
            renderItem ={ this.renderPost}
            />
        );
    }
}

export default Postfeed;
