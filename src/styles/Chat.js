import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: '900',
    padding: '7%',
    fontFamily: 'Roboto',
    flexDirection: 'row',
  },
  search: {
    flexDirection: 'row',
    backgroundColor: '#bfbcb2',
    width: '90%',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  chat: {
    flexDirection: 'row',
  },
  searchChat: {
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  infoChat: {
    marginLeft: '10%',
    marginTop: '6%',
  },
  infoNotif: {
    marginLeft: '10%',
    marginTop: '6%',
  },
  titleChat: {
    fontSize: 17,
    marginLeft: '5%',
  },
  noChat: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
  },
});

export default styles;
