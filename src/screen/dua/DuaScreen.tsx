import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import dua_db from "../../db/dua.json";
import { PressableButton, useRouter, TouchableOpacityButton } from 'react-native-router-screen';
import { global_styles } from '../../components';
const DuaScreen = () => {
    const { category } = dua_db;
    const router = useRouter();
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={[global_styles?.container]}>
                    {
                        category?.map((cat, index) => {
                            return (
                                <TouchableOpacityButton
                                    onPress={() => {
                                        router.push(`/dua/${cat?.catID}`)
                                    }}
                                    imageStyle={{
                                        paddingVertical: 10
                                    }}
                                    image={require('../../assets/category_logo_dark.png')}
                                    containerStyle={{
                                        backgroundColor: 'transparent',
                                        borderRadius: 0,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        paddingEnd: 16,
                                        height: 60,
                                        justifyContent: 'flex-start',
                                        gap: 10
                                    }}
                                    key={index}
                                    text={`${cat?.bnCategory}`}
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default DuaScreen;