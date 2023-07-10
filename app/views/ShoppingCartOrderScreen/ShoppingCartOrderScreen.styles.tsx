import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shoppingCartItemContainer: {
    flex: 1, 
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 75/3,
  },
  shoppingCartItemImage: {
    width: 75,
    height: 75,
    borderRadius: 75/3,
    borderRightWidth: 2
  },
  shoppingCartModalImage: {
    width: 250,
    height: 250,
    marginBottom: 10
  },
  shoppingCartItemTextContainer: {
    flexDirection: "column", 
    flex: 1,
    marginLeft: 20,
    marginTop: 10
  },
  shoppingCartButtonCentering:{
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },
  shoppingCartCheckoutButton:{
    padding: 20,
    borderWidth: 2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center"
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
  cartButton:{
    
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
  }
});

export default styles;