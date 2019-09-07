import React, {Component} from 'react'
import {
  Button,
  View,
  Text
} from 'react-native'

class NavigtorTextOne extends React.Component {
  static navigationOptions = {
    headerTitle: '首页iiii'
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>详情</Text>
        <Button 
          title="返回Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default NavigtorTextOne