import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  textInput: {},
})
const Component = () => {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TextInput style={styles.textInput} placeholder={'My Input'}/>
    </KeyboardAwareScrollView>
  )
}

export default Component;
