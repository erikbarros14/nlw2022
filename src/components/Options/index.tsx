import React from 'react';
import { View , Text} from 'react-native';
import { Copyrght } from '../Copyrght';
import { Option } from '../Option';

	import {feedbackTypes} from '../../utils/feedbackTypes'
  import { FeedbackType } from '../Widget';
import { styles } from './styles';
interface  Props{
  onFeedbackTypechanged: (feedbackType : FeedbackType) => void
}

export function Options({onFeedbackTypechanged} : Props) {
  return (
    <View style={styles.container}>  

    <Text style={styles.title}>
      Deixe seu feedback!
    </Text>

  <View  style={styles.options}>
  {
    Object.entries(feedbackTypes).map(([key, value]) => (
      <Option
        key={key}
        title={value.title}
        image={value.image}
        onPress={  () => onFeedbackTypechanged(key as FeedbackType)}
      />
    ))
  }
   
  </View>
 <Copyrght/>
 
    </View>
  );
}