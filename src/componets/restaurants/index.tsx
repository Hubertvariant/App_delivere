import { View, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import RestaurantsItem from './restaurantsItem';

export interface RestaurantsProps {
    id: string;
    name: string;
    image: string;
}

export default function Restaurants() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])
    useEffect(() => {
            async function getRestaurants(){
                const response = await fetch('http://192.168.0.101:3000/restaurants')
                const data = await response.json()
                setRestaurants(data)
            }
    
            getRestaurants()
    }, [])
 return (
   <FlatList
           data={restaurants}
           renderItem={({ item }) => <RestaurantsItem restaurant={item}/>}
           horizontal={true}
           contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
           showsHorizontalScrollIndicator={false}
      />
  );
}