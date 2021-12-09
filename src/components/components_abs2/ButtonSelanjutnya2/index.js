import React, {useState} from 'react'
import axios, { Axios } from 'axios'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WARNA_BIRU, WARNA_BIRU_MUDA, WARNA_HITAM, WARNA_PUTIH, LINK_API  } from '../../../utils/constants'

const ButtonSelanjutnya2 = (props) => {

    const [nim, setNim] = useState('0320190003')
    const [idForm, setIdForm] = useState('2')

    const [kesehatan, setKesehatan] = useState('tes')
    const [kesehatanDesc, setKesehatanDesc] = useState('tes')
    const [kesehatanFam, setKesehatanFam] = useState('tes')
    const [kesehatanFamDesc, setKesehatanFamDesc] = useState('tes')
    const [covid, setCovid] = useState('tes')
    const [covidDesc, setCovidDesc] = useState('tes')
    const [covidArr, setCovidArr] = useState('tes')

    const [covidArrDesc, setCovidArrDesc] = useState('tes')
    const [riwayat, setRiwayat] = useState('-')
    const [sudahVaksin, setSudahVaksin] = useState('tes')
    const [jumlahVaksin, setJumlahVaksin] = useState('tes')
    const [namaVaksin, setNamaVaksin] = useState('tes')
    const [sertifVaksin, setSertifVaksin] = useState('tes')
    
    const PindahForm = () => {
        props.navigation.navigate('Form_absensi_3')
    }

    const handleSubmitPress = () => {
        // for(let i = 0; i < 8; i++){
        //     axios
        //     .post(`${LINK_API}Absensi/CreateKarDeklarasi?npk=${npk}&idForm=${idForm}
        //     &pertanyaaan=${i}&jawaban=${jawaban}`)
        //     .then((res) => {
        //         if(res.data.result === "SUCCESS") {

        //             let for_id = res.data.for_id;

        //             // alert('Berhasil tambah data ' + fma_id);
        //             return;
        //         }
        //         else
        //         {
        //             //notif gagal diubah
        //             console.log(error);
        //             alert('Gagal menambah data!');
        //             return;
        //         }    
        //     })
        //     .catch(error => alert(error))
        // }

        axios
            .post(`${LINK_API}Absensi/CreateAbsensi2?nim=${nim}&idForm=${idForm}&kesehatan=${kesehatan}
            &kesehatanDesc=${kesehatanDesc}&kesehatanFam=${kesehatanFam}&kesehatanFamDesc=${kesehatanFamDesc}
            &covid=${covid}&covidDesc=${covidDesc}&covidArr=${covidArr}&covidArrDesc=${covidArrDesc}
            &riwayat=${riwayat}&sudahVaksin=${sudahVaksin}&jumlahVaksin=${jumlahVaksin}
            &namaVaksin=${namaVaksin}&sertifVaksin=${sertifVaksin}`)
            .then((res) => {
                if(res.data.result === "SUCCESS") {

                    props.navigation.navigate('Form_absensi_3')
                    // alert('Berhasil tambah data ' + for_id + " " + bom_total);
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

export default ButtonSelanjutnya2

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