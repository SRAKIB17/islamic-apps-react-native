import React from 'react';
import { View } from 'react-native';
import { RenderScreen, useParams } from 'react-native-router-screen';
import { useAuth } from '../context';
const Render = new RenderScreen();
const Screen = () => {
    const { isLoading, refetch, isLoggedIn } = useAuth();
    const params = useParams();
    const { productTitle }: any = params
    return (
        <Render.Render>
            <Render.screen
                path='/'
                title='sfsfsd'
                hasFooter={true}
                // hasNavbar={true}
                // isPrivate={true}\
                // privateState={true}
                screen={HomeScreen}
            />
            {/* NOT FOUND PAGE */}
            {/* <Render.screen
                title='Notfound'
                hasFooter={true}
                hasNavbar={true}
                path='*'
                screen={Notfound}
            /> */}
        </Render.Render>
    )
}

const HomeScreen = () => {
    return (
        <View>

        </View>
    )
}
export default Screen;