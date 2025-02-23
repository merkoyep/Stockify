import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useInventoryLocations } from './UseInventoryLocations';

interface ProductLocationsProps {
  productId: string;
}

export const ProductLocations: React.FC<ProductLocationsProps> = ({ productId }) => {
  const { getLocations } = useInventoryLocations(productId);
  const locations = getLocations();

  if (locations.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noStock}>No stock available at any location</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available at:</Text>
      {locations.map((location, index) => (
        <View key={index} style={styles.locationContainer}>
          <View style={styles.locationInfo}>
            <Text style={styles.locationName}>{location.name}</Text>
          </View>
          <Text style={styles.quantity}>{location.quantity} in stock</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  locationInfo: {
    flex: 1,
  },
  locationName: {
    fontSize: 16,
    fontWeight: '500',
  },
  quantity: {
    fontSize: 14,
    fontWeight: '500',
    color: '#007AFF',
  },
  noStock: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});
