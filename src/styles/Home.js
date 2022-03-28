import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  jumbotron: {
    width: width,
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
  moreDetail: {
    fontSize: 14,
    fontWeight: '700',
    color: '#393939',
    marginVertical: '6%',
    marginRight: '5%',
  },
  cardImage: {
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
  addProduct: {
    marginTop: '40%',
    color: '#FFF',
    backgroundColor: '#ffcd61',
    height: 40,
    borderRadius: 10,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textAdd: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 'auto',
    marginTop: 'auto',
    fontWeight: '900',
  },
});

export default styles;
