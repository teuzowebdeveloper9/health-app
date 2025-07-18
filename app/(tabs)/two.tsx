import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { subStylesheets } from '../stylesheets/subStylesheets';

export default function TabTwoScreen() {
  return (
    <View style={subStylesheets.container}>
      <Text style={subStylesheets.title}>Tab Two</Text>
      <View style={subStylesheets.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}
