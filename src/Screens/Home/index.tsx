import React, {useCallback, useMemo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Animated, {
  FadeInLeft,
  FadeOutRight,
  Layout,
} from 'react-native-reanimated';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {Share, Heart, Message} from 'iconsax-react-native';

import {RootState} from '../../Redux/store';
import {Post} from '../../Types/Posts';
import {MainStackParamList} from '../../Types/RootStackParamList';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import styles from './styles';
import Metrics from '../../Assets/Utils/Metrics';
import Colors from '../../Assets/Utils/Colors';

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, 'HomePage'>) => {
  const posts = useSelector((state: RootState) => state.posts);
  const memoizedPosts = useMemo(() => posts, [posts]);

  const renderItem = useCallback(
    ({item}: {item: Post}) => (
      <Animated.View
        entering={FadeInLeft.duration(500)}
        exiting={FadeOutRight.duration(500)}
        layout={Layout.springify()}
        style={styles.postContainer}>
        <View style={styles.row}>
          <Image
            source={{uri: item.userProfile}}
            style={styles.userProfile}
            resizeMode="cover"
          />
          <Text style={styles.username}>{item.username}</Text>
        </View>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.row}>
          <TouchableOpacity style={styles.actionContainer}>
            <Heart size={Metrics.measure(18)} color={Colors.BLACK} />
            <Text style={styles.actionCount}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionContainer}>
            <Message size={Metrics.measure(18)} color={Colors.BLACK} />
            <Text style={styles.actionCount}>{item.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionContainer}>
            <Share size={Metrics.measure(18)} color={Colors.BLACK} />
          </TouchableOpacity>
        </View>
        <Text style={styles.content}>
          <Text style={styles.username}>{item.username}</Text> : {item.content}
        </Text>
        <Text style={styles.date}>6 Feb</Text>
      </Animated.View>
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home Feed" />
      <FlatList
        data={memoizedPosts}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        getItemLayout={(_, index) => ({
          length: 200,
          offset: 200 * index,
          index,
        })}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={10}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}
      />
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

// Prevent unnecessary re-renders of the entire HomeScreen
export default React.memo(HomeScreen);
