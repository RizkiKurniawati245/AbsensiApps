import React, { Component, useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import { AsyncStorage } from 'react-native'
import axios, { Axios } from 'axios'
import {StyleSheet, Text, TextInput, View } from 'react-native'
import { WARNA_BG_FORM, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH, WARNA_SEKUNDER, LINK_API } from '../../../utils/constants'
import InformasiTinggalBersama from '../InformasiTinggalBersama'
//import { createStore } from 'redux'
//export const Provinsi = id_provinsi;

class FormPengisian_1_1 extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: "coba"
    //     };
    // }
    state = {
        selectedValue:'',
        provinsi:[],
        selectedProvinsi:'',
        kotakabupaten:[],
        selectedKotakabupaten:'',
        kecamatan:[],
        selectedKecamatan:'',
        kelurahan:[],
        selectedKelurahan:''
    }
    GetDataProvinsi = () => {
        // axios
        //     .get(`${LINK_API}Lokasi/GetListProvinsi`)
        //     .then((res) => {
        //         if(res.data.result === "SUCCESS") {
        //             // let step = res.data.step;
        //             // let kpo_provinsi = res.data.kpo_provinsi;
        //             console.log(res.data.kpo_provinsi)
        //             this.setState({
        //                 provinsi:res.data.kpo_provinsi
        //             })
        //             return;
        //         }
        //     })
        //     .catch(error => alert(error))
        // fetch('https://kodepos-2d475.firebaseio.com/list_propinsi.json?print=pretty')
        fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
        .then(response => response.json())
        .then(json => {
            console.log(json.provinsi)
            this.setState({
                provinsi:json.provinsi
            })
        })
    }
    GetDataKotaKabupaten = (id_provinsi) => {
        axios
        .get(`${LINK_API}Lokasi/GetListKota?id1=${id_provinsi}`)
        .then((res) => {

            if(res.data.result === "SUCCESS") {
                // let step = res.data.step;
                // let kpo_provinsi = res.data.kpo_provinsi;
                this.setState({
                    provinsi:res.data.kpo_provinsi
                })
                return;
            }
        })
        .catch(error => alert(error))

        // fetch('https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi='+id_provinsi)
        // .then(response => response.json())
        // .then(json => {
        //     console.log("Kab"+json.kota_kabupaten)
        //     this.setState({
        //         kotakabupaten:json.kota_kabupaten
        //     })
        //     // id_provinsi = '0123813334'
        //     setProvinsi(id_provinsi)

        //     id_provinsi = 'DKI Jakarta'
        //     let provinsi = {
        //         myProvinsi: id_provinsi
        //     }
        //     AsyncStorage.setItem('provinsi', JSON.stringify(provinsi));
        // })
    }
    GetDataKecamatan = (id_provinsi, id_kota) => {
        axios
        .get(`${LINK_API}Lokasi/GetListKecamatan?id1=${id_provinsi}&id2=${id_kota}`)
        .then((res) => {

            if(res.data.result === "SUCCESS") {
                // let step = res.data.step;
                // let kpo_provinsi = res.data.kpo_provinsi;
                this.setState({
                    provinsi:res.data.kpo_kecamatan
                })
                return;
            }
        })
        .catch(error => alert(error))
        // fetch('https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota='+id_kota)
        // .then(response => response.json())
        // .then(json => {
        //     console.log(json.kecamatan)
        //     this.setState({
        //         kecamatan:json.kecamatan
        //     })
        //     // id_kota = '1'
        //     // setKabupaten(id_kota)
        // })
    }
    GetDataKelurahan = (id_provinsi, id_kota, id_kecamatan) => {
        axios
        .get(`${LINK_API}Lokasi/GetListKota?id1=${id_provinsi}&id2=${id_kota}&id3=${id_kecamatan}`)
        .then((res) => {

            if(res.data.result === "SUCCESS") {
                // let step = res.data.step;
                // let kpo_provinsi = res.data.kpo_provinsi;
                this.setState({
                    provinsi:res.data.kpo_desa_kelurahan
                })
                return;
            }
        })

        // fetch('https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan='+id_kecamatan)
        // .then(response => response.json())
        // .then(json => {
        //     console.log(json.kelurahan)
        //     this.setState({
        //         kelurahan:json.kelurahan
        //     })
        // })
    }
    componentDidMount() {
        this.GetDataProvinsi()        
    }

    render(){
        let myProvinsi = this.state.provinsi.map((myValue,myIndex)=>{
            return(
                // <Picker.Item label={myValue.id + ' - ' + myValue.nama} value={myValue.id} key={myIndex}/>
                <Picker.Item label={myValue.nama} value={myValue.id} key={myIndex}/>
            )
        });
        let myKotakabupaten = this.state.kotakabupaten.map((myValue,myIndex)=>{
            return(
                // <Picker.Item label={myValue.id + ' - ' + myValue.nama} value={myValue.id} key={myIndex}/>
                <Picker.Item label={myValue.nama} value={myValue.id} key={myIndex}/>
            )
        });
        let myKecamatan = this.state.kecamatan.map((myValue,myIndex)=>{
            return(
                // <Picker.Item label={myValue.id + ' - ' + myValue.nama} value={myValue.id} key={myIndex}/>
                <Picker.Item label={myValue.nama} value={myValue.id} key={myIndex}/>
            )
        });
        let myKelurahan = this.state.kelurahan.map((myValue,myIndex)=>{
            return(
                // <Picker.Item label={myValue.id + ' - ' + myValue.nama} value={myValue.id} key={myIndex}/>
                <Picker.Item label={myValue.nama} value={myValue.id} key={myIndex}/>
            )
        });
        
        // let uname = res.data.username;
        // let pass = res.data.password;
        // let name = res.data.nama;
        // let address = res.data.alamat;
        // let rol_id = res.data.rol_id;
    
        // let tinggal = {
        //     myProvinsi: myProvinsi,
        //     myKotakabupaten: myKotakabupaten,
        //     myKecamatan: myKecamatan,
        //     myKelurahan: myKelurahan
        // }
        // AsyncStorage.setItem('tinggal', JSON.stringify(tinggal)); 
        // console.log(myProvinsi)

        return (
            <View style={styles.container}>
    
                {/* Informasi pengisian */}
                <View style={styles.containerQuestion}>
                <InformasiTinggalBersama/>
                    <Text style={styles.textHeader}>
                    
                    </Text>
                    <Text style={styles.textHeader}>
                    Tinggal bersama siapa dan di mana Anda saat ini?
                        <Text style={styles.Mandatory}> *</Text>
                    </Text>
                    {/* <InformasiTinggalBersama/> */}
                </View>
    
                {/* Pilihan Anda */}
                <View style={styles.containerQuestion}>
                    {/* <Text style={styles.textHeader}>
                    Pilihan Anda 
                        <Text style={styles.Mandatory}> *</Text>
                    </Text> */}
                    <View style={styles.comboBox}>
                        <Picker
                            selectedValue={this.state.selectedValue}
                            mode="dropdown"
                            backgroundColor={WARNA_PUTIH}
                            fontSize="13"                            
                        >
                            <Picker.Item label="-- Pilih --" value="" />
                            <Picker.Item label="Keluarga (Orang Tua/Kakak/Adik)" value="1" />
                            <Picker.Item label="Kerabat (Bukan Keluarga Inti)" value="2" />
                            <Picker.Item label="Kos/Kontrakan (Bukan dengan Keluarga/Kerabat)" value="3" />
                            <Picker.Item label="Mess Perusahaan (Site)" value="4" />
                            <Picker.Item label="Lainnya" value="5" />
                        </Picker>
                    </View>
                </View>
    
                {/* Nama Jalan/Blok/RT dan RW */}
                <View style={styles.containerQuestion}>
                    <Text style={styles.textHeader}>
                    Nama Jalan/Blok/RT dan RW 
                        <Text style={styles.Mandatory}> *</Text>
                    </Text>
                    <TextInput 
                            style={styles.textInput}
                            // value={data}
                        />
                </View>
    
                {/* Provinsi */}
                <View style={styles.containerQuestion}>
                    <Text style={styles.textHeader}>
                    Provinsi 
                        <Text style={styles.Mandatory}> *</Text>
                    </Text>
                    <View style={styles.comboBox}>
                        <Picker
                            selectedValue={this.state.selectedProvinsi} 
                            onValueChange={
                                (value)=>this.setState(
                                    {selectedProvinsi:value},
                                    this.GetDataKotaKabupaten(value),
                                    this.GetDataKecamatan(-1),
                                    this.GetDataKelurahan(-1)
                                )
                            }
                            mode="dropdown"
                            backgroundColor={WARNA_PUTIH}
                            fontSize="13"
                        >
                            <Picker.Item label="-- Pilih --" value="" />
                            {myProvinsi}
                        </Picker>
                    </View>
                </View>
    
                {/* Kota/Kabupaten */}
                <View style={styles.containerQuestion}>
                    <Text style={styles.textHeader}>
                    Kota/Kabupaten 
                        <Text style={styles.Mandatory}> *</Text>
                    </Text>
                    <View style={styles.comboBox}>
                        <Picker
                            selectedValue={this.state.selectedKotakabupaten} 
                            onValueChange={
                                (value)=>this.setState(
                                    {selectedKotakabupaten:value},
                                    this.GetDataKecamatan(value),                                    
                                    this.GetDataKelurahan(-1)
                                )
                            }
                            mode="dropdown"
                            backgroundColor={WARNA_PUTIH}
                            fontSize="13"                            
                        >
                            <Picker.Item label="-- Pilih --" value="" />
                            {myKotakabupaten}
                        </Picker>
                    </View>
                </View>

                {/* Kecamatan */}
                <View style={styles.containerQuestion}>
                    <Text style={styles.textHeader}>
                    Kecamaatan 
                        <Text style={styles.Mandatory}> *</Text>
                    </Text>
                    <View style={styles.comboBox}>
                        <Picker
                            selectedValue={this.state.selectedKecamatan} 
                            onValueChange={
                                (value)=>this.setState({selectedKecamatan:value},
                                this.GetDataKelurahan(value))
                            }                                             
                            mode="dropdown"
                            backgroundColor={WARNA_PUTIH}
                            fontSize="13"                            
                        >
                            <Picker.Item label="-- Pilih --" value="" />
                            {myKecamatan}
                        </Picker>
                    </View>
                </View>
    
                {/* Desa/Kelurahan */}
                <View style={styles.containerQuestion}>
                    <Text style={styles.textHeader}>
                    Desa/Kelurahan 
                        <Text style={styles.Mandatory}> *</Text>
                    </Text>
                    <View style={styles.comboBox}>
                        <Picker
                            selectedValue={this.state.selectedKelurahan} 
                            onValueChange={
                                (value)=>this.setState({selectedKelurahan:value})                     
                            }                                              
                            mode="dropdown"
                            backgroundColor={WARNA_PUTIH}
                            fontSize="13"                            
                        >
                            <Picker.Item label="-- Pilih --" value="" />
                            {myKelurahan}
                        </Picker>
                    </View>
                </View>
            </View>
        )
    }    
}

export default FormPengisian_1_1

const styles = StyleSheet.create({
    container:{
        backgroundColor:WARNA_BG_FORM,
        borderRadius:3,
        padding:10,
        marginVertical:5
    },
    containerQuestion:{
        marginVertical:5,
    },
    comboBox:{
        color:WARNA_HITAM,        
        borderRadius:3,        
        overflow:'hidden'        
    },    
    textHeader:{
        fontFamily:"Poppins-SemiBold",
        fontSize:13,
        color:WARNA_HITAM
    },
    Mandatory:{
        fontFamily:"Poppins-SemiBold",
        fontSize:13,
        color:WARNA_MERAH
    },
    textBody:{
        fontFamily:"Poppins-Light",
        fontSize:13,
        color:WARNA_HITAM
    },
    textInput:{                
        backgroundColor:WARNA_PUTIH,
        borderRadius:3,
        paddingLeft:10,
        textAlignVertical:'center'
    },
})