import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { DrawerContainer, NavigationContainer, useTheme } from 'react-native-router-screen';
import { home_path } from './src/config';
import { AuthenticationCheckProvider, ThemeContextProvider, } from './src/context';
import Screen from './src/screen';
import { ThemeColor } from './src/theme';
function App(): JSX.Element {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);

  return (
    <NavigationContainer
      theme={{
        dark: ThemeColor.dark,
        default: ThemeColor.default
      }}
      scheme={isDarkTheme ? 'dark' : 'default'}
      basePath={home_path}
    >
      <WrapScreen setDarkTheme={setDarkTheme} />
    </NavigationContainer>
  );
}

const WrapScreen = ({ setDarkTheme }: { setDarkTheme: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { dark, colors } = useTheme();

  return (
    <ThemeContextProvider setDarkTheme={setDarkTheme}>
      <AuthenticationCheckProvider>
        <DrawerContainer>
          <StatusBar
            animated={true}
            barStyle={dark ? "light-content" : 'dark-content'}
            backgroundColor={colors.card}
            showHideTransition={'slide'}
            hidden={false}
          />
          <Screen />
        </DrawerContainer>
      </AuthenticationCheckProvider>
    </ThemeContextProvider>

  )
}
export default App;
