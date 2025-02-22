
import { Sheet } from '@shopify/shop-minis-platform-sdk/src/components/Sheet/Sheet'
import React from 'react'
import {View, Text} from 'react-native'
type InventoryDisplaySheetProps = {
  data: any
  dismissModal?: (withAnimation?: boolean) => void
}

export function InventoryDisplaySheet({
  data,
  dismissModal,
}: InventoryDisplaySheetProps) {
  const {extensionData} = data
  const handleDismiss = () => dismissModal?.()
  return (
    <Sheet dismissModal={handleDismiss}>
      <View
        style={{
          width: 300,
          padding: 20,
          backgroundColor: 'white',
          borderRadius: 10,
        }}
      >
        <Text>Product Data:</Text>
        <Text>{JSON.stringify(extensionData, null, 2)}</Text>
      </View>
    </Sheet>
  )
}
