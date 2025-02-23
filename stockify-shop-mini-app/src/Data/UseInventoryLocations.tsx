import { useCallback } from 'react';
import inventoryData from './InventoryData.json';

interface Location {
  name: string;
  quantity: number;
}

interface Variant {
  id: string;
  title: string;
}

export const useInventoryLocations = (variantId: string) => {
  const getLocations = useCallback((): Location[] => {
    const locations: Location[] = [];
    
    // Find the variant in the data
    let foundVariant;
    inventoryData.data.products.edges.forEach(edge => {
      const variant = edge.node.variants.nodes.find(v => v.id === variantId);
      if (variant) {
        foundVariant = variant;
      }
    });

    if (foundVariant) {
      // Get inventory levels for the variant
      foundVariant.inventoryItem.inventoryLevels.edges.forEach(edge => {
        const locationData = edge.node;
        const quantity = locationData.quantities[0].quantity;

        // Only add locations with available inventory
        if (quantity > 0) {
          locations.push({
            name: locationData.location.name,
            quantity: quantity
          });
        }
      });
    }

    return locations;
  }, [variantId]);

  const getVariants = useCallback((): Variant[] => {
    const variants: Variant[] = [];
    
    inventoryData.data.products.edges.forEach(edge => {
      edge.node.variants.nodes.forEach(variant => {
        variants.push({
          id: variant.id,
          title: variant.title || edge.node.title // Fallback to product title if variant title not available
        });
      });
    });

    return variants;
  }, []);

  return {
    getLocations,
    getVariants
  };
};
