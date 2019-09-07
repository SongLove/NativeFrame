/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image
} from 'react-native';

import { createAppContainer, createStackNavigator } from 'react-navigation'
//import { createStackNavigator } from 'react-navigation-stack'

class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require('./images/back.png')}
        style={{ width: 30, height: 30 }}
      />
    )
  }
}


class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('ScreenName', '1'),
      headerBackTitle: '详情',
      headerBackImage: require('./images/back.png'),
      headerRight: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
        />
      )
    }
  }
  render() {
    return (
      <View style={styles.content}>
        <Text>Home Screen sss</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: { aa: 111, bb: 222 },
            otherParam: '1'
          })}
        />
      </View>
    )
  }
}
class DetailsScreen extends React.Component {
  state = {
    count: 0
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    //navigationOptions 就是 AppNavigator 里面的公共参数
    const { params } = navigation.state;

    return {
      /* These values are used instead of the shared configuration! */
      //headerTitle: '详情',
      headerStyle: {
        backgroundColor: navigationOptions.headerStyle.backgroundColor,
      },
      headerTintColor: navigationOptions.headerStyle.aa,
      headerRight: (
        <Button title="+1" onPress={navigation.getParam('increaseCount')} />
      )
    };
  }
  // 控件渲染前触发
  componentDidMount() {
    // 将属性绑定为 方法
    this.props.navigation.setParams({ increaseCount: this._increaseCount })
  }
  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    // 获取参数
    const { navigation } = this.props
    const itemId = navigation.getParam('itemId', 'NO-ID')
    const otherParam = navigation.getParam('otherParam', '123')

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text >Details Screen</Text>
        <Text>itemId: {itemId.aa}</Text>
        <Text>{this.state.count}</Text>
        <Text>otherParam: {otherParam}</Text>
        <Button title="返回Home" onPress={() => {
          this.props.navigation.navigate('Home', { ScreenName: 'HomeName' })
        }} />
        <Button title="back Home" onPress={() => {
          this.props.navigation.goBack()
        }} />
      </View>
    );
  }
}

// 模态框
class ModalScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}> This is a modal</Text>
        <Button onPress={() => this.props.navigation.goBack()} title="关闭" />
      </View>
    )
  }
}

const MainScreen = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      aa: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
)

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    MyModal: ModalScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const AppContent = createAppContainer(AppNavigator);

export default class App extends Component {
  someEvent() {
    // call navigate for AppNavigator here:
    this.navigator &&
      this.navigator.dispatch(
        NavigationActions.navigate({ Home: HomeScreen })
      );
  }
  render() {
    return <AppContent ref={nav => {
      this.navigator = nav;
    }} />
  }
}
