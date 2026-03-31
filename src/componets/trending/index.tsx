import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import FoodsItem from './foods';

export interface FoodProps {
        id: string;
        name: string;
        price: number;
        time: string;
        delivery: number;
        rating: number;
        image: string;
        restaurantId: string
}

export default function Trending() {
    const [foods, setFoods] = useState<FoodProps[]>([])

    useEffect(() => {
        async function getFoods(){
            const response = await fetch('http://192.168.0.101:3000/foods')
            const data = await response.json()
            setFoods(data)
        }

        getFoods()
    }, [])
 return (
   <FlatList
        data={foods}
        renderItem={({ item }) => <FoodsItem food={item}/>}
        horizontal={true}
        contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
        showsHorizontalScrollIndicator={false}
   />
  );
}