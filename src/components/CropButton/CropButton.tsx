import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import styles from './styleButton'
interface ICropButton {
    value: string,
    onPress: () => void;
}

const CropButton: React.FC<ICropButton> = ({value, onPress}) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={styles.button}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    );
};



export default CropButton;
