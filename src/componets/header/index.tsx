import React from "react";
import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons';

export default function Header() {
    return(
        <View className="w-full flex flex-row items-center justify-between">
            <Pressable className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Ionicons name="menu" size={24} color="#121212"/>
            </Pressable>

            <View className="flex flex-col items-center justify-center">
                <Text className="text-sm text-center text-slate-800">Localização</Text>
                <View className="flex-row items-center justify-center gap-1">
                    <Feather name="map-pin" size={14} color="#ff0000"/>
                    <Text className="text-lg font-bold">Arapongas</Text>
                </View>
            </View>

            <Pressable className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Feather name="bell" size={24} color="#121212"/>
            </Pressable>
        </View>
    );
}