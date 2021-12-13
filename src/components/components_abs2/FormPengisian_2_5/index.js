import React, { useState } from 'react'
import {StyleSheet, Text, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { WARNA_BG_FORM, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH } from '../../../utils/constants';


const FormPengisian_2_5 = ({callBack, callBack2, callBack3, callBack4, callBack5, callBack6, callBack7}) => {
    const [isSelected, setSelection] = useState(false);
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [isSelected5, setSelection5] = useState(false);
    const [isSelected6, setSelection6] = useState(false);

    return (
        <View style={styles.container}>            
            {/* Apakah Anda menderita penyakit di bawah ini? */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Apakah Anda menderita penyakit di bawah ini?
                    <Text style={styles.Mandatory}> *</Text>
                </Text>
                
                {/* Hipertensi */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={(isSelected) => setSelection(callBack(isSelected))}
                    />
                    <Text style={styles.label}>Hipertensi</Text>
                </View>

                {/* Diabetes */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected1}
                        onValueChange={(isSelected1) => setSelection1(callBack2(isSelected1))}
                    />
                    <Text style={styles.label}>Diabetes</Text>
                </View>

                {/* Jantung */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected2}
                        onValueChange={(isSelected2) => setSelection2(callBack3(isSelected2))}
                    />
                    <Text style={styles.label}>Jantung</Text>
                </View>

                {/* Gangguan Paru-Paru (Misalnya : Asma) */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected3}
                        onValueChange={(isSelected3) => setSelection3(callBack4(isSelected3))}
                    />
                    <Text style={styles.label}>Gangguan Paru-Paru (Misalnya : Asma)</Text>
                </View>

                {/* Ginjal */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected4}
                        onValueChange={(isSelected4) => setSelection4(callBack5(isSelected4))}
                    />
                    <Text style={styles.label}>Ginjal</Text>
                </View>

                {/* Lever */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected5}
                        onValueChange={(isSelected5) => setSelection5(callBack6(isSelected5))}
                    />
                    <Text style={styles.label}>Lever</Text>
                </View>

                {/* Tidak ada satupun  tertera di atas */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected6}
                        onValueChange={(isSelected6) => setSelection6(callBack7(isSelected6))}
                    />
                    <Text style={styles.label}>Tidak ada satupun  tertera di atas</Text>
                </View>
            </View>
        </View>
    )
}

export default FormPengisian_2_5

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
    checkboxContainer: {        
        height:25,
        flexDirection: "row",
        alignItems:'center'
    },    
    label: {
        fontFamily:"Poppins-Light",
        fontSize:13
    },
})
