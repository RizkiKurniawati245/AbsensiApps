import React, { Component, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ButtonBatal1, ButtonSelanjutnya1, FormPengisian_1_1, FormPengisian_1_2, FormPengisian_1_3, FormPengisian_1_4,
    FormPengisian_1_5,FormPengisian_1_6, HeaderFormAbsesni, InformasiDataDiri }
    from '../../../components'
import { LINK_API, WARNA_SEKUNDER } from '../../../utils/constants'
import axios, { Axios } from 'axios'

function handleAdd(a){
    console.log("cobaaa" + a)
};

function alamatTinggal(alamat){
    console.log("Saya " + alamat)
};

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
            kelamin:''
        } 
    }
    
    componentDidMount() {
        axios
        .get(`${LINK_API}Absensi/GetDataInformasiMahasiswa?username=0320190027`)
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
    }

    render(){
        return (
        <View>
            <ScrollView style={styles.containerScrollView}>
                <View style={styles.containerForm}>
                    <HeaderFormAbsesni text={"Langkah 1 / 5 : Mengisi Data Diri dan Keluarga"}/>
                    <InformasiDataDiri callBack={handleAdd} nim={this.state.nim} 
                    nama={this.state.nama} nomor={this.state.hp} status={this.state.status}
                    prodi={this.state.prodi} tingkat={this.state.tingkat} />
                    <FormPengisian_1_1 alamatTinggal={alamatTinggal}/>
                    <FormPengisian_1_2/>
                    <FormPengisian_1_3/>
                    <FormPengisian_1_4/>
                    <FormPengisian_1_5/>
                    <FormPengisian_1_6/>
                </View>
                <View style={styles.button}>
                    {/* <ButtonBatal1/> */}
                    {/* <ButtonSelanjutnya1/> */}
                    <ButtonSelanjutnya1 navigation={this.props.navigation} />
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