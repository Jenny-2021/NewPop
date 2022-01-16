import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
  
    },
    title: {
      flex:1,
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft:30,
      marginTop:15,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    boxCard: {
      flexDirection:'row',
      marginHorizontal:15,
      flex:1,
      borderRadius:7,
      backgroundColor:'#d85b55',
    },
    boxInfo:{
    alignItems:'center',  
    backgroundColor:"#d85b55",
  
    },
    infoTitleBook:{
      flex:1,
      fontSize: 20,
      fontWeight: 'bold',
      marginTop:15,
    
    },
    infoBook:{
    flex:1,
    },
  });
  export default styles;
  