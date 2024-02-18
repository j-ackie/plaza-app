import { View, Text, StyleSheet } from 'react-native';
import InformationRow from './InformationRow';
import Button from '~/components/Buttons/Button';
import { useNavigation } from 'expo-router';

const Information = () => {
  const navigation = useNavigation();

  const price = 20;
  return (
    <View>
      <Text style={styles.label}>Information</Text>
      <View style={styles.information}>
        <InformationRow label="Delivery Range">
          <Button
            title="Add"
            onPress={() => navigation.navigate('Delivery Range')}
          />
        </InformationRow>
        <InformationRow label="Delivery Times">
          <Button
            title="Add"
            onPress={() => navigation.navigate('Delivery Times')}
          />
        </InformationRow>
        <InformationRow isBottom label="Price">
          <Text>HELLO</Text>
        </InformationRow>
      </View>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    padding: 10,
    gap: 30,
  },
  addImage: {
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
    height: 100,
    overflow: 'hidden',
  },
  name: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  description: {
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  information: {
    borderWidth: 1,
    borderRadius: 10,
    height: 150,
  },
  informationCategory: {
    width: 100,
    height: '100%',
    padding: 20,
    borderRightWidth: 1,
    justifyContent: 'center',
  },
  informationTopRow: {
    flex: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  informationRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 50,
    gap: 10,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    width: '40%',
  },
});
