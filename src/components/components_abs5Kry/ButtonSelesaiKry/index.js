import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WARNA_HITAM, WARNA_PUTIH, WARNA_UNGU_MUDA } from '../../../utils/constants'

const ButtonSelesaiKry = (props) => {
    const [idForm, setIdForm] = useState('3')
    const [result, setResult] = useState('SUCCESS')

    const PindahForm = () => {
        axios
        .get(`${LINK_API}Resiko/GetResikoMahasiswaById?id=${idForm}`)
        .then((res) => {
            // console.log(res.data)
            console.log(res.data[0].result)
            
            if(res.data[0].result === "SUCCESS") {

                let bom_total = res.data[0].bom_total;
                let bom_resiko = res.data[0].bom_resiko;
                // let bom_resiko = "Hijau";

                notifikasi.configure();
                // notifikasi.buatChannel("3");
                notifikasi.kirimNotifikasi("2", "Resiko ditempat anda", bom_resiko);
                // notifikasi.kirimNotifikasi("2", "Resiko ditempat anda", bom_resiko);
                props.navigation.navigate('Form_absensi_sudah')

                // alert('Berhasil tambah data ' + bom_resiko);
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
    return (        
        <View  style={styles.button}>
            <TouchableOpacity
                onPress={PindahForm}
                // onPress={() => Alert.alert("Selesai")}
            >
                <Text style={styles.textButton}>SELESAI</Text>
            </TouchableOpacity>
        </View>     
    )
}

export default ButtonSelesaiKry

const styles = StyleSheet.create({    
    button:{
        backgroundColor:WARNA_UNGU_MUDA,
        width:85,
        height:25,
        justifyContent:'center',
    },
    textButton:{
        color:WARNA_PUTIH,
        textAlign:'center',
        fontFamily:"Poppins-Light",
        fontSize:13
    },    
})
