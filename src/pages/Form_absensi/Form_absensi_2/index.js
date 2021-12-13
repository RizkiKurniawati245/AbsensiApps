import React, { Component, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FormPengisian_2_1, HeaderFormAbsesni, FormPengisian_2_2 , FormPengisian_2_3,
    FormPengisian_2_4, FormPengisian_2_5, FormPengisian_2_6, FormPengisian_2_7, ButtonBatal2, ButtonSelanjutnya2} from '../../../components'

import { WARNA_SEKUNDER } from '../../../utils/constants'

// let astra = ''
function kosTemen(a, b){
    console.log("Saya ganteng " + a + "  " + b)
    return a
};

class Form_absensi_2 extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View>
                <ScrollView style={styles.containerScrollView}>
                    <View style={styles.containerForm}>
                        <HeaderFormAbsesni text={"Langkah 2 / 5 : Mengisi Riwayat Kesehatan"}/>
                        <FormPengisian_2_1 callBack={kosTemen} callBack2={kosTemen} />
                        <FormPengisian_2_2 callBack={kosTemen} callBack2={kosTemen} />
                        <FormPengisian_2_3 callBack={kosTemen} callBack2={kosTemen} />
                        <FormPengisian_2_4 callBack={kosTemen} callBack2={kosTemen} />
                        <FormPengisian_2_6 callBack={kosTemen} callBack2={kosTemen} callBack3={kosTemen} callBack4={kosTemen}/>
                        <FormPengisian_2_5 callBack={kosTemen} callBack2={kosTemen} callBack3={kosTemen} callBack4={kosTemen}
                             callBack5={kosTemen} callBack6={kosTemen} callBack7={kosTemen}
                        />
                    </View>
                    <View style={styles.button}>
                        <ButtonBatal2 navigation={this.props.navigation}/>
                        <ButtonSelanjutnya2 navigation={this.props.navigation}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Form_absensi_2

const styles = StyleSheet.create({
    containerForm:{
        borderWidth:1,
        borderColor:WARNA_SEKUNDER,
        borderRadius:3,
        paddingHorizontal:8
    },
    button:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginVertical:5
    } 
})