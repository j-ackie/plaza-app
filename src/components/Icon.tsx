import AvailableIcon from '@/constants/availableIcon';
import { FC } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type IconProps = {
  icon: AvailableIcon;
};

const Icon: FC<IconProps> = ({ icon }) => {
  switch (icon) {
    case AvailableIcon.HEART:
      return <MaterialCommunityIcons name="heart" color="#FFFFFF" size={30} />;
    case AvailableIcon.COMMENT:
      return (
        <MaterialCommunityIcons name="comment" color="#FFFFFF" size={30} />
      );
    case AvailableIcon.ARROW:
      return <MaterialCommunityIcons name="arrow" color="#FFFFFF" size={30} />;
    default:
      return null;
  }
};

export default Icon;
