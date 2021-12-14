// import React from 'react'
// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native'
import React, {useState, createRef, useEffect} from 'react'
import axios, { Axios } from 'axios'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WARNA_BIRU, WARNA_BIRU_MUDA, WARNA_HITAM, WARNA_PUTIH, LINK_API } from '../../../utils/constants'

const ButtonSelanjutnya1 = ({navigation, kos}) => {
    // let tinggal = ''

    // console.log("Saya ganteng 2 " + kos)

    const [step, setStep] = useState('Step 1')
    const [nim, setNim] = useState('0320190077')
    const [tinggal, setTinggal] = useState('Jakarta')
    const [posisi, setPosisi] = useState('Bandung')
    const [astra, setAstra] = useState('y')
    const [astraDesc, setAstraDesc] = useState('-')
    const [noHP, setNohp] = useState('0821764723')
    const [profesi, setProfesi] = useState('-')
    const [kendaraan, setKendaraan] = useState('t')
    const [kendaraanDesc, setKendaraanDesc] = useState('-')
    const [rs, setRS] = useState('t')
    const [rsDesc, setRSDesc] = useState('-')

    const PindahForm = () => {
        let astra = kos
        console.log("BtnSelanjutnya " + JSON.stringify({kos}))
        
        // AsyncStorage.getItem('provinsi', (error, result) => {
        //     if(result){
        //         //Parse result ke JSON
        //         let resultParsed = JSON.parse(result)
        //         tinggal = resultParsed.myProvinsi
        //     }
        //     else 
        //     {
        //         // tinggal = 5;
        //     }
        // });

        // alert('Berhasil tambah data ' + tinggal + ' data');
        navigation.navigate('Form_absensi_2')
    }

    const handleSubmitPress = () => {
        
        AsyncStorage.getItem('user', (error, result) => {
            if(result){
                //Parse result ke JSON
                let resultParsed = JSON.parse(result)
                // username = resultParsed.uname
                setNim(resultParsed.uname)
                console.log(nim)
                console.log(resultParsed.uname)

        axios
            .post(`${LINK_API}Absensi/CreateAbsensi?nim=${nim}&tempatTinggal=${tinggal}
            &posisi=${posisi}&astra=${astra}&astraDesc=${astraDesc}&noHp=${noHP}&profesi=${profesi}
            &kendaraan=${kendaraan}&kendaraanDesc=${kendaraanDesc}&RS=${rs}&RSDesc=${rsDesc}`)
            .then((res) => {
                console.log(res.data)
                if(res.data.result === "SUCCESS") {
                    // let step = res.data.step;
                    let fma_id = res.data.fma_id;
                
                    // let data = {
                    //     step: step,
                    //     nim: nim
                    // }

                    //notif kalo berhasil diubah
                    // alert('Berhasil tambah data ' + tinggal);
                    
                    navigation.navigate('Form_absensi_2')

                    return;
                }
                else
                {
                    //notif gagal diubah
                    console.log(error);
                    alert('Gagal menambah data!');
                    return;
                }    
            })
            .catch(error => alert(error))
            // .finally(() => setLoading(false));
            };
    });
}
            
    return (
        <View  style={styles.button}>
            <TouchableOpacity
                onPress={handleSubmitPress}
                // onPress={PindahForm}
                // onPress={() => Alert.alert("Selanjutnya")}
            >
                <Text style={styles.textButton}>SELANJUTNYA</Text>
            </TouchableOpacity>
        </View>                        
    )
}

export default ButtonSelanjutnya1

const styles = StyleSheet.create({    
    button:{
        backgroundColor:WARNA_BIRU_MUDA,
        width:100,
        height:25,
        justifyContent:'center',
        marginLeft:5
    },
    textButton:{
        color:WARNA_PUTIH,
        textAlign:'center',
        fontFamily:"Poppins-Light",
        fontSize:13
    },
    keterangan:{
        justifyContent:'center',
        marginLeft:9
    },
    textKeterangan:{
        color:WARNA_HITAM,
        textAlign:'center',
        fontFamily:"Poppins-Light",
        fontSize:13
    },
})