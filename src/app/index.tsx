import { Text, View, ScrollView } from "react-native";
import Header from "../componets/header";
import Banner from "../componets/banner";
import Search from "../componets/search";
import Section from "../componets/section";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8}}>
        <Header/>
        <Banner/>
        <Search/>
        <Section name="Comidas em alta" size="text-2xl" label="Veja mais" action={() => console.log('Clicou no veja mais')}/>
      </View>
    </ScrollView>
  );
}
