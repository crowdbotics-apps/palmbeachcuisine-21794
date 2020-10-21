import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps153710Navigator from '../features/Maps153710/navigator';
import Add-Item153709Navigator from '../features/Add-Item153709/navigator';
import Maps153705Navigator from '../features/Maps153705/navigator';
import UserProfile153701Navigator from '../features/UserProfile153701/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps153710: { screen: Maps153710Navigator },
Add-Item153709: { screen: Add-Item153709Navigator },
Maps153705: { screen: Maps153705Navigator },
UserProfile153701: { screen: UserProfile153701Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
