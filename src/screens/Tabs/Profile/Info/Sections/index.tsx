import PlazaText from '@/components/PlazaText';
import { Tabs } from 'react-native-collapsible-tab-view';
import Videos from './Videos';
import { User } from '@/__generated__/graphql';
import { FC } from 'react';
import { Text, View } from 'react-native';

interface SectionsProps {
  user: User;
}

const Sections: FC<SectionsProps> = ({ user }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'orange' }}>
      <Tabs.Container
        renderHeader={() => (
          <View>
            <Text>Poop</Text>
          </View>
        )}
      >
        <Tabs.Tab name="Videowads">
          {/* <Tabs.ScrollView> */}
          <Videos user={user} />
          {/* </Tabs.ScrollView> */}
        </Tabs.Tab>
        <Tabs.Tab name="Products">
          <View></View>
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};

export default Sections;
