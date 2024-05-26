import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 340,
        height: 380,
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    imagePhoto: {
        flex: 1,
        width: 340,
        height: 340,
        marginVertical: 20,
        resizeMode: 'contain',
    },
    imagePhotoCropped: {
        borderRadius: 170,
    }
})

export default styles