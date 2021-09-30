import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const ProductList = ({product}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <TouchableOpacity
        style={styles.button}
        disabled={product.inStock === true ? false : true}>
        <Text style={styles.buttonText}>
          {product.inStock === true ? 'Sepete Ekle' : 'Stokta Yok'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#E8F0F2',
    margin: 5,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    resizeMode: 'contain',
    margin: 10,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  stock: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    color: 'red',
  },
  button: {
    backgroundColor: '#053742',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ProductList;
