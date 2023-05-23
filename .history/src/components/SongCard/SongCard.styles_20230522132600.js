import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  info_container: {
    backgroundColor: 'purple',
    flexDirection: 'row',
  },
  year: {
    marginLeft: 10,
    fontSize: 12,
    color: 'gray',
    fontWeight: 'bold',
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
  },
  soldout_title: {},
});
