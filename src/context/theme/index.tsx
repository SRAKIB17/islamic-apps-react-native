import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import { createContext } from "react";
import { useRouter } from 'react-native-router-screen';

const ThemeContext = createContext<{ setDarkTheme: React.Dispatch<React.SetStateAction<boolean>> }>({ setDarkTheme: () => { } });

export function ThemeContextProvider({
    setDarkTheme,
    children
}: {
    setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode,
}) {
    const router = useRouter();

    useEffect(() => {
        AsyncStorage.getItem('theme').then((r: any) => {
            setDarkTheme(r == 'dark')
        })
        return () => {
        }
    }, [router])

    return (
        <ThemeContext.Provider value={{ setDarkTheme: setDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useChangeTheme = () => {
    const change = useContext(ThemeContext)
    return change.setDarkTheme
}