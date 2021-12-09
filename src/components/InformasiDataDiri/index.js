import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_HITAM } from '../../utils/constants'

const InformasiDataDiri = ({nim, nama, prodi, tingkat, status, beasiswa, nomor}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    NIM - Nama
                </Text>
                <Text style={styles.textBody}>
                    0320190027 - Satria Adjie Prayoga
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    Program Studi - Tingkat
                </Text>
                <Text style={styles.textBody}>
                   Manajemen Informatika (MI) - Tingkat 2
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    Status Mahasiswa 
                </Text>
                <Text style={styles.textBody}>
                    Aktif - Reguler
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    Nomor Handphone
                </Text>
                <Text style={styles.textBody}>
                    0896 3768 8078
                </Text>
            </View>
        </View>
    )
}

export default InformasiDataDiri

const styles = StyleSheet.create({
    container:{

    },
    textContainer:{

    },
    textHeader:{
        color:WARNA_HITAM,
        fontSize:13,
        fontFamily:"Poppins-Bold",
        marginBottom:-5
    },
    textBody:{        
        color:WARNA_HITAM,
        fontSize:13,
        fontFamily:"Poppins-Light"
    }
})