import { Card, Text } from '@ui-kitten/components';
import React from 'react';
import { Image, StyleSheet, View} from 'react-native';
import Book from '../../types/Book';
import TouchableCover from './TouchableCover';

interface Props {
  book: Book;
}

const AuthorImage: React.FC<Props> = ( {book}) => {
  return (
    <View>
      <Text category='h4'>{book.title}</Text>
      <Text category='s1'>{book.authors.length > 1 ? book.authors.join(', ') : book.authors}</Text>
      <Card style={styles.card}>
        <View style={styles.imageContainer}>
          <TouchableCover book={book} imageSize='normal'/>
        </View>
      </Card>
    </View>
    
  )
}
export default AuthorImage;
const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    padding: 10,
  },
  card: {
    margin: 10,
  },
})