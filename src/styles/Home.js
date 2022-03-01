import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  jumbotron: {
    width: 390,
    height: 250,
  },
  imageWrapper: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#393939',
    marginTop: '4%',
    marginLeft: '5%',
    flex: 1,
  },
  more: {
    fontSize: 14,
    fontWeight: '700',
    color: '#393939',
    marginVertical: '6%',
    marginRight: '5%',
  },
  card: {
    width: 250,
    height: 150,
    borderRadius: 12,
    marginLeft: 15,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  loading: {
    width: 250,
    height: 150,
    marginLeft: 50,
  },
});

export default styles;
