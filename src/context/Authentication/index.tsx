'use client'
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useNavigation } from 'react-native-router-screen';
import { refresh_api } from '../../config';
import { ref_token } from '../../utils';
import { actionTypeInterface, authenticationCheckProviderReducer, } from './AuthenticationReducer';


export const initialState = {
    role: null,
    isLoggedIn: false,
    isLoading: true,
    user_info: {},
    refetch: () => { }
}

export interface initialStateInterface {
    role: string,
    isLoading: any,
    user_info?: {
        userID?: number,
        name?: string,
        email?: string,
        phone?: string,
        defaultShippingAddress?: number,
        userType?: string,
        birthday?: string,
        rewardCoins?: number,
        lastLogin?: string,
        balance?: number,
        gender?: string,
        isBlock?: boolean,
        registered?: string,
        country?: string,
        verifiedEmail?: boolean,
    },
    isLoggedIn?: boolean,
    refetch: () => Promise<void> | any

}

const AuthenticationContext = createContext<initialStateInterface>({
    isLoading: false, role: '', user_info: {}, isLoggedIn: false, refetch: () => { }
});


export const AuthenticationCheckProvider = (props: { children: React.ReactNode }) => {

    const navigation = useNavigation()

    const [state, dispatch]: [initialStateInterface, (props: actionTypeInterface) => void] = useReducer(authenticationCheckProviderReducer, initialState);
    const run = async () => {
        try {
            dispatch({ type: 'LOADING' || '' });
            navigation.setLoadingComponent(true)
            const res = await fetch(refresh_api, {
                headers: {
                    "ref_tkn": await ref_token()
                },
                method: "POST",
                body: JSON.stringify({})
            })
            const data = await res.json()
            if (data?.success) {
                dispatch({ type: 'SUCCESS', payload: data })
                navigation.setLoadingComponent(false)
            }
            else {
                dispatch({ type: 'ERROR' });
                navigation.setLoadingComponent(false)
            }
        }
        catch {
            dispatch({ type: 'ERROR' });
            navigation.setLoadingComponent(false)
        }
    }
    useEffect(() => {
        run().then(r => {
            navigation.setLoadingComponent(false)
        })
    }, [dispatch]);

    return (
        <AuthenticationContext.Provider value={{ ...state, refetch: run }}>
            {props.children}
        </AuthenticationContext.Provider>
    );
};

export function useAuth() {
    const user = useContext(AuthenticationContext);
    return user
}
