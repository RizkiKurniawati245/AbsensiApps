import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { ButtonKembali, Form_1, Form_2, Form_3, Form_4 } from '../../../components'
import { WARNA_PUTIH } from '../../../utils/constants'


class Form_absensi_detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [],
            value : ""
        }
    }
    _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('fma_id');
          if (value !== null) {
            // We have data!!
            console.log("fma_id is : "+ value);
            fetch('http://10.0.2.2:8080/listTrformabsensimahasiswaByFmaId?fma_id='+value)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({
                    data:json.data,
                    value : value
                })
            })
          }
        } catch (error) {
          // Error retrieving data
          console.log(error);
        }
      };
      
    componentDidMount(){
        this._retrieveData();
    }
    render() {
        return(
            <View style={ styles.page }>
                <ScrollView style={styles.containerScrollView}>
                    <View>
                        <View style={styles.form}>
                            <Form_1 data={this.state.data}/>                
                        </View>
                        <View style={styles.form}>
                            <Form_2 data={this.state.data}/>
                        </View>
                        <View style={styles.form}>
                            <Form_3 data={this.state.data}/>                
                        </View>
                        <View style={styles.form}>
                            <Form_4/>                
                        </View>            
                        <View style={styles.buttonKembali}>
                            <ButtonKembali/>
                        </View>            
                    </View>
                </ScrollView>
            </View>
        )
        
    }
}

export default Form_absensi_detail

const styles = StyleSheet.create({
    form:{
        borderWidth:0.2,
        paddingHorizontal:5,
        borderRadius:3,
        marginBottom:10
    },
    buttonKembali:{
        alignItems:'flex-end',
        marginBottom:5
    },
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH,
    },
    containerScrollView:{
        paddingHorizontal:13
    }
})
