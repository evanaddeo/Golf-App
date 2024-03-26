import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

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
            data={[1, 2, 3, 4, 5, 6, 7, 8]}                  // Mock data
            renderItem={( item ) => (
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