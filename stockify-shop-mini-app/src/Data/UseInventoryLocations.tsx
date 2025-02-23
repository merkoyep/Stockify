import { useCallback } from 'react';
import inventoryData from './InventoryData.json';

interface Location {
  name: string;
  city: string;
  country: string;
  quantity: number;
}

export const useInventoryLocations = (productId: string) => {
  const getLocations = useCallback((): Location[] => {
    const locations: Location[] = [];
    
    inventoryData.data.locations.edges.forEach(locationEdge => {
      const location = locationEdge.node;
      
      // Check inventory levels at this location
      const inventoryMatch = location.inventoryLevels.edges.find(edge => 
        edge.node.id.includes(productId)
      );

      if (inventoryMatch && inventoryMatch.node.quantities[0].quantity > 0) {
        locations.push({
          name: location.name,
          city: location.address.city,
          country: location.address.country,
          quantity: inventoryMatch.node.quantities[0].quantity
        });
      }
    });

    return locations;
  }, [productId]);

  return {
    getLocations
  };
};
