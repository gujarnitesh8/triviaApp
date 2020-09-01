// =============== IMPORTS AND LIBRARIES ===============
import React from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar, NativeModules, Platform } from 'react-native';
import AppNavigation from './AppNavigation';
import { Store, Persistor } from './Redux/Store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import AppStatusBar from './CommonConfig/AppStatusBar';
import { Colors } from './CommonConfig';

// =============== CLASS DECLARATION ===============
class App extends React.Component {
  state = {
    statusBarHeight: 0
  }
  // =============== LIFECYCLE METHODS ===============
  componentDidMount() {
    this.getStatusBarHeight();
  }

  // =============== THIS FUNCTION RETURNS STATUSBAR HEIGHT ===============
  getStatusBarHeight() {
    const { StatusBarManager } = NativeModules;
    StatusBar.setBarStyle('light-content')
    let height;
    if (Platform.OS == 'android') {
      height = StatusBarManager.HEIGHT;
      global.statusBarHeight = height
      this.setState({ statusBarHeight: height });
    } else {
      StatusBarManager.getHeight(async (data) => {
        height = data
        global.statusBarHeight = height.height
        this.setState({ statusBarHeight: height.height })
      })
    }
  }
  // =============== RENDER METHOD ===============
  render() {
    console.disableYellowBox = true;
    return (
      <>
        <AppStatusBar height={this.state.statusBarHeight} />
        <SafeAreaView style={styles.mainView}>
          <Provider store={Store}>
            <PersistGate persistor={Persistor}>
              <AppNavigation />
            </PersistGate>            
          </Provider>
        </SafeAreaView>
      </>
    )
  }
};
// =============== STYLESHEET ===============
const styles = StyleSheet.create({
  mainView: {
    flex: 1, backgroundColor: Colors.BLACK
  }
});
export default App;
