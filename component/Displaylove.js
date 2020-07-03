import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Displaylove = (prop) => {
    if (prop.data == 'loading') {
        return (
            <View style={styles.container,{marginTop:20}} >
                <Text style={styles.text}>loading....</Text>
            </View>
        )
    }
    else {
        return (
            <View style={styles.container} >
                <Text style={styles.text}>{prop.data.percentage}</Text>
                <Text style={styles.text}>{prop.data.result}</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 10
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
    }
});


export default Displaylove;
