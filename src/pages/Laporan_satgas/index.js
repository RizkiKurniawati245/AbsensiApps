// import React from 'react'
// import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { ButtonIsiFormulir, HeaderApps, HeaderInformation, InformasiPengisian, NotifPengisian } from '../../components'
// import { WARNA_BG_FORM, WARNA_MERAH, WARNA_PUTIH, WARNA_SEKUNDER } from '../../utils/constants'

// //let rolget = '';

// const Laporan_satgas = ({hasAbsen=false, navigation}) => (

// // const [rolen, setRolen] = useState('');
// // const data = "Hello Everyone";

// //     AsyncStorage.getItem('user', (error, result) => {
// //         if(result){
// //             //Parse result ke JSON
// //             let resultParsed = JSON.parse(result)
// //             rolget = resultParsed.role;
// //         }
// //     });

//     //const myFunction = () => {
//         // if (rolget == "ROL23"){
//         //     setRolen('Mahasiswa');
//         //     //rolen => setRolen(rolen)        
//         // }
//         // else if (rolget== "ROL01"){
//         //     setRolen('Karyawan');
//         //     //rolen => setRolen(rolen) 
//         // }
//     //}

//     // return (
//         <View style={ styles.page }>            
//             <ScrollView  style={styles.containerScroll}>
//                 <View style={styles.container}>
//                     <Text style={styles.textUtama}>
//                         Selamat Datang!{"\n\n"}
//                         Ini merupakan halaman beranda untuk Satgas.{"\n\n"}
                        
//                     </Text>
//                     {/* <InformasiPengisian data={data} />  */}
//                     <InformasiPengisian /> 
//                     {/* NOTIFIKASI PENGISIAN AKAN AKTIF JIKA SUDAH MENGISI FORMULIR*/}
//                     {/* BUTTON ISI FORMULIR AKAN AKTTIF JIKA BELUM MENGISI FORMULIR */}
//                     {hasAbsen == true ? <NotifPengisian/>  : <ButtonIsiFormulir navigation = {navigation}/>}
//                     <Text style={styles.textKesulitan}>
//                         Jika terdapat kesulitan tentang cara penggunaan aplikasi ini, silahkan menghubungi MIS / Bang Candra.
//                     </Text>
//                 </View>                 
//             </ScrollView>
//         </View>
//     // );
// );

// export default Laporan_satgas

// const styles = StyleSheet.create({
//     page:{ 
//         flex: 1, 
//         backgroundColor:WARNA_PUTIH,        
//     },
//     containerScroll:{        
//         height:300
//     },
//     container:{
//         marginHorizontal:23,
//         marginBottom:10,        
//         paddingTop:10
//     },
//     textUtama:{
//         fontFamily:'Poppins-Light',
//         fontSize:12
//     },
//     textKesulitan:{
//         fontFamily:'Poppins-Light',
//         fontSize:13,
//         marginTop:10,
//         borderTopWidth:1,
//         borderColor:WARNA_SEKUNDER,
//         paddingTop:10
//     }
// })

import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ButtonIsiFormulir, HeaderApps, HeaderInformation, InformasiPengisian, NotifPengisian } from '../../components'
import { WARNA_BG_FORM, WARNA_MERAH, WARNA_PUTIH, WARNA_SEKUNDER } from '../../utils/constants'

let rolget = '';

const Laporan_satgas = ({hasAbsen=false, navigation}) => {

// const [rolen, setRolen] = useState('');
// const data = "Hello Everyone";

//     AsyncStorage.getItem('user', (error, result) => {
//         if(result){
//             //Parse result ke JSON
//             let resultParsed = JSON.parse(result)
//             rolget = resultParsed.role;
//         }
//     });

    //const myFunction = () => {
        // if (rolget == "ROL23"){
        //     setRolen('Mahasiswa');
        //     //rolen => setRolen(rolen)        
        // }
        // else if (rolget== "ROL01"){
        //     setRolen('Karyawan');
        //     //rolen => setRolen(rolen) 
        // }
    //}

    return (
        <View style={ styles.page }>            
            <ScrollView  style={styles.containerScroll}>
                <View style={styles.container}>
                    <Text style={styles.textUtama}>
                        
                        Ini halaman laporan untuk Satgas.{"\n\n"}
                        
                    </Text>
                </View>                 
            </ScrollView>
        </View>
    )
}

export default Laporan_satgas

const styles = StyleSheet.create({
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH,        
    },
    containerScroll:{        
        height:300
    },
    container:{
        marginHorizontal:23,
        marginBottom:10,        
        paddingTop:10
    },
    textUtama:{
        fontFamily:'Poppins-Light',
        fontSize:12
    },
    textKesulitan:{
        fontFamily:'Poppins-Light',
        fontSize:13,
        marginTop:10,
        borderTopWidth:1,
        borderColor:WARNA_SEKUNDER,
        paddingTop:10
    }
})