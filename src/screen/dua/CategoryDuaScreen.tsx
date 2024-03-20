import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { ScreenProps, TouchableOpacityButton, useParams, useRouter } from 'react-native-router-screen';
import { global_styles } from '../../components';
import dua_db from "../../db/dua.json";
const CategoryDuaScreen = (props: ScreenProps) => {
    const { params: { catID }, setTitle, setLoadingComponent } = props
    const { category, sub_category } = dua_db;
    const find = category?.find(r => r?.catID == catID);
    const find_sub_category = sub_category?.filter(r => r?.catID == catID);
    const router = useRouter();
    useEffect(() => {
        setTitle(`${find?.bnCategory}`)
    }, [catID, find, router]);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={[global_styles?.container]}>
                    {
                        find_sub_category?.map((subcat, index) => {
                            return (
                                <TouchableOpacityButton
                                    onPress={() => {
                                        router.push(`/dua/${find?.catID}/${subcat?.subcatID}`)
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
                                        height: 80,
                                        flex: 1,
                                        paddingEnd: 30,
                                        justifyContent: 'flex-start',
                                        gap: 10,
                                    }}
                                    numberOfLines={2}
                                    key={index}
                                    text={`${subcat?.bnSubcategory}`}
                                />
                            )
                        })
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default CategoryDuaScreen;