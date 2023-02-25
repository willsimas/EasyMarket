import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#006830"
    },
    signInHeader:{
        marginVertical:50,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    backButton:{
        paddingLeft:10,
    },
    userButton:{
        paddingRight:15        
    },
    textBackButton:{
        color:"#FFF",
        fontSize:20,
    },
    textUserName:{
        color:"#FFF",
        fontSize:18,
    },
    textUserMsg:{
        color:"#FFF",
        fontSize:16,
    },
        imgLogo:{
        alignSelf:"center",
        marginTop:-75
    },
        imgLogo:{
        marginTop:-75,
        alignSelf:"center"
    },
    formContainer:{
        flex:1,
        backgroundColor:"#D8E5C3",
        width:"100%",
        height:"100%"
    },
    containerBoxes:{
        height:"85%",
        width:"100%",
        backgroundColor:"#D8E5C3",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:"7%",
        paddingEnd:"7%",
        flexWrap:'wrap',
        flexDirection:'row',
    },
    screensButtons:{
        marginTop:-30,
        marginBottom:-30,
        width:'50%',
        height:'40%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    itemsButton:{
        width:120,
        height:100,
        backgroundColor:"#006830",
        borderRadius:13,
        alignItems:'center',
        justifyContent:'center',
        
    },
    itemsTextButton:{
        color:"#FFF",
        marginTop:5
    },
    containerForm:{
        backgroundColor:"#f3f3a2",
        height:'100%'
    },
})

export default styles