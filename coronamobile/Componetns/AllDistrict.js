import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { StyleSheet,View,Text,ScrollView,FlatList,BackHandler } from 'react-native';


export default function District({history}){
    const [date,setDate] = useState('');
    const [result,setResult] = useState([]);
    useEffect(() =>{
        axios.get('https://corona-bd.herokuapp.com/district').then(res => {setDate(res.data.updated_on);setResult(res.data.data);}).catch(err => console.log('error to get dictrictwise data'));
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    
    });
    handleBackButton = () => {

        history.push('/')
    }
    const Item = ({ title,prev_count,count }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text>New Positive: {count-prev_count}</Text>
        </View>
      );
    const renderItem = ({ item }) => (
        <Item title={item.name} prev_count={item.prev_count} count={item.count} />
      );
    return(
        
        <View style={styles.container}>
                <Text style={styles.baseText}>All District Result</Text>
                <View><Text>Date: {date} </Text></View>
                <ScrollView>
                <FlatList
                    data={result}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    baseText: {
        fontWeight: 'bold', 
        fontSize: 20,
        padding:25,
        width:400,
        top:20
      },
      item: {
        backgroundColor: '#c8cccf',
        padding: 20,
        paddingLeft:40,
        paddingRight:40,
        marginVertical: 8,
        
        
      },
      title: {
        fontSize: 32,
      },
  });