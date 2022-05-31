import React from 'react';
import { View ,TextInput,
  Image,
  TouchableOpacity,
  Text
  
  
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { theme } from '../../theme';

import { styles } from './styles';
import {FeedbackType} from '../../components/Widget'
import {Screenshot} from '../../components/Screenshot'
import {Button} from '../../components/Button'

import {  feedbackTypes} from "../../utils/feedbackTypes";

interface Props {
  feedbackType : FeedbackType;
}

export function Form( {feedbackType} : Props ) {
const feedbackTypeInfo = feedbackTypes[feedbackType]

  return (
    <View style={styles.container}>
      <View  style={styles.header}>
        <TouchableOpacity>  
         <ArrowLeft size={30} weight= 'bold' color={theme.colors.text_secondary}  />

        </TouchableOpacity>
        <View style={styles.titleContainer}>
          
                <Image
                  source={feedbackTypeInfo.image}
                  style={styles.image}
                />

          <Text style={styles.titleText}>
          {feedbackTypeInfo.title}
          
          </Text>
          
        </View>

      </View>
      <TextInput
        style={styles.input}
        multiline
        placeholder='algo não está fucionando conte com detalhes.'
        placeholderTextColor={ theme.colors.text_secondary }        
      
      />
       <View   style={styles.footer}>
         <Screenshot
         onTakeShot={() =>  {}}
         onRemoveShot={() => {}}
         screenshot= "https://github.com/erikbarros14.png"
         
         
         />

         <Button
          isLoading={false}
         />
       </View>
      
    </View>
  );
}