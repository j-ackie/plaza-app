import { FC, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface InformationRowProps {
  isBottom?: boolean;
  label: string;
  children: ReactNode;
}

const InformationRow: FC<InformationRowProps> = ({
  isBottom = false,
  label,
  children,
}) => {
  const price = 20;
  return (
    <View
      style={[styles.informationRow, !isBottom && styles.informationBorderRow]}
    >
      <View style={styles.informationCategory}>
        <Text>{label}</Text>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default InformationRow;

const styles = StyleSheet.create({
  informationCategory: {
    width: 125,
    height: '100%',
    paddingLeft: 10,
    borderRightWidth: 1,
    justifyContent: 'center',
  },
  informationBorderRow: {
    borderBottomWidth: 1,
  },
  informationRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
