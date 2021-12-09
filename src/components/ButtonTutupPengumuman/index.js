import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WARNA_PUTIH, WARNA_UNGU_MUDA } from '../../utils/constants'

const ButtonTutupPengumuman = () => {
    return (
        <View style={styles.button}>
            <TouchableOpacity
                onPress={() => Alert.alert('Tutup')}
            >
                <Text style={styles.text}>TUTUP</Text>
            </TouchableOpacity>            
        </View>
    )
}

export default ButtonTutupPengumuman

const styles = StyleSheet.create({
    button:{
        backgroundColor:WARNA_UNGU_MUDA,
        justifyContent: 'center', 
        alignItems: 'center',
        width:75,
        height:25
    },
    text:{
        fontFamily:"Poppins-Light",
        textAlign:'center',
        alignSelf:'center',
        color:WARNA_PUTIH
    }
})
