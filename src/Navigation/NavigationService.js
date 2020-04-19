import {NavigationActions} from '@react-navigation/compat';

let navigator;

const setTopLevelNavigator = navigatorRef => {
  if (navigatorRef) {
    navigator = navigatorRef;
  }
};

const navigate = routeName => {
  if (navigator) {
    navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  }
};

export default {
  setTopLevelNavigator,
  navigate,
};
