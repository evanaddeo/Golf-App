import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter();
  
  // Destructure useFetch return object
  const { data, isLoading, error } = useFetch
  ('search', {
    query: 'React developer',
    num_pages: 1
  });
  const [selectedJob, setSelectedJob] = useState()
  const handleCardPress = (item) => {
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (    // If isLoading
          <ActivityIndicator size="large" colors={COLORS.primary}/>
        ) : error ? (     // Else if error
          <Text>Something went wrong</Text>
        ) : (             // Else
          <FlatList 
            data={data}                  // Mock data
            renderItem={({ item }) => (
              <PopularJobCard item={item} />
            )}
            keyExtractor={item => item?.job_id}  // Where job_id is one of the keys of real data
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs