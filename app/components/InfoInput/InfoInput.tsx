import { TextInput, View } from "react-native";
import styles from "./InfoInput.styles";

const InfoInput = ({ placeholder, value, setValue, isTop, isBottom }) => {
  const inputStyles = [styles.infoInput];
  if (isTop) {
    console.log("a")
    inputStyles.push(styles.infoInputTop);
  }
  else if (isBottom) {
    inputStyles.push(styles.infoInputBottom);
  }
  
  return (
    <TextInput
      style={inputStyles}
      placeholder={placeholder}
      value={value}
      onChange={event => setValue(event.nativeEvent.text)}
    />
  )
}

export default InfoInput;