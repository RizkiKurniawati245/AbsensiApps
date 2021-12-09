import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FormPengisian_2_1, HeaderFormAbsesni, FormPengisian_2_2 , FormPengisian_2_3,
    FormPengisian_2_4, FormPengisian_2_5, FormPengisian_2_6, FormPengisian_2_7, ButtonBatal2, ButtonSelanjutnya2} from '../../../components'

import { WARNA_SEKUNDER } from '../../../utils/constants'

const Form_absensi_2 = ({navigation}) => {
    return (
        <View>
            <ScrollView style={styles.containerScrollView}>
                <View style={styles.containerForm}>
                    <HeaderFormAbsesni text={"Langkah 2 / 5 : Mengisi Riwayat Kesehatan"}/>
                    <FormPengisian_2_1/>
                    <FormPengisian_2_2/>
                    <FormPengisian_2_3/>
                    <FormPengisian_2_4/>
                    <FormPengisian_2_6/>
                    <FormPengisian_2_5/>
                </View>
                <View style={styles.button}>
                    <ButtonBatal2 navigation={navigation}/>
                    <ButtonSelanjutnya2 navigation={navigation}/>
                </View>
            </ScrollView>
        </View>
        
    )
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