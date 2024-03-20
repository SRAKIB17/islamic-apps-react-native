import React from 'react';
import { View } from 'react-native';
import { RenderScreen, useParams, useRouter } from 'react-native-router-screen';
import { useAuth } from '../context';
import DuaScreen from './dua/DuaScreen';
import CategoryDuaScreen from './dua/CategoryDuaScreen';
import DetailsDua from './dua/DetailsDua';
const Render = new RenderScreen();
const Screen = () => {
    const { isLoading, refetch, isLoggedIn } = useAuth();
    const params = useParams();
    const { productTitle }: any = params
    const router: any = useRouter();

    return (
        <Render.Render>
            {/* <Render.screen
                path='/'
                title='sfsfsd'
                hasFooter={true}
                // hasNavbar={true}
                // isPrivate={true}\
                // privateState={true}
                screen={HomeScreen}
            /> */}


            <Render.screen
                path='/dua'
                title='sfsfsd'
                hasFooter={true}
                // hasNavbar={true}
                // isPrivate={true}\
                // privateState={true}
                screen={DuaScreen}
            />

            <Render.screen
                path='/dua/:catID'
                title={router?.title}
                hasFooter={true}
                // hasNavbar={true}
                // isPrivate={true}\
                // privateState={true}
                screen={CategoryDuaScreen}
            />

            <Render.screen
                path='/dua/:catID/:subcatID'
                title={router?.title}
                hasFooter={true}
                // hasNavbar={true}
                // isPrivate={true}\
                // privateState={true}
                screen={DetailsDua}
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