import React, {useState} from 'react'
import axios, { Axios } from 'axios'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WARNA_BIRU, WARNA_BIRU_MUDA, WARNA_HITAM, WARNA_PUTIH, LINK_API } from '../../../utils/constants'

const ButtonSelanjutnya4Kry = (props) => {
    
    // var pertanyaan = [];
    // var jawaban = [];
    const [pertanyaan, setPertanyaan] = useState('2')
    const [jawaban, setJawaban] = useState('Kode')
    const [nim, setNim] = useState('0320190027')
    const [idForm, setIdForm] = useState('2')
    const [total, setTotal] = useState('1')
    const [resiko, setResiko] = useState('Hijau')
    
    const PindahForm = () => {
        props.navigation.navigate('Form_absensi_5')
    }

    const handleSubmitPress = () => {
        for(let i = 0; i < 8; i++){
            axios
            .post(`${LINK_API}Absensi/CreateDeklarasi?nim=${nim}&idForm=${idForm}
            &pertanyaaan=${i}&jawaban=${jawaban}`)
            .then((res) => {
                if(res.data.result === "SUCCESS") {

                    let fma_id = res.data.fma_id;

                    // alert('Berhasil tambah data ' + fma_id);
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
        }

        axios
            .post(`${LINK_API}Absensi/CreateDeklarasiExt?nim=${nim}&idForm=${idForm}
            &total=${total}&resiko=${resiko}`)
            .then((res) => {
                if(res.data.result === "SUCCESS") {

                    let fma_id = res.data.fma_id;
                    let bom_total = res.data.bom_total;
                    let bom_resiko = res.data.bom_resiko;

                    props.navigation.navigate('Form_absensi_5')

                    // alert('Berhasil tambah data ' + fma_id + " " + bom_total);
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
            .catch(error => alert('Gagal'))
            .finally(() => setLoading(false));
        };

    return (        
        <View  style={styles.button}>
            <TouchableOpacity
                // onPress={PindahForm}
                onPress={handleSubmitPress}
                // onPress={() => Alert.alert("Selanjutnya")}
            >
                <Text style={styles.textButton}>SELANJUTNYA</Text>
            </TouchableOpacity>
        </View>                        
    )
}

export default ButtonSelanjutnya4Kry

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
