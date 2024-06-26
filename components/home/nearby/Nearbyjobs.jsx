import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

import useFetch from '../../../hook/useFetch';

const Nearbyjobs = () => {
  const router = useRouter();
  
  // Destructure useFetch return object
  const { data, isLoading, error } = useFetch
  ('search', {
    query: 'React developer',
    num_pages: 1
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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

          // Return a NearbyJobCard for each "job" in the data map
          data?.map((job) => (

            // "?." allows for nonexistent values, continue
            // to use "." after affirming the value exists
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs