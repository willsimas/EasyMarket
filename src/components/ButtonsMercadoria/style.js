import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#006830"
    },
    signInHeader:{
        marginBottom:"20%",
        justifyContent:'center',
        alignItems:'center'
    },
    headerBox:{
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row'
    },
    backButton:{
        marginLeft:-30
    },
    textBackButton:{
        paddingLeft:22,
        marginTop:50,
        color:"#FFF",
        fontSize:20,
        alignSelf:"flex-start"
    },
    textUserName:{
        paddingLeft:22,
        marginTop:50,
        color:"#FFF",
        fontSize:20
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
        height:120,
        backgroundColor:"#006830",
        borderRadius:13,
        alignItems:'center',
        justifyContent:'center',
        
    },
    itemsTextButton:{
        color:"#FFF",
        marginTop:5
    }
})

export default styles