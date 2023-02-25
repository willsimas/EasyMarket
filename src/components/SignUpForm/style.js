import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    formContainer:{
        flex:1,
        backgroundColor:"#D8E5C3",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:"5%",
        paddingEnd:"5%",
    },
    title:{
        fontSize:20,
    },
    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16
    },
    button:{
        backgroundColor:"#006830",
        width:"30%",
        borderRadius:8,
        paddingVertical:8,
        marginTop:14,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
    },
    buttonText:{
        color:"#FFF",
        fontSize:18,
        fontWeight:"bold"
    },
    buttonRegister:{
        marginTop:10,
        alignItems:"center"
    },
    registerText:{
        color:"#a1a1a1"
    }
})

export default styles