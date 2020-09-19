
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image,Button} from 'react-native';
import { Badge } from 'react-native-elements';
import axios from 'axios';
export default function Home({history}) {
    const [result,setResult] = useState({
        confirmed:'',recovered:'',deaths:'',date:''
    })
    useEffect(()=>{
        axios.get('https://covid19.mathdro.id/api').then(res => setResult({confirmed:res.data.confirmed.value,recovered:res.data.recovered.value,deaths:res.data.deaths.value,date:res.data.lastUpdate}))
    })
  return (
    
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/coronatrack.png')} />
            
            
            <View >
                <Text style={styles.baseText}>World Wide Result</Text>
                
            </View>
            <View><Text>Date: {result.date.slice(0,10)} Update Time:{result.date.slice(11,16)}</Text></View>
            
            <View style={styles.worldview}>
                
                <View style={styles.resultbox}>
                    <Text>Total ConFirmed:</Text>
                    <View>
                        <Badge value=".." status="warning" />
                        <Text>{result.confirmed}</Text>
                    </View>
                </View>
                <View style={styles.resultbox}>
                    <Text>Total ReCovered:</Text>
                    <View>
                        
                        <Badge value="++" status="success" />
                        <Text>{result.recovered}</Text>
                    </View>
                </View>
                <View style={styles.resultbox}>
                    <Text>Total Deaths:</Text>
                    
                    <View>
                        <Badge value="-" status="error" />
                        <Text>{result.deaths}</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.worldview2}>
                <View style={styles.resultbox2}><Text>New ConFirmed: {((result.recovered*100)/result.confirmed).toFixed(2)}%</Text></View>
                <View style={styles.resultbox2}><Text>Deaths: {((result.deaths*100)/result.confirmed).toFixed(2)}%</Text></View>
            </View>
            
            <View style={styles.buttonaction}>
                <View style={styles.buttonrvrs}><Button title="Search BY Country" onPress={()=>history.push('/search')} color="#da674e"/></View>
                <View style={styles.buttonrvrs}><Button title="Bangladesh" onPress={()=>history.push('/bd')}  color="#117304"/></View>
            </View>
        </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height: 150,
    width: 400,
    bottom:50,
  },
  worldview:{
      top:25,
      flexDirection: 'row',
  },
  worldview2:{
    top:35,
    flexDirection: 'row',
},
  baseText: {
    fontWeight: 'bold', 
    fontSize: 20,
    
    
  },
  example: {
    marginVertical: 24,
    width: 300,
    top:5,
  },
  resultbox:{
    padding: 24,
    backgroundColor: "#eaeaea",
    alignItems:'center',
    //   height:300,
    //   width:100,
  },
  resultbox2:{
    padding: 24,
    backgroundColor: "#fbd0c7",
    alignItems:'center',
    //   height:300,
    //   width:100,
  },
  buttonaction:{
    flexDirection: 'row',
    width:300,
    },
    buttonrvrs:{
        flex: 1,
        top: 50,
    }
});
