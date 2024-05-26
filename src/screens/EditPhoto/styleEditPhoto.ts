import {Dimensions, StyleSheet} from "react-native";

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    modal: {
        width: 400,
        height: 400,
        borderBlockColor: 'red',
        backgroundColor: 'green'
    },
    cropView: {
        width: width - 40,
        height: width - 40,
        marginTop: 20,
    },
    container: {
        width: width,
        height: 300
    }
})

export default styles