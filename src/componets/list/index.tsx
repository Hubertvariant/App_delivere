import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { ResturantItem } from './item'

export interface RestaurantsProps {
    id: string;
    name: string;
    image: string;
}

export default function RestaurantVerticalList() {
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
   <View className='px-4 flex-1 w-full h-full mb-11' style={{gap: 16}}>
        {restaurants.map( item => (
            <ResturantItem key={item.id} item={item}/>
        ))}
   </View>
  );
}