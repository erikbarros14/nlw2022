import React,{useState}  from 'react';
import { View ,TextInput,
  Image,
  TouchableOpacity,
  Text, TouchableWithoutFeedback, Keyboard
  
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { theme } from '../../theme';

import { captureScreen } from 'react-native-view-shot'

import { styles } from './styles';
import {FeedbackType} from '../../components/Widget'
import {Screenshot} from '../../components/Screenshot'
import {Button} from '../../components/Button'
import * as FileSystem from 'expo-file-system'

import {  feedbackTypes} from "../../utils/feedbackTypes";
import { api } from '../../lib/api';


interface Props {
  feedbackType : FeedbackType;
onFeedbackCanceled:() => void;
onFeedbackSent:() => void;

}

export function Form( {feedbackType , onFeedbackCanceled, onFeedbackSent} : Props ) {

   const [ isSendFeedback , setIsSendFeedback] = useState(false) 

 const [screenshot , setScreenshot ] = useState<string | null> (null)

const feedbackTypeInfo = feedbackTypes[feedbackType]
const [comment, setComment] = useState('') 
   function HandleScreenshot () {
     captureScreen({
       format: 'jpg',
       quality: 0.8
     })
     .then(uri => setScreenshot(uri))
     .catch(Error => console.log(Error))
   }
   function handleScreenshotRemover () {
     setScreenshot (null) ;
   }
    async function handleSendFeedback() {
      if(isSendFeedback) {
          return ;
      }
      setIsSendFeedback(true)
      const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot , {encoding: 'base64'})

      try{
         await api.post('/feedbacks',{
           type : feedbackTypes,
           screenshot: `data: image/png;base64, ${screenshotBase64}` ,
           comment
         })
         onFeedbackSent()
      }
      catch (error){
      console.log(error)
      setIsSendFeedback(false)
      }
    }

  return (
    <View style={styles.container}>
      <View  style={styles.header}>
        <TouchableOpacity  onPress={onFeedbackCanceled}>  
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
        autoCorrect={false}     
        onChangeText={setComment} 
      
      />
       <View   style={styles.footer}>
         <Screenshot
         onTakeShot={HandleScreenshot}
         onRemoveShot={handleScreenshotRemover}
         screenshot= {screenshot}
         
         
         />

         <Button
         onPress={handleSendFeedback }
          isLoading={isSendFeedback}
         />
       </View>
      
    </View>
  );
}