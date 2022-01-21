import { StyleSheet, } from "react-native";


export default StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"black",
  },
  title: {
    flex:0,
    fontSize: 25,
    fontWeight: "bold",
   },
  separator: {
    marginTop: 50,
    height: 1,
    width: "80%",
  },
  areaBox: {
    flex:0,
    backgroundColor:"#d85b55",
    width:"85%",
    height:"90%",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    borderWidth:5,
    borderColor:"#AE4844"

  },
  text: {
    flex:0,
    fontSize:15,
    textAlign:"center",
    textAlignVertical:"center",
    backgroundColor:"#AE4844",
    borderRadius:7,
    width:"75%",
    height:"15%",
    borderWidth:1,


  },
  popChan:{
    resizeMode:"center",
    flex:1,
    borderRadius: 150 / 1,
    margin:5,
    
    
  },
  guideText:{
    paddingVertical:3,
    fontSize:12,
    color:"#6D2C2A",
  },
  button:{
    paddingVertical:10,
    borderWidth:1,
    borderRadius:7,
    alignItems: "center",
    backgroundColor: "#AE4844",
    padding: 10
  },
  logo:{
    resizeMode:"center",
    flex:1,
    width:200,
    borderRadius:200/4,
  },
});

