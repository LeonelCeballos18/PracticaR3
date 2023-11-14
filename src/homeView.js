import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ArtistList from "./ArtistList"
import { getMusicData } from "./api-client"

export default class homeView extends Component {
    state = {
      artists: null
    }

      componentDidMount(){
        getMusicData().then(data => this.setState({ artists:data }))
      }

  render(){
    return (
      <View style={styles.container}>
        {artists && <ArtistList artists={artists} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  textBox: {
    borderColor: '#1A1A1A',
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    marginTop: 5,
    width: 200,
  },
  button: {
    padding: 10,
    backgroundColor: '#239B56',
    borderRadius: 5,
  },
  textLabel: {
    marginTop: 5,
  }
});
