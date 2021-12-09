import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WARNA_HITAM, WARNA_PUTIH, WARNA_UNGU_MUDA } from '../../../utils/constants'

const ButtonSelesai = () => {
    return (        
        <View  style={styles.button}>
            <TouchableOpacity
                onPress={() => Alert.alert("Selesai")}
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
