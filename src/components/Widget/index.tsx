import React , {useRef} from 'react';
import { TouchableOpacity} from 'react-native';
import {ChatTeardropDots} from 'phosphor-react-native'
import { styles } from './styles';
import { theme } from '../../theme';
import BottomSheet from '@gorhom/bottom-sheet'
import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler'
import { Options } from '../Options';


  export function Widget() {

const bottomSheetRef = useRef<bottomSheet>(null)

function handleOpen() {
  bottomSheetRef.current?.expand()
}

  return (
    <>
     <TouchableOpacity style={styles.button}
      onPress={handleOpen}
     >
      <ChatTeardropDots
       size={40}
       weight='bold'
       color={theme.colors.text_on_brand_color}
      />
     </TouchableOpacity>
      <BottomSheet
          ref={bottomSheetRef}
       snapPoints={[4, 300]}
       backgroundStyle={styles.modal}
         handleIndicatorStyle={styles.indicator}  
      >
       <Options/>
      </BottomSheet>

    </>
  );  
}
