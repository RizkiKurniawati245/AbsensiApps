import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FormPengisian_3_1, HeaderFormAbsesni, ButtonBatal3, ButtonSelanjutnya3 } from '../../../components'
import { WARNA_SEKUNDER } from '../../../utils/constants'

const Form_absensi_3 = ({navigation}) => {
    return (
        <View>
            <ScrollView style={styles.containerScrollView}>
                <View style={styles.containerForm}>
                    <HeaderFormAbsesni text={"Langkah 3 / 5 : Mengisi Data OJT/Magang"}/>            
                    <FormPengisian_3_1/>                
                </View>
                <View style={styles.button}>
                    <ButtonBatal3 navigation={navigation}/>
                    <ButtonSelanjutnya3 navigation = {navigation}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Form_absensi_3

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