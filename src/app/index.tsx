import { Text, View, ScrollView } from "react-native";
import Header from "../componets/header";
import Banner from "../componets/banner";
import Search from "../componets/search";
import Section from "../componets/section";
import Trending from "../componets/trending";
import RestaurantsVerticalList from "../componets/list";

import Constants from "expo-constants";
import Restaurants from "../componets/restaurants";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
        <Section name="Comidas em alta"
          size="text-2xl"
          label="Veja mais"
          action={() => console.log('Clicou no veja mais')} 
          />
            <Trending />

        <Section
          name="Famosos no DevFood"
          size="text-xl"
          label="Veja todos"
          action={() => console.log('Clicou no veja mais')} 
          />
              <Restaurants />

          <Section
          name="Restaurantes"
          size="text-xl"
          label="Veja todos"
          action={() => console.log('Clicou no veja mais')} 
          />
              <RestaurantsVerticalList />

      </View>
    </ScrollView>
  );
}
