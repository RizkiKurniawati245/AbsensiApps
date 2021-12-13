import React, { Component, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { ButtonBatal1, ButtonSelanjutnya1, FormPengisian_1_1, FormPengisian_1_2, FormPengisian_1_3, FormPengisian_1_4,
    FormPengisian_1_5,FormPengisian_1_6, HeaderFormAbsesni, InformasiDataDiri }
    from '../../../components'
import { LINK_API, WARNA_SEKUNDER } from '../../../utils/constants'
import axios, { Axios } from 'axios'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-dev'

function handleAdd(a){
    // console.log("cobaaa" + a)
};

// let astra = ''
// const kosTemen = (a, b) => {
//     console.log("Saya ganteng " + a + "  " + b)
//     // astra = a
//     this.setState({
//         astra : a
//     })
//     // return a
// };

// let astra = ''
function profesi(a, b){
    console.log("Profesi " + a + "  " + b)
    return a
};

function kendaraan(a, b){
    console.log("Kendaraan " + a + "  " + b)
    return a
};

function rSakit(a, b){
    console.log("RSakit " + a + "  " + b)
    return a
};

// const coba = (a, b) => {
//     this.setState({
//         astra : a,
//         astraDesc: b
//     })
// }

class Form_absensi_1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nim:'',
            nama:'',
            prodi:'',
            tingkat:'',
            status:'',
            hp:'',
            kelamin:'',
            astra:'',
            astraDesc:''
        } 
    }
    a = ''

    kosTemen(a, b){
        console.log("Kos Temen " + a + " " + b)
        // this.setState({
            astra: a
        // })
        // coba(a, b)
            // const coba = (a, b) => {
            //     this.setState({
            //         astra : a,
            //         astraDesc: b
            //     })
            // }
            // setInputState(event) {
            //     this.setState({
            //         term: event.target.value 
            //     })
            //   }

            // coba(a,b)
        return a;
    };

    componentDidMount() {
        let username = ''
        
        AsyncStorage.getItem('user', (error, result) => {
            if(result){
                //Parse result ke JSON
                let resultParsed = JSON.parse(result)
                username = resultParsed.uname
                console.log(username)

                axios
                .get(`${LINK_API}Absensi/GetDataInformasiMahasiswa?username=${username}`)
                .then((res) => {
                    if(res.data[0].result === "SUCCESS") {

                        this.setState({
                            nim:res.data[0].mhs_id,
                            nama:res.data[0].mhs_nama,
                            prodi:res.data[0].mhs_kon_nama,
                            tingkat:res.data[0].mhs_tingkat,
                            status:res.data[0].mhs_jalur,
                            hp:res.data[0].mhs_hp,
                            kelamin:res.data[0].mhs_jenis_kelamin
                        })
                        return;
                    }
                    else
                    {
                        alert('Gagal menambah data!');
                        return;
                    }
                })
                .catch(error => alert(error))
                return username;
            }
        });
    }

    render(){
        return (
        <View>
            <ScrollView style={styles.containerScrollView}>
                <View style={styles.containerForm}>
                    <HeaderFormAbsesni text={"Langkah 1 / 5 : Mengisi Data Diri dan Keluarga"}/>
                    <InformasiDataDiri nim={this.state.nim} 
                    nama={this.state.nama} nomor={this.state.hp} status={this.state.status}
                    prodi={this.state.prodi} tingkat={this.state.tingkat} />
                    <FormPengisian_1_1/>
                    <FormPengisian_1_2/>
                    <FormPengisian_1_3 callBack={this.kosTemen} />
                    <FormPengisian_1_4 callBack={profesi} callBack2={profesi} />
                    <FormPengisian_1_5 callBack={kendaraan} callBack2={kendaraan} />
                    <FormPengisian_1_6 callBack={rSakit} callBack2={rSakit} />
                </View>
                <View style={styles.button}>
                    {/* <ButtonBatal1/> */}
                    {/* <ButtonSelanjutnya1/> */}
                    <ButtonSelanjutnya1 navigation={this.props.navigation} kos={this.state.astra}
                    // prof={profesi} ken={kendaraan} rs={rSakit}
                    />
                </View>
            </ScrollView>
        </View>
    )
    }
    
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