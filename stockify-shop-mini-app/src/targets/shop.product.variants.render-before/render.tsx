import {Button} from '@shopify/shop-minis-ui-extensions'

import type {ProductVariantsRenderBeforeQueryData} from './input.graphql'
import { useSheet } from 'node_modules/@shopify/shop-minis-platform-sdk/src/hooks/useSheet';
import { InventoryDisplaySheet } from 'src/screens/InventoryDisplaySheet';



export function Render({
  extensionData,
}: {
  extensionData: ProductVariantsRenderBeforeQueryData | null
}) {
  const openSheet = useSheet()

const handleOpenSheet = () => {
  openSheet(dismiss => <InventoryDisplaySheet data={extensionData} />, {
    backgroundColor: 'shadows-soft',
    showCloseButton: true,
    HeaderComponent: {
      title: 'Product Information',
      onDismiss: dismiss, // Allow dismissal via header
    },
  })
}
  return <Button text="Check In-store Inventory" onPress={handleOpenSheet} />
}
