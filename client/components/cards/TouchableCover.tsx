import React, { useContext } from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import Books from '../../types/Book'
import { ActionType } from '../../types/ReducerAction';
import AppContext from '../context/context';



interface Props {
  book: Books;
  imageSize: string;
}

const TouchableCover: React.FC<Props> = ({book, imageSize}) => {
  const size = imageSize==='small' ? {height:120, width:100} : {height:200, width:150};
  const {dispatch} = useContext(AppContext)
  return (
    <TouchableOpacity 
        activeOpacity={0.7} 
        onPress={() => dispatch({type: ActionType.OPEN_MODAL, selectedBook: book})}
      >
        <Image
        style={[styles.image, size]}
          source={
            {uri: book.imageLinks.thumbnail}
          }
        />
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});

export default TouchableCover;