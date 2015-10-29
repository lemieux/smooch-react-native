/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  ScrollView,
  TextInput,
  ListView,
  Component
} from 'react-native';

class SmoochReactNative extends Component {
  constructor() {
      super();

      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      this.state = {
        dataSource: ds.cloneWithRows(['Hey Smooch', 'What up?'])
      };
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid title="Smooch"/>
        <ListView dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
        <View style={styles.inputBar}>
          <TextInput
              style={{height: 40, borderColor: 'gray'}}
            />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputBar: {

  }
});

AppRegistry.registerComponent('SmoochReactNative', () => SmoochReactNative);
