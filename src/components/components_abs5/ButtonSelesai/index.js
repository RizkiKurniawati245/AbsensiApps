import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WARNA_HITAM, WARNA_PUTIH, WARNA_UNGU_MUDA, LINK_API } from '../../../utils/constants'
import { notifikasi } from '../Notifikasi'
import axios, { Axios } from 'axios'

const ButtonSelesai = (props) => {
    const PindahForm = () => {
        notifikasi.configure();
        notifikasi.buatChannel("1");
        notifikasi.kirimNotifikasi("1", "Percobaan", "Isi pesan");
        props.navigation.navigate('Form_absensi_sudah')
    }
    return (        
        <View  style={styles.button}>
            <TouchableOpacity
                onPress={PindahForm}
                // onPress={() => Alert.alert("Selesai")}
            >
                <Text style={styles.textButton}>SELESAI</Text>
            </TouchableOpacity>
        </View>     
    )
}

export default ButtonSelesai

const styles = StyleSheet.create({    
    button:{
        backgroundColor:WARNA_UNGU_MUDA,
        width:85,
        height:25,
        justifyContent:'center',
    },
    textButton:{
        color:WARNA_PUTIH,
        textAlign:'center',
        fontFamily:"Poppins-Light",
        fontSize:13
    },    
})
