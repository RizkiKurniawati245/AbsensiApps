import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA } from '../../../utils/constants'
import TemplateRow from '../TemplateRow'

class TableKesehatan extends Component {
    constructor(props){
        super(props);
        this.state={
            pertanyaan : [],
            answer : []
        }
    }

    _GetData = async () => {
        try{
            const fma_id = await AsyncStorage.getItem('fma_id');
                axios
                .get(`${LINK_API}Absensi/GetFormDeklarasiMahasiswa?fma_id=${fma_id}`)
                .then( res => {
                        this.setState({
                        data: [res.data]
                        })
                    })
            // const value = await AsyncStorage.getItem('fma_id');
            // fetch('http://10.0.2.2:8080/listTrforndeklarasimahasiswaByFmaId?fma_id='+value)
            // .then(response => response.json())
            // .then(json => {
            //     console.log("fma : "+value)
            //     this.setState({
            //         answer:json.data
            //     })
            // })
        }catch(error){
            console.log("ini error : "+ error);
        }
        
    }
    GetPertanyaan = () => {
        try{
            fetch('http://10.0.2.2:8080/listMspertanyaan')
            .then(response => response.json())
            .then(json => {
                //console.log(json.data)
                this.setState({
                    pertanyaan:json.data
                })
            })
        }catch(error){
            console.log("ini error : "+ error);
        }   
    }

    componentDidMount(){
        this._GetData();
        // this.GetPertanyaan();
      }
    render(){
        let equalizeData = this.state.answer.map((myValue, index) => {
            return(
                <View key={index}>
                    
                    <TemplateRow
                        no={myValue.per_id}
                        question={this.state.pertanyaan[index].per_deskripsi}
                        //question="Apakah pernah keluar rumah/tempat umum (pasar, fasyankes, kerumunan orang, dan lain-lain)?"
                        //answer="Tidak"
                        answer={myValue.fdm_jawaban}
                    />
                    <TemplateRow
                        no={myValue.per_id}
                        question="Apakah pernah menggunakan transportasi umum?"
                        answer="Tidak"
                        answer={myValue.fdm_jawaban}
                    />
                    <TemplateRow
                        no={myValue.per_id}
                        question="Apakah pernah melakukan perjalanan ke luar kota/internasional? (wilayah yang terjangkit/zona merah)"
                        answer="Tidak"
                        answer={myValue.fdm_jawaban}
                    />
                    <TemplateRow
                        no={myValue.per_id}
                        question="Apakah anda mengikuti kegiatan yang melibatkan orang banyak?"
                        answer="Tidak"
                        answer={myValue.fdm_jawaban}
                    />
                    <TemplateRow
                        no={myValue.per_id}
                        question="Apakah memiliki riwayat kontak erat dengan orang yang dinyatakan ODP, PDP atau konfirm COVID-19 (berjabat tangan, berbicara, berada dalam satu ruangan/satu rumah)?"
                        answer="Tidak"
                        answer={myValue.fdm_jawaban}
                    />
                    <TemplateRow
                        no={myValue.per_id}
                        question="Apakah pernah mengalami demam/batuk/pilek/sakit tenggorokan/sesak dalam 14 hari terakhir?"
                        answer="Tidak"
                        answer={myValue.fdm_jawaban}
                    />
                    <TemplateRow
                        no={myValue.per_id}
                        question="Apakah terdapat riwayat berkunjung dan/atau dikunjungi tamu (kerabat/keluarga berbeda rumah) dalam jangka waktu 14 hari terakhir?"
                        answer="Tidak"
                        answer={myValue.fdm_jawaban}
                    />
                </View>
            )
        });
        return (
            <View >
                <View style={styles.container}>
                    <View style={styles.viewNo}>
                        <Text style={styles.textNo}>No</Text>
                    </View>
                    <View style={styles.viewPertanyaan}>
                        <Text style={styles.textPertanyaan}>Pertanyaan</Text>
                    </View>
                    <View style={styles.viewJawaban}>
                        <Text style={styles.textJawaban}>Jawaban</Text>
                    </View>
                </View>
                {equalizeData}
            </View>
        )
    }
}

export default TableKesehatan

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:WARNA_UTAMA,
        padding:5
    },
    viewNo:{
        borderRightWidth:1,
        borderColor:WARNA_SEKUNDER,
        width:30,
        justifyContent:'center'
    },
    viewPertanyaan:{
        borderRightWidth:1,
        borderColor:WARNA_SEKUNDER,
        flex:1,
        alignItems:'stretch',
        alignSelf:'stretch'
    },
    viewJawaban:{        
        alignItems:'center',
        width:70,
    },
    textNo:{        
        textAlign:'center',
        color:WARNA_PUTIH,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
    textPertanyaan:{
        justifyContent:'space-around',
        textAlign:'center',
        color:WARNA_PUTIH,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
    textJawaban:{        
        textAlign:'center',
        color:WARNA_PUTIH,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
})
