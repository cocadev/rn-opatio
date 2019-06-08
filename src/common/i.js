import {colors}  from "./colors";

export default{
    container : {    
        flex: 1,
        // paddingTop: 24
    },
    mainHeader: {
        width: '100%',
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        elevation: 3,
        paddingVertical:4
    },
    textinput:{
        height: 36,
        borderColor: colors.GREY2,
        borderRadius: 5,
        borderWidth: 1,
        paddingLeft: 10,
        fontSize:18
    },
    indicatorContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0,0.5)",
        alignItems: "center",
        justifyContent: "center"
    },
    indicator: {
        width: 80,
        height: 80,
        borderRadius: 5,
        shadowColor: "black",
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        backgroundColor: "white"
    },
    smallText:{
        fontFamily:'Montserrat-Medium',
        fontSize:10,
        color:colors.DARK2
    },
    normalText:{
        color: colors.DARK, 
        fontFamily: 'Montserrat-Medium', 
        fontSize: 13
    },
    bar: {
        backgroundColor:colors.GREY4, 
        height:1, 
        width:'100%', 
        marginVertical:12
    }
}