import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FormPengisian_1_2, FormPengisian_1_3,FormPengisian_1_4,
    FormPengisian_1_5, FormPengisian_1_6, FormPengisian_2_1, FormPengisian_2_2, FormPengisian_2_3,
    FormPengisian_2_4, FormPengisian_2_5, FormPengisian_2_6, HeaderFormAbsesni, InformasiDataDiri, ButtonSelanjutnya1 }
    from '../../../components'


import { WARNA_SEKUNDER } from '../../../utils/constants'

const Form_absensi_1 = () => {
    return (
        <View>
            <ScrollView style={styles.containerScrollView}>
                <View style={styles.containerForm}>            
                    <HeaderFormAbsesni text={"Langkah 1 / 5 : Mengisi Data Diri dan Keluarga"}/>
                    <InformasiDataDiri/>
                    <FormPengisian_1_2/>
                    {/* <FormPengisian_1_3/> */}
                    {/* <FormPengisian_1_4/> */}
                    <FormPengisian_2_1/>
                    <FormPengisian_2_2/>
                    <FormPengisian_2_3/>
                    <FormPengisian_2_4/>
                    <FormPengisian_1_5/>
                    <FormPengisian_1_6/>
                    <FormPengisian_2_6/>
                    <FormPengisian_2_5/>
                </View>
                <View style={styles.button}>
                    {/* <ButtonBatal1/> */}
                    <ButtonSelanjutnya1/>
                </View>
            </ScrollView>
        </View>
        
    )
}

export default Form_absensi_1

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
    },
    containerScrollView:{
        paddingHorizontal:13
    }
})
