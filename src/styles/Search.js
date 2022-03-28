import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: 425,
    height: 300,
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    marginTop: 15,
    padding: 8,
    color: '#000',
  },
  itemHeader: {
    flex: 1,
    backgroundColor: 'lightblue',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  // imageWrapper: {
  //   flexDirection: 'row',
  // },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#393939',
    marginTop: '4%',
    marginLeft: '5%',
    flex: 1,
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
    width: 50,
    height: '100%',
    marginLeft: 50,
  },
  imageWrapper: {
    borderRadius: 30,
    width: 50,
    height: 50,
    // margin : 10,
    marginLeft: 15,
    marginRight: 30,
  },
  // title: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
  titleNd: {
    fontSize: 12,
  },
  titleRd: {
    fontSize: 16,
    color: '#087E0D',
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#DFDEDE',
  },
  btnAdd: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    height: 60,
    textAlign: 'center',
    // width : '150',
    marginLeft: '8%',
    flexDirection: 'row',
  },
  AddBtn: {
    color: '#393939',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 35,
  },
  filterIcon: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
});
export default styles;
