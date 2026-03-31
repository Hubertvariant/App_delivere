import { View, Text, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsProps } from '..';

export function ResturantItem( {item}:{item: RestaurantsProps} ) {
 return (
   <Pressable className='flex flex-row items-center justify-start gap-2'>
    <Image
        source={{uri: item.image}}
        style={{ width: 80, height: 80, borderRadius: 40 }}
    />
    <View className='flex gap-2'>
        <Text className='text-base text-black leading-4 font-bold'
        numberOfLines={2}>{item.name}</Text>
        <View className='flex flex-row items-center gap-1'>
            <Ionicons name="star" size={14} color="#ff0000"/>
            <Text>4.5</Text>
        </View>
    </View>
   </Pressable>
  );
}