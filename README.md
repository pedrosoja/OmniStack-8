# OmniStack-8 - Projeto Tindev

Projeto desenvolvido pela empresa RocketSeat para a semana OmniStack 8.0 para compartilhar conhecimento sobre as arquiteturas NodeJS, React e React Native.

## Alguns comando para o ambiete:

### NodeJS
O ambiete utilizado foi Linux

### React
O ambiete utilizado foi Linux
### React Native
O ambiete utilizado foi Windows

Para iniciar o emulador 
```
%ANDROID_HOME%\tools\emulator.exe -avd default3
```

O seguinte comando é importante para o ambiente de desenvolvimento
```
adb reverse tcp:3333 tcp:3333
```

Para criar uma aplicação
```
react-native init <nome da aplicação> (prestar atenção quanto ao sistema operacional)
```

Para rodar o aplicativo pela primeira vez
```
yarn react-native run-android (** --no-jetifier **)
```

Para retomar o aplicativo
```
yarn start
```

Pacote utizado nesse projeto
* yarn add react-navigation react-native-gesture-handler react-native-reanimated
```
Quando usar o *react-native-gesture-handler* seguir os passo para configuração do ANDROID
https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html
yarn install
```
* yarn add @react-native-community/async-storage

