import React, { Component } from 'react'
import  {
  View,
  Button,
  Text
} from 'react-native'

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button 
          title="去详情"
          onPress={() => this.props.navigation.navigate('NavigatorTextOne')}
        />
      </View>
    );
  }
}

export default HomeScreen