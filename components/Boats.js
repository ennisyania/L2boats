import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
const styles = StyleSheet.create({

    section: {
        backgroundColor:'lightgrey',
        borderWidth: 2,
        borderColor:'black',
        margin: 10,
    },

    boatName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    boatTitle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'darkblue',
        borderColor:'black',
        borderWidth: 2,
        margin: 10,
        padding:2,

    },

    boatDescription: {
        textAlign:'center',
        backgroundColor:'white',
        borderColor:'black',
        borderWidth: 2,
        margin: 10,
        padding:2,
    },

    boatImage: {
        width:350,
        margin: "auto",

    }
})
const Boats  = ({title, description, poster})=> {
    return (
        <View style={styles.section}>
            <View style={styles.boatTitle}>
            <Icon name="sailboat" size={30} color="white"/>
            <Text style={styles.boatName}>{title}</Text>
            </View>
            <Text style={styles.boatDescription}>{description}</Text>
            <Image source={poster} style={styles.boatImage} />
        </View>
    );
};

export default Boats;
