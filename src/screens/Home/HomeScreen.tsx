import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  SafeAreaView,
  ToastAndroid,
  PermissionsAndroid,
  Keyboard,
  FlatList,
  Linking,
  InteractionManager,
} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import Clipboard from '@react-native-clipboard/clipboard';
import RNFetchBlob from 'rn-fetch-blob';
import LinearGradient from 'react-native-linear-gradient';


const openSettings = () => {
  Linking.openSettings();
};

const HomeScreen = ({navigation}:any) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<
    {text?: string; sender: string; image?: any}[]
  >([]);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');
  const inputRef = useRef<TextInput>(null);
  const flatListRef = useRef<FlatList<any>>(null);

  const scrollToBottom = () => {
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToOffset({offset: 0, animated: true});
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const requestStoragePermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const isAndroid13OrAbove = Platform.Version >= 33;
        const isAndroid11To12 = Platform.Version >= 30 && Platform.Version < 33;

        if (isAndroid13OrAbove) {
          const readImagePermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
            {
              title: 'Storage Permission Required',
              message: 'App needs access to your storage to download images',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          return readImagePermission === PermissionsAndroid.RESULTS.GRANTED;
        } else if (isAndroid11To12) {
          const manageStoragePermission = await PermissionsAndroid.request(
            'android.permission.MANAGE_EXTERNAL_STORAGE' as any,
            {
              title: 'Storage Permission Required',
              message: 'App needs access to manage storage to download images',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          return manageStoragePermission === PermissionsAndroid.RESULTS.GRANTED;
        } else {
          const writePermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Storage Permission Required',
              message:
                'App needs access to write to storage to download images',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          return writePermission === PermissionsAndroid.RESULTS.GRANTED;
        }
      } else {
        return true;
      }
    } catch (err) {
      console.warn('Permission request error:', err);
      return false;
    }
  };
  const sendMessage = () => {
    const trimmedText =
      editingIndex !== null ? editingText.trim() : message.trim();
    if (trimmedText === '') return;

    if (editingIndex !== null) {
      const updatedMessages = [...messages];
      updatedMessages[editingIndex].text = trimmedText;
      if (
        updatedMessages[editingIndex + 1] &&
        updatedMessages[editingIndex + 1].sender === 'ai'
      ) {
        updatedMessages.splice(editingIndex + 1, 1);
      }
      setMessages(updatedMessages);
      setEditingIndex(null);
      setEditingText('');
      setTimeout(() => {
        const userMessage = trimmedText.toLowerCase();
        if (userMessage === 'mountains and galaxy image') {
          setMessages(prev => [
            ...prev,
            {
              sender: 'ai',
              image: require('../../assets/images/image11.png'),
              text: 'Here comes your beautiful night sky and a\ndazzling star! I hope it captures the wonder\nyou’re looking for.',
            },
          ]);
        } else if (userMessage === 'what is web3?') {
          setMessages(prev => [
            ...prev,
            {
              text: 'What is Web3? Web3 is a decentralized internet built on blockchain, giving users control over their data, identity, and digital assets.',
              sender: 'ai',
            },
          ]);
        } else {
          setMessages(prev => [
            ...prev,
            {text: 'Hi! How can I assist you today 😊', sender: 'ai'},
          ]);
        }
        scrollToBottom();
      }, 1000);
    } else {
      const userMessage = message.trim().toLowerCase();
      setIsMessageSent(true);
      const newMessages = [...messages, {text: message, sender: 'user'}];
      setMessages(newMessages);
      setMessage('');
      setTimeout(() => {
        if (userMessage === 'mountains and galaxy image') {
          setMessages(prev => [
            ...prev,
            {
              sender: 'ai',
              image: require('../../assets/images/image11.png'),
              text: 'Here comes your beautiful night sky and a\ndazzling star! I hope it captures the wonder\nyou’re looking for.  ✨',
            },
          ]);
        } else if (userMessage === 'what is web3?') {
          setMessages(prev => [
            ...prev,
            {
              text: 'What is Web3? Web3 is a decentralized internet built on blockchain, giving users control over their data, identity, and digital assets.',
              sender: 'ai',
            },
          ]);
        } else {
          setMessages(prev => [
            ...prev,
            {text: 'Hi! How can I assist you today 😊', sender: 'ai'},
          ]);
        }
        scrollToBottom();
      }, 1000);
    }
  };

  const downloadImage = async () => {
    const imageUrl = 'https://your-image-url.com/downloandimage.png';

    try {
      const granted = await requestStoragePermission();
      if (!granted) {
        ToastAndroid.show('Storage permission denied', ToastAndroid.SHORT);
        return;
      }

      const {config, fs} = RNFetchBlob;
      const downloadDir: string =
        Platform.OS === 'ios' ? fs.dirs.DocumentDir : fs.dirs.DownloadDir;
      const filePath = `${downloadDir}/image_${uuidv4()}.png`;

      ToastAndroid.show('Download started...', ToastAndroid.SHORT);
      const res = await config({
        fileCache: true,
        appendExt: 'png',
        path: filePath,
      }).fetch('GET', imageUrl);

      console.log('Download success:', res.path());
      if (Platform.OS === 'android') {
        RNFetchBlob.fs
          .scanFile([{path: res.path(), mime: 'image/png'}])
          .then(() => console.log('Scan complete'))
          .catch(err => console.error('Scan error:', err));
      }

      ToastAndroid.show(`Saved to: ${res.path()}`, ToastAndroid.LONG);
    } catch (error) {
      console.error('Download failed:', error);
      ToastAndroid.show('Download failed!', ToastAndroid.SHORT);
    }
  };

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
    ToastAndroid.show('Copied to Clipboard!', ToastAndroid.SHORT);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditingText(messages[index].text || '');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
          <LinearGradient
            colors={['#000000', '#1a237e', '#000000']}
            start={{x: 0.3, y: -1}}
            end={{x: 1, y: 0.5}}
            style={styles.background}
          />
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require('../../assets/images/image9.png')}
                style={styles.imageLeft}
              />
            </TouchableOpacity>
            <Image
              source={require('../../assets/images/volkai1.png')}
              style={styles.imageCenter}
            />
            <Image
              source={require('../../assets/images/image10.png')}
              style={styles.imageRight}
            />
          </View>
          {!isMessageSent ? (
            <View style={styles.centeredContainer}>
              <Image
                source={require('../../assets/images/image7.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Hi, I’m Volkai Ai</Text>
              <Text style={styles.text1}>How can I help you today?</Text>
            </View>
          ) : (
            <FlatList
              keyboardShouldPersistTaps="handled"
              ref={flatListRef}
              data={[...messages].reverse()}
              keyExtractor={(item, index) => index.toString()}
              onContentSizeChange={scrollToBottom}
              renderItem={({item, index}) => {
                const realIndex = messages.length - 1 - index;
                return (
                  <View
                    style={[
                      styles.messageWrapper,
                      item.sender === 'user'
                        ? styles.userWrapper
                        : styles.aiWrapper,
                    ]}>
                    {item.sender === 'ai' && (
                      <View style={styles.aiIconWrapper}>
                        <Image
                          source={require('../../assets/images/volkaiimage.png')}
                          style={styles.aiIcon}
                        />
                      </View>
                    )}
                    <View
                      style={[
                        styles.messageBubble,
                        item.sender === 'user'
                          ? styles.userBubble
                          : styles.aiBubble,
                      ]}>
                      {item.image && (
                        <View style={styles.imageWrapper}>
                          <Image
                            source={item.image}
                            style={styles.messageImage}
                          />
                          <TouchableOpacity
                            onPress={downloadImage}
                            style={styles.downloadButton}>
                            <Image
                              source={require('../../assets/images/downloandimage.png')}
                              style={styles.downloadIcon}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => copyToClipboard(item.text!)}
                            style={styles.copyButton}>
                            <Image
                              source={require('../../assets/images/copyimage.png')}
                              style={styles.copyIcon}
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                      {item.text && (
                        <Text
                          style={[
                            styles.messageText,
                            item.image && {marginTop: 8},
                          ]}>
                          {item.text}
                        </Text>
                      )}
                      {item.sender === 'user' &&
                        item.text?.toLowerCase().trim() === 'what is web3?' && (
                          <TouchableOpacity
                            onPress={() => handleEdit(realIndex)}
                            style={styles.editButton}>
                            <Image
                              source={require('../../assets/images/editimage.png')}
                              style={styles.copyIcon}
                            />
                          </TouchableOpacity>
                        )}
                      {item.image && (
                        <TouchableOpacity
                          onPress={() => copyToClipboard(item.text!)}
                          style={styles.copyButton}>
                          <Image
                            source={require('../../assets/images/copyimage.png')}
                            style={styles.copyIcon}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                );
              }}
              contentContainerStyle={{paddingBottom: 20}}
              inverted
            />
          )}
          <View style={styles.textBox}>
            <Image
              source={require('../../assets/images/volkaiimage.png')}
              style={styles.imageIcon2}
            />
            <Text style={styles.textStyle2}>Volkai Ai</Text>
          </View>
          <View style={styles.textBox1}>
            <Image
              source={require('../../assets/images/searchimage.png')}
              style={styles.imageIcon3}
            />
            <Text style={styles.textStyle3}>Search</Text>
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assets/images/image12.png')}
                style={styles.inputIconLeft}
              />
              <TextInput
                ref={inputRef}
                style={styles.input}
                placeholder="Message Volkai"
                placeholderTextColor="#CDCDCD"
                value={editingIndex !== null ? editingText : message}
                onChangeText={text => {
                  editingIndex !== null
                    ? setEditingText(text)
                    : setMessage(text);
                }}
                onSubmitEditing={sendMessage}
                onBlur={scrollToBottom}
                multiline={true}
                returnKeyType="default"
              />
              <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                <Image
                  source={require('../../assets/images/image13.png')}
                  style={styles.inputIconRight}
                />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 40,
  },
  imageLeft: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 8,
  },
  imageCenter: {
    width: 136,
    height: 40,
    resizeMode: 'contain',
    marginTop: 10,
  },
  imageRight: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
    marginTop: 10,
    marginRight: 10,
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 120,
    width: 120,
  },
  text: {
    color: 'white',
    marginTop: 20,
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 31,
  },
  text1: {
    color: '#CDCDCD',
    fontWeight: '400',
    lineHeight: 20,
    fontSize: 15,
    marginTop: 10,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  userBubble: {
    backgroundColor: '#25D366',
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  aiBubble: {
    backgroundColor: '#333541',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 16,
    flexWrap: 'wrap',
    maxWidth: '100%',
  },
  messageImage: {
    width: 250,
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#333541',
    paddingVertical: 8,
    paddingHorizontal: 18,
    width: '30%',
    marginLeft: 22,
    marginBottom: -28,
  },
  textBox1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#333541',
    paddingVertical: 6,
    paddingHorizontal: 18,
    width: '30%',
    marginLeft: '38%',
    marginTop: -10,
  },
  imageIcon2: {
    width: 20,
    height: 20,
  },
  imageIcon3: {
    width: 25,
    height: 25,
    marginRight: 1,
  },
  textStyle2: {
    color: '#CDCDCD',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
  textStyle3: {
    color: '#CDCDCD',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
  inputWrapper: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: Platform.OS === 'ios' ? 30 : -10,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333541',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  inputIconLeft: {
    width: 55,
    height: 55,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  sendButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIconRight: {
    width: 30,
    height: 30,
  },
  messageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userWrapper: {
    justifyContent: 'flex-end',
  },
  aiWrapper: {
    justifyContent: 'flex-start',
  },
  aiIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333541',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aiIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  copyButton: {
    position: 'absolute',
    marginTop: '100%',
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
  },
  copyIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFF',
  },
  downloadButton: {
    position: 'absolute',
    bottom: 110,
    marginLeft: '85%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    borderRadius: 20,
  },
  imageWrapper: {
    position: 'relative',
    width: 250,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  downloadIcon: {
    width: 20,
    height: 20,
  },
  editButton: {
    position: 'absolute',
    bottom: 8,
    right: '130%',
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    zIndex: 1,
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    position: 'relative',
  },
});
export default HomeScreen;
