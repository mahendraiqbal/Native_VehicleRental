import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  login: {
    marginTop: '5%',
    color: '#FFF',
    backgroundColor: '#ffcd61',
    height: 40,
    borderRadius: 10,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5%',
  },
  textLogin: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 'auto',
    marginTop: 'auto',
    fontWeight: '900',
  },
  counter: {
    fontSize: 17,
    fontWeight: '900',
    margin: 10,
    backgroundColor: '#FFCD61',
    borderRadius: 12,
    width: 25,
    height: 25,
    paddingLeft: 8,
  },
  textCounter: {
    fontSize: 17,
    fontWeight: '900',
    margin: 10,
  },
  counterWrapper: {
    flexDirection: 'row',
  },
  btnCounterWrapper: {
    marginLeft: '27%',
    flex: 1,
    textAlign: 'right',
    flexDirection: 'row',
  },
  imageProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  icon: {
    marginLeft: '5%',
    marginTop: '5%',
  },
  title: {
    marginLeft: '5%',
    marginTop: '5%',
    fontSize: 20,
    fontWeight: '600',
  },
  cancel: {
    marginTop: '5%',
    marginLeft: 'auto',
    marginRight: '5%',
    fontSize: 20,
  },
  imageUpdate: {
    // marginLeft: 'auto',
    // marginRight: 'auto',
    marginBottom: '5%',
  },
  buttonBrowse: {
    backgroundColor: '#000',
    height: 40,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 10,
  },
  textBrowse: {
    fontSize: 14,
    color: '#ffcd61',
    padding: '2%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  inputProduct: {
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
    marginBottom: '3%',
  },
  inputPrice: {
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
    marginBottom: '3%',
  },
  inputText: {
    fontSize: 17,
    fontWeight: '700',
    marginLeft: '5%',
  },
  inputDescribe: {
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
    marginBottom: '3%',
  },
  inputStock: {
    fontSize: 17,
    fontWeight: '700',
    marginLeft: '15%',
  },
});
export default styles;
