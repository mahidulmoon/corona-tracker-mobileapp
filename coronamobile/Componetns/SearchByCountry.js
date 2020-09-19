import React,{useState,useEffect} from 'react';
import { StyleSheet,View,Text,KeyboardAvoidingView,TextInput,TouchableHighlight,Alert,Button } from 'react-native';
import axios from 'axios';
import { Badge } from 'react-native-elements';
export default function SearchByCounty({history}){
    const [inputvalue,setInputvalue] = useState('');
    const [countryResult,setCountryResult] = useState({
        confirmed:'',recovered:'',deaths:'',date:''
    })
    searchButton= () =>{
        axios.get(`https://covid19.mathdro.id/api/countries/${inputvalue}/`).then(res => setCountryResult({confirmed:res.data.confirmed.value,recovered:res.data.recovered.value,deaths:res.data.deaths.value,date:res.data.lastUpdate})).catch(err => Alert.alert("Alert","Please Check the country name") )
    }
    return(
        <View style={styles.container}>
            <Text style={styles.baseText}>Search Your Country</Text>
            <KeyboardAvoidingView>
                <TextInput
                    style={{ width:330,  borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setInputvalue(text)}
                    value={inputvalue}
                />
                <TouchableHighlight onPress={searchButton}>
                    <View style={styles.button}>
                    <Text>Touch Here</Text>
                    </View>
                </TouchableHighlight>
                <Text style={styles.baseText}>{inputvalue}</Text>
                <View style={styles.worldview2}>
            
                <View style={styles.resultbox2}>
                    <Text>Total ConFirmed:</Text>
                    <View>
                        <Badge value="+" status="warning" />
                        <Text>{countryResult.confirmed}</Text>
                    </View>
                </View>
                <View style={styles.resultbox2}>
                    <Text>Total ReCovered:</Text>
                    
                    <View>
                        
                        <Badge value="++" status="success" />
                        <Text>{countryResult.recovered}</Text>
                    </View>
                </View>
                <View style={styles.resultbox2}>
                    <Text>Total Deaths:</Text>
                    
                    <View>
                        <Badge value="-" status="error" />
                        <Text>{countryResult.deaths}</Text>
                    </View>
                </View>

            </View>
            </KeyboardAvoidingView>
            <View style={ styles.bottomView}>
                <Button  title="Home" onPress={()=>history.push('/')}/>
            </View>
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
        padding:10,
        
        
      },
      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        top:10,
      },
        worldview2:{
            top:35,
            flexDirection: 'row',
        },
        resultbox2:{
            padding: 14,
            backgroundColor: "#fbd0c7",
            alignItems:'center',
            bottom:20,
            //   height:300,
            //   width:100,
          },
          bottomView:{
 
            width: '100%', 
            height: 50, 
             
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'absolute',
            bottom: 0
          },
})