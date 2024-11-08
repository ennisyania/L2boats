
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Boats from './components/Boats';

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor:'Grey',
        textAlign:"center"

    },

    section: {
        backgroundColor:'lightgrey',
        borderWidth: 2,
        borderColor:'black',
        margin: 10,
    }
})

const AllBoats = () => {
    return (
        <ScrollView marginTop={50}>
            <View style={styles.section}>
            <Text style={styles.title}>
                GET A BOAT - FOR SALE</Text>
            </View>
            <Boats title="Sea Ray 500 Sundancer"
                   description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                   poster={require('./img/sea_ray.jpg')}/>
            <Boats title="Four Winns Horizon 180"
                   description="A sporty look and refined details truly set the Horizon 180 above all others."
                   poster={require('./img/four_winns.jpg')}/>
            <Boats title="Flipper 640 ST"
                   description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                   poster={require('./img/flipper.jpg')}/>
            <Boats title="Princess V48"
                   description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                   poster={require('./img/princess.jpg')}/>
            <Boats title="Bayliner 175 Bowrider"
                   description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                   poster={require('./img/bayliner.jpg')}/>
            <Boats title="Fairline Targa 47"
                   description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                   poster={require('./img/fairline.jpg')}/>
        </ScrollView>
    );
};


export default AllBoats;
