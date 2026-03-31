import { View, Pressable, Text, Image } from 'react-native';
import { RestaurantsProps } from '..';

export default function Restaurants({restaurant}: {restaurant: RestaurantsProps}) {
 return (
   <Pressable className='flex flex-col items-center justify-center'
   onPress={() => console.log('clicou em mais um lugar que cara curioso')}>
    <Image
        source={{uri: restaurant.image}}
        style={{ width: 80, height: 80, borderRadius: 40 }}
    />
    <Text className='text-sm mt-2 w-20 text-center leading-4 text-black' numberOfLines={2}>{restaurant.name}</Text>
   </Pressable>
  );
}