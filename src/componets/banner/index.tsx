import { View, Pressable, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function Banner() {
 return (
   <View className='w-full h-36 md:h-60 rounded-2xl mt-5 mb-4'>
        <PagerView style={{flex: 1}} initialPage={0} pageMargin={14}>
            <Pressable
                className='w-full h-36 md:h-60 rounded-2xl relative overflow-hidden'
                key='1'
                onPress={() => console.log('Clicou no banner 1')}
            >
                <Image
                    source={require('../../assets/imagens/feijoada.jpg')}
                    className='w-full h-full rounded-2xl'
                />
            </Pressable>
            <Pressable
                className='w-full h-36 md:h-60 rounded-2xl relative overflow-hidden'
                key='2'
                onPress={() => console.log('Clicou no banner 2')}
            >
                <Image
                    source={require('../../assets/imagens/pratoFeito.jpg')}
                    className='w-full h-full rounded-2xl'
                />
            </Pressable>
        </PagerView>
   </View>
  );
}