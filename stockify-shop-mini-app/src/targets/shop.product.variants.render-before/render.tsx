import {Button} from '@shopify/shop-minis-ui-extensions'
import {Text} from 'react-native'
import type {ProductVariantsRenderBeforeQueryData} from './input.graphql'
import {useSheet} from '@shopify/shop-minis-platform-sdk'
import { InventoryDisplaySheet } from '../../screens/InventoryDisplaySheet';

export function Render({
  extensionData,
}: {
  extensionData: ProductVariantsRenderBeforeQueryData | null  
}) {
  const logAvailableInventory = () => {
    if (!extensionData?.locations) {
      console.log('No location data available');
      return;
    }

    const productId = extensionData.product?.id;

    extensionData.locations.edges.forEach(locationEdge => {
      const locationNode = locationEdge.node;
      if (locationNode?.inventoryLevels) {
        locationNode.inventoryLevels.edges.forEach(inventoryEdge => {
          const inventoryNode = inventoryEdge.node;
          const inventoryItemId = inventoryNode.id.split('inventory_item_id=')[1];
          
          if (inventoryItemId === productId) {
            const availableQuantity = inventoryNode?.quantities?.find(q => q.quantity > 0);
            if (availableQuantity) {
              console.log(`Location: ${locationNode.name}, Available Quantity: ${availableQuantity.quantity}`);
            }
          }
        });
      }
    });
  };

  const openSheet = useSheet()

  const handleOpenSheet = () => {
    openSheet(
    dismiss => (
      <InventoryDisplaySheet
        dismissModal={dismiss}
        data={extensionData}
      />
    )
    )}
  return (
  <>
    <Button text="Check In-store Inventory" onPress={handleOpenSheet} />
    <Button text="Log Available Inventory" onPress={logAvailableInventory} />
  </>
  )
}
