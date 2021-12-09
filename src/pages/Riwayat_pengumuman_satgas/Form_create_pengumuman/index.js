import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker'
// import ImagePicker from 'react-native-image-picker'
import * as ImagePicker from "react-native-image-picker"
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Button, Image, ScrollView } from 'react-native'
import { WARNA_BG_FORM, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH, WARNA_UNGU_MUDA } from '../../../utils/constants';
import react from 'react';
// import { Button } from 'react-native-paper';

const Form_create_pengumuman = (props) => {
    // export default class Form_create_pengumuman extends React.Component {

    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     photo: null,
    //   }      
    // }


    // const state = {
    //     photo: null,
    // };
    handleChoosePhoto = () => {
        const options = {
            noData: true, 
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log("response", response);
            if(response.uri){
                this.setState({ photo: response });
            }
        });
    };

     
    // render() {
        const [selectedValue, setSelectedValue] = useState("");
        // const [state, setState] = useState("");
        // const { photo } = this.state;
        // const props = this.props;
    return (
        <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>            
            {/* Dimanakah posisi Anda saat OJT/Magang/Bekerja? */}
             <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Subyek Pengumuman
                <Text style={styles.Mandatory}> *</Text>
                </Text>
                <TextInput
                    style={styles.textInput}                    
                    />
            </View>

            {/* Apakah saat ini Anda sedang OJT/Magang/Bekerja? */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Siapa yang bisa melihat Pengumuman?
                    <Text style={styles.Mandatory}> *</Text>
                </Text>
                <View style={styles.comboBox}>
                    <Picker
                        selectedValue={selectedValue}                                                
                        mode="dropdown"
                        backgroundColor={WARNA_PUTIH}
                        fontSize="13"
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="-- Pilih --" value="" />
                        <Picker.Item label="Mahasiswa" value="" />
                        <Picker.Item label="Karyawan" value="" />
                        <Picker.Item label="Semua" value="" />
                    </Picker>
                </View>
            </View>

            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Isi Pengumuman
                <Text style={styles.Mandatory}> *</Text>
                </Text>
                {/* {photo && ( */}
                    <Image
                    // source={{uri: photo.uri}}
                    style={{width: 300, height: 300}}
                    />
                {/* )} */}
                <Button title="Choose Photo" 
                    onPress={handleChoosePhoto}
                />
            </View>

            <View style={styles.button}>
                <TouchableOpacity
                    // onPress={()}
                >
                    <Text style={styles.text}>Simpan</Text>
                </TouchableOpacity>            
            </View>

            {/* <TouchableOpacity onPress = {set}>
                   <Image source = {iconUrl} style={{width: 
                       30, height: 30}} />
               </TouchableOpacity> */}
        </View>
        </ScrollView>
    )
//             }
}

export default Form_create_pengumuman

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