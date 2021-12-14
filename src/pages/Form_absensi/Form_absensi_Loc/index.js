// React Native Geolocation
// https://aboutreact.com/react-native-geolocation/

// import React in our code
import React, {useState, useEffect} from 'react';
import axios, { Axios } from 'axios'
import { LINK_API } from '../../../utils/constants'
import { ButtonSelanjutnyaLoc } from '../../../components'

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Button,
} from 'react-native';

//import all the components we are going to use.
import Geolocation from '@react-native-community/geolocation';

const Form_absensi_Loc = ({navigation}) => {
    const [
      nim,
      setNim
    ] = useState('0320190024');
    const [
      idForm,
      setIdForm

    ] = useState('2');

    const [
      address,
      setAddress
    ] = useState('Jawa Barat');
    const [
      address2,
      setAddress2
    ] = useState('Bekasi');
    const [
      address3,
      setAddress3
    ] = useState('Cikarang Selatan');
  const [
    currentLongitude,
    setCurrentLongitude
  ] = useState('...');
  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState('...');
  const [
    locationStatus,
    setLocationStatus
  ] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const GetDataAlamat = (currentLongitude, currentLatitude) => {
      // fetch(`http://api.positionstack.com/v1/reverse?access_key=cf0f4bbc3eed44be9983e456c7cb24f1& 
      // query=${currentLatitude},${currentLongitude}`)
      // .then(response => response.json())
      // .then(json => {
      //     console.log(currentLongitude + " " + currentLatitude)
          
      //     // alert('Gagal menambah data!');
      //     // this.setState({
      //     //     address:json.county
      //     // })
      // })
  }

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = 
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);
        
        //Setting Longitude state
        setCurrentLatitude(currentLatitude);

        // GetDataAlamat(currentLatitude, currentLongitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };
  
    const PindahForm = () => {
        // alert(nim + ' ' + idForm + ' ' + currentLongitude + '  ' + currentLatitude);
      fetch(`http://api.positionstack.com/v1/reverse?access_key=cf0f4bbc3eed44be9983e456c7cb24f1& 
      query=${currentLatitude},${currentLongitude}`)
      // query=${currentLatitude},${currentLongitude}`)
      .then(response => response.json())
      .then(json => {
          console.log(json.data)
          console.log(json.data.county)
          
          // alert('Gagal menambah data!');
          // this.setState({
          //     address:json.county
          // })
      })

      axios
      .get(`${LINK_API}Resiko/GetDataFormMahasiswaById?id=${nim}`)
      .then((res) => {
          // if(res.data.result === "SUCCESS") {

              setIdForm(res.data[0].fma_id)
              // idForm = res.data.fma_id;

              console.log("coba 3 " + res.data[0].fma_id);
              return;
      })
      .catch(error => alert(error))

        axios
        .post(`${LINK_API}Absensi/CreateLoc?nim=${nim}&idForm=${idForm}
        &latitude=${currentLongitude}&longitude=${currentLatitude}&address=${address3+","+address2+","+address}`)
        .then((res) => {
            if(res.data.result === "SUCCESS") {

                // alert('Berhasil tambah data ');
        
                navigation.navigate('Form_absensi_5')
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
        // navigation.navigate('Form_absensi_5')
    }

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        //Will give you the location on location change
        
        setLocationStatus('You are Here');
        console.log(position);

        //getting the Longitude from the location json        
        const currentLongitude =
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
        
        // GetDataAlamat(currentLatitude, currentLongitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
            }}
            style={{width: 100, height: 100}}
          />
          <Text style={styles.boldText}>
            {locationStatus}
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
              marginBottom: 16,
              fontSize:20,
            }}>
            {address}, {address2}
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
              fontSize:20,
            }}>
            {address3}
          </Text>
          {/* <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            Latitude: {currentLatitude}
          </Text> */}
          <View style={{marginTop: 20}}>
          
            {/* <ButtonSelanjutnyaLoc navigation = {navigation}/> */}
            <Button
              title="Simpan"
              onPress={PindahForm}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 25,
    color: 'red',
    marginVertical: 16,
  },
});

export default Form_absensi_Loc