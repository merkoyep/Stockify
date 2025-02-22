
import { Sheet } from '@shopify/shop-minis-platform-sdk/src/components/Sheet/Sheet'
import React from 'react'
import {Text} from 'react-native'
type InventoryDisplaySheetProps = {
  data: any
}

export function InventoryDisplaySheet({
  data,
}: InventoryDisplaySheetProps) {
  const {extensionData} = data
  return (
    <Sheet dismissModal={() => {}} showCloseButton={false} HeaderComponent={() => null}>
        <Text>Product Data:</Text>
        <Text>{JSON.stringify(extensionData, null, 2)}</Text>
    </Sheet>
  )
}
