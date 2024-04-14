import { Tabs } from 'react-native-collapsible-tab-view';
import Videos from './Videos';
import { User } from '@/__generated__/graphql';
import { FC } from 'react';
import { View } from 'react-native';
import Header from './Header';

interface SectionsProps {
  user: User;
}

const Sections: FC<SectionsProps> = ({ user }) => {
  return (
    <View style={{ flex: 1 }}>
      <Tabs.Container renderHeader={() => <Header user={user} />}>
        <Tabs.Tab name="Videos">
          <Tabs.ScrollView>
            <Videos user={user} />
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Products">
          <View></View>
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};

export default Sections;
