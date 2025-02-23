import { useCallback } from 'react';
import inventoryData from './InventoryData.json';

interface Location {
  name: string;
  quantity: number;
}

export const useInventoryLocations = (productId: string) => {
  const getLocations = useCallback((): Location[] => {
    const locations: Location[] = [];
    
    // Find the product in the data
    const product = inventoryData.data.products.edges.find(edge => 
      edge.node.id === productId
    );

    if (product) {
      // Get inventory levels for each variant
      product.node.variants.nodes.forEach(variant => {
        variant.inventoryItem.inventoryLevels.edges.forEach(edge => {
          const locationData = edge.node;
          const quantity = locationData.quantities[0].quantity;

          // Only add locations with available inventory
          if (quantity > 0) {
            // Check if location already exists in array
            const existingLocation = locations.find(loc => 
              loc.name === locationData.location.name
            );

            if (existingLocation) {
              // Add quantities if location exists
              existingLocation.quantity += quantity;
            } else {
              // Add new location if it doesn't exist
              locations.push({
                name: locationData.location.name,
                quantity: quantity
              });
            }
          }
        });
      });
    }

    return locations;
  }, [productId]);

  return {
    getLocations
  };
};
