import React, { useEffect } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, View } from 'react-native';
import { ScreenProps, StyledText, useRouter, useTheme } from 'react-native-router-screen';
import { assets_images } from '../../assets';
import { global_styles } from '../../components';
import dua_db from "../../db/dua.json";
const DetailsDua = (props: ScreenProps) => {
    const { params: { catID, subcatID }, setTitle, setLoadingComponent } = props
    const { colors } = useTheme();
    const { sub_category, dua } = dua_db;
    const find_sub_category = sub_category?.find(r => r?.subcatID == subcatID);
    const find_dua_details = dua?.filter(r => r?.subcatID == subcatID);

    const router = useRouter();
    useEffect(() => {
        setLoadingComponent(true)
        setTitle(`${find_sub_category?.bnSubcategory}`)
        setLoadingComponent(false)
    }, [catID]);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ gap: 16, justifyContent: 'flex-end', flex: 1 }}>
                    {
                        find_dua_details?.map((dua, index) => {
                            return (
                                <ImageBackground
                                    source={assets_images?.dua?.bg_dua}
                                    // imageStyle={{ bottom: 0, objectFit: "cover" }}
                                    resizeMode='contain'
                                >
                                    <View key={index} style={{
                                        padding: 16,
                                        shadowColor: colors?.primary,
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 3.84,
                                        elevation: 1,
                                        gap: 16
                                    }}>

                                        <StyledText style={[
                                            global_styles.font_bold,
                                            global_styles.text_xl
                                        ]}>
                                            {dua?.bnDuaName}
                                        </StyledText>

                                        {
                                            Boolean(dua?.top_bn) &&
                                            <StyledText style={[global_styles.text_lg, { textAlign: 'justify' }]}>
                                                {dua?.top_bn}
                                            </StyledText>
                                        }

                                        {
                                            Boolean(dua?.dua_arabic) &&
                                            <StyledText style={[global_styles.text_2xl]}>
                                                {dua?.dua_arabic}
                                            </StyledText>
                                        }

                                        {
                                            Boolean(dua?.transliteration_bn) &&
                                            <StyledText style={[
                                                global_styles.text_lg, {
                                                    textAlign: 'justify',
                                                    color: 'red'
                                                }
                                            ]}>
                                                {dua?.transliteration_bn}
                                            </StyledText>
                                        }
                                        {
                                            Boolean(dua?.translation_bn) &&
                                            <StyledText style={[global_styles.text_lg, { textAlign: 'justify' }]}>
                                                {dua?.translation_bn}
                                            </StyledText>
                                        }
                                        {
                                            Boolean(dua?.bottom_bn) &&
                                            <StyledText style={[
                                                global_styles.text_lg, {
                                                    textAlign: 'justify',
                                                }]}>
                                                {dua?.bottom_bn}
                                            </StyledText>
                                        }
                                        <StyledText style={[global_styles.font_bold, global_styles.text_lg, { textAlign: 'justify' }]}>
                                            {dua?.refference_bn}
                                        </StyledText>

                                    </View>
                                </ImageBackground>
                            )
                        })
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default DetailsDua;