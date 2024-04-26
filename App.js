import React, { useRef } from 'react';
import { Animated, View, Button } from 'react-native';

const AnimatedImageExample = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={{
          opacity: fadeAnim, // Bind opacity to animated value
          width: 150,
          height: 150,
        }}
      />
      <View style={{ marginTop: 20 }}>
        <Button title="Fade In Image" onPress={fadeIn} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="Fade Out Image" onPress={fadeOut} />
      </View>
    </View>
  );
};

export default AnimatedImageExample;
