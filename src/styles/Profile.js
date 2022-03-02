import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageProfile: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  imageWrapper: {
    // marginRight: 'auto',
    // marginLeft: 'auto',
    paddingTop: 10,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    paddingBottom: 10,
  },
  nameUser: {
    fontSize: 24,
    marginBottom: 'auto',
    marginTop: 'auto',
    marginLeft: 5,
  },
  btnEdit: {
    flexDirection: 'row',
    marginVertical: '4%',
    marginLeft: '5%',
  },
  arrowIcon: {
    marginLeft: 'auto',
    marginRight: '5%',
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  menu: {
    fontWeight: '500',
    fontSize: 18,
    color: '#393939',
    // marginTop: '4%',
    // marginLeft: '5%',
    flex: 1,
  },
  btnLgt: {
    alignItems: 'center',
    backgroundColor: '#FFCD61',
    padding: 10,
    borderRadius: 15,
    height: 50,
    textAlign: 'center',
    marginTop: '50%',
  },
  logout: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 'auto',
    marginTop: 'auto',
  },
});

export default styles;
