# test-gestionnaire-taches-collaboratif-simule


# Installation
Install the required packages in your React Native project:

npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-gesture-handler
npm install @react-native-masked-view/masked-view
npm install axios
npm install react-native-element-dropdown --save
//stylé les composants 
npm install twrnc

# Créer un émulateur Android
Si aucun émulateur n'est disponible, vous devez en créer un via Android Studio :

Ouvrez Android Studio.==> 
(cd android-studio/
cd bin/
 ./studio.sh )
Allez dans Tools > Device Manager.
Cliquez sur Create Device.
Sélectionnez un appareil (par exemple, Pixel 5) et cliquez sur Next.
Choisissez une image système (par exemple, VanillaIceCream) et téléchargez-la si nécessaire.
Configurez l'émulateur et cliquez sur Finish.

# Relancer l'application
npm run android
npm start 

# coté backend:
npm init -y
npm install express mongoose dotenv cors body-parser