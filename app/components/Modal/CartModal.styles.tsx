import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    cartButton:{
    
    },
    container:{
      flexDirection: "column",
      alignItems: "center"
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
      padding: 10,
      marginTop: 15,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginTop: 10,
      textAlign: 'center',
      fontSize: 15
    },
    modalTitle: {
      marginTop: 15,
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 25,
    },
    modalSub: {
      fontSize: 25,
      marginTop: 10,
      textAlign: 'center',
      fontWeight: '500'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 70,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    shoppingCartModalImage: {
        width: 170,
        height: 170,
        marginBottom: 10,
        marginTop: 20
      },

    shoppingCartModalVideo: {
        width: 330,
        height: 450,
    },

    testStyle: {
      position: "absolute",
      top: 40,
      right: 0,
    }
})

export default styles