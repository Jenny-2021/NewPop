import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent:"center",
      justifyContent:"center",
  
    },
    title: {
      flex:1,
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft:30,
      marginTop:15,
    },
    separator: {
      flex:1,
      marginVertical: 5,
      height: 1,
      width: '80%',
    },
    boxCard: {
      flexDirection:'row',
      marginHorizontal:15,
      flex:1,
      borderRadius:7,
      backgroundColor:'#d85b55',
      padding:7,
      borderWidth:3,
      borderColor:"#6D2C2A",
    },
    boxInfo:{
      width:"70%",
      alignItems:'center', 
      backgroundColor:"#d85b55",
  
    },
    infoTitleBook:{
      flex:1,
      textAlign:"center",
      fontSize: 20,
      fontWeight: 'bold',
      marginTop:15,
    
    },
    infoBook:{
      flex:0,
      height:60,
      width:220,
      backgroundColor:"#AE4844",
      borderRadius:7,
      fontSize:15,
      textAlign:"center",
      textAlignVertical:"center",
    },
  });
  export default styles;
  