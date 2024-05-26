import * as React from "react";
import {StyleSheet, SafeAreaView} from 'react-native'
import EditPhoto from "./src/screens/EditPhoto/EditPhoto";

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <EditPhoto/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
    },
});

export default App;