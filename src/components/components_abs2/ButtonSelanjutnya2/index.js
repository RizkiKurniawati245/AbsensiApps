import React, {useState} from 'react'
import axios, { Axios } from 'axios'
import { AsyncStorage } from 'react-native'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WARNA_BIRU, WARNA_BIRU_MUDA, WARNA_HITAM, WARNA_PUTIH, LINK_API  } from '../../../utils/constants'

const ButtonSelanjutnya2 = ({
        navigation, sehat, sehatArr, keluargaOdp, odpArr, vaksin, penyakit
    }) => {

    const [nim, setNim] = useState('0320190027')
    const [idForm, setIdForm] = useState('172')

    const [kesehatan, setKesehatan] = useState('1')
    const [kesehatanDesc, setKesehatanDesc] = useState('-')
    const [kesehatanFam, setKesehatanFam] = useState('1')
    const [kesehatanFamDesc, setKesehatanFamDesc] = useState('-')
    const [covid, setCovid] = useState('0')
    const [covidDesc, setCovidDesc] = useState('-')
    const [covidArr, setCovidArr] = useState('0')

    const [covidArrDesc, setCovidArrDesc] = useState('-')
    const [riwayat, setRiwayat] = useState('7')
    const [sudahVaksin, setSudahVaksin] = useState('1')
    const [jumlahVaksin, setJumlahVaksin] = useState('2')
    const [namaVaksin, setNamaVaksin] = useState('2')
    const [sertifVaksin, setSertifVaksin] = useState('1')
    
    const PindahForm = () => {
        props.navigation.navigate('Form_absensi_3')
    }

    const handleSubmitPress = (astra, astraDesc, noHP, profesi, 
        kendaran, kendaraanDesc, rs, rsDesc) => {
        
        AsyncStorage.getItem('user', (error, result) => {
            if(result){
                //Parse result ke JSON
                let resultParsed = JSON.parse(result)
                // username = resultParsed.uname
                setNim(resultParsed.uname)
                console.log(nim)
                console.log(resultParsed.uname)

        // console.log(idForm);
        // console.log(nim);
        axios
            .get(`${LINK_API}Resiko/GetDataFormMahasiswaById?id=${nim}`)
            .then((res) => {
                // if(res.data.result === "SUCCESS") {

                    setIdForm(res.data[0].fma_id)
                    // idForm = res.data.fma_id;

                    console.log("coba 123 " + res.data[0].fma_id);
                    return;
            })
            .catch(error => alert(error))

            // console.log("coa 2 " + idForm);
        axios
            .post(`${LINK_API}Absensi/CreateAbsensi2?nim=${nim}&idForm=${idForm}&kesehatan=${kesehatan}
            &kesehatanDesc=${kesehatanDesc}&kesehatanFam=${kesehatanFam}&kesehatanFamDesc=${kesehatanFamDesc}
            &covid=${covid}&covidDesc=${covidDesc}&covidArr=${covidArr}&covidArrDesc=${covidArrDesc}
            &riwayat=${riwayat}&sudahVaksin=${sudahVaksin}&jumlahVaksin=${jumlahVaksin}
            &namaVaksin=${namaVaksin}&sertifVaksin=${sertifVaksin}`)
            .then((res) => {
                console.log("coba " + idForm);
                console.log("coba 55 " + res.data.result);
                if(res.data.result === "SUCCESS") {

                    navigation.navigate('Form_absensi_3')
                    // props.navigation.navigate('Form_absensi_3')
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
    });
}

    return (        
        <View  style={styles.button}>
            <TouchableOpacity
                // onPress={PindahForm}
                onPress={() => handleSubmitPress(
                    sehat.sehat, sehat.sehatDesc, sehatArr.sehatArr, sehatArr.sehatArrDesc, 
                    keluargaOdp.odp, keluargaOdp.odpDesc, odpArr.odpArr, odpArr.odpArrDesc,
                    vaksin.vaksin, vaksin.suntik, vaksin.NVaksin, vaksin.sertif,
                    penyakit.Hipertensi, penyakit.Diabetes, penyakit.Jantung, penyakit.Paru,
                    penyakit.Ginjal, penyakit.Lever, penyakit.Sakit,
                    )}
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