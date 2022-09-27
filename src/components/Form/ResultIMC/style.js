import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultContainer: {
        alignItems: "center",
                
    },   
    
    resultImc: {
        marginTop: 15,
        paddingTop: 30,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
        
    },
    numberImc: {
        fontSize: 48,
        color: "#ff0043",
        fontWeight: "bold",
    },
    information: {
        fontSize: 18,
        color: "#ff0043",
        fontWeight: "bold"
    },
    boxShareButton: {
        width: "100%",
        alignItems: "center",
        margin: 10
    },
    shared: {
        alignItems: "center",
        backgroundColor: "#1877f2",
        borderRadius: 50,
        padding: 5
    },
    sharedText: {
        color: "#ffffff",
        fontWeight: 'bold',
        paddingHorizontal: 30,
    }
});

export default styles