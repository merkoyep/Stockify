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
  return <Button text="Check In-store Inventory" onPress={handleOpenSheet} />
}
