import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const tourneyTypes = ["PGA", "LIV", "Amateur"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("PGA")

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Evan</Text>
        <Text style={styles.welcomeMessage}>Golf pool shit</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput} 
            value="" 
            onChange={() => {}} 
            placeholder="What do u need?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={tourneyTypes} 
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item} // Tracks the selected btn
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal  // Makes the FlatList horizontal
        />
      </View>
    </View>
  )
}

export default Welcome