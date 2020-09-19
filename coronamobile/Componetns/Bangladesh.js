import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Badge } from 'react-native-elements';
import axios from 'axios';
export default function Bangladesh({history}){
    const [result,setResult] = useState({
        totaldeath: '',death24:'',totalpositive:'',positive24:'',totalrecovered:'',recovered24:'',totaltest:'',test24:'',date:''
    })
    useEffect(() =>{
        axios.get('https://corona-bd.herokuapp.com/stats').then(res=> setResult({totaldeath:res.data.death.total,death24:res.data.death.last24,totalpositive:res.data.positive.total,positive24:res.data.positive.last24,totalrecovered:res.data.recovered.total,recovered24:res.data.recovered.last24,totaltest:res.data.test.total,test24:res.data.test.last24,date:res.data.updated_on})).catch(err=>console.log('error to get worlddata'));
    })
    return(
        <View style={styles.container}>
            <View >
                <Text style={styles.baseText}>Inside Bangladesh</Text>
                
            </View>
            <View><Text>Date: {result.date.slice(0,10)} Update Time:{result.date.slice(11,16)}</Text></View>
            
            <Text style={styles.baseText}>Last 24 Hours</Text>
            
            <View style={styles.worldview2}>
            <View style={styles.resultbox2}>
                    <Text>Total Test:</Text>
                    <View>
                        <Badge value="." status="primary" />
                        <Text>{result.test24}</Text>
                    </View>
                </View>
                <View style={styles.resultbox2}>
                    <Text>Total ConFirmed:</Text>
                    <View>
                        <Badge value="+" status="warning" />
                        <Text>{result.positive24}</Text>
                    </View>
                </View>
                <View style={styles.resultbox2}>
                    <Text>Total ReCovered:</Text>
                    
                    <View>
                        
                        <Badge value="++" status="success" />
                        <Text>{result.recovered24}</Text>
                    </View>
                </View>
                <View style={styles.resultbox2}>
                    <Text>Total Deaths:</Text>
                    
                    <View>
                        <Badge value="-" status="error" />
                        <Text>{result.death24}</Text>
                    </View>
                </View>

            </View>
            <Text style={styles.baseText}>Untile Now</Text>
            <View style={styles.worldview}>
                <View style={styles.resultbox}>
                    <Text>Total Test:</Text>
                    <View>
                        <Badge value="." status="primary" />
                        <Text>{result.totaltest}</Text>
                    </View>
                </View>
                <View style={styles.resultbox}>
                    <Text>Total ConFirmed:</Text>
                    <View>
                        <Badge value=".." status="warning" />
                        <Text>{result.totalpositive}</Text>
                    </View>
                </View>
                <View style={styles.resultbox}>
                    <Text>Total ReCovered:</Text>
                    <View>
                        
                        <Badge value="++" status="success" />
                        <Text>{result.totalrecovered}</Text>
                    </View>
                </View>
                <View style={styles.resultbox}>
                    <Text>Total Deaths:</Text>
                    
                    <View>
                        <Badge value="-" status="error" />
                        <Text>{result.totaldeath}</Text>
                    </View>
                </View>
                
            </View>
            <View style={styles.buttonaction}>
                <View style={styles.buttonrvrs}><Button title="All District List" onPress={()=>history.push('/district')}  color="#0282ca"/></View>
                <View style={styles.buttonrvrs}><Button title="Back" onPress={()=>history.push('/')}  color="#9ad1f0"/></View>
            </View>
            <View></View>
            <View style={{flexDirection: 'row',width:300,top:10}}>
                <View style={styles.buttonrvrs}><Button title="Refresh" onPress={()=>axios.get('https://corona-bd.herokuapp.com/stats').then(res=> setResult({totaldeath:res.data.death.total,death24:res.data.death.last24,totalpositive:res.data.positive.total,positive24:res.data.positive.last24,totalrecovered:res.data.recovered.total,recovered24:res.data.recovered.last24,totaltest:res.data.test.total,test24:res.data.test.last24,date:res.data.updated_on})).catch(err=>console.log('error to get worlddata'))}  color="#da674e"/></View>
                
            </View>
            
        </View>
    )
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
      padding:10,
      
      
    },
    example: {
      marginVertical: 24,
      width: 300,
      top:5,
    },
    resultbox:{
      padding: 14,
      backgroundColor: "#eaeaea",
      alignItems:'center',
      //   height:300,
      //   width:100,
    },
    resultbox2:{
      padding: 14,
      backgroundColor: "#fbd0c7",
      alignItems:'center',
      bottom:20,
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
  