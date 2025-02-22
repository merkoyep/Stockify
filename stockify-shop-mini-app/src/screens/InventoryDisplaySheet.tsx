
import { Sheet } from '@shopify/shop-minis-platform-sdk/src/components/Sheet/Sheet'
import React from 'react'
import {Text} from 'react-native'


export function InventoryDisplaySheet({
  data,
}: {data: {extensionData: any}}) {
  const {extensionData} = data
  return (
    <Sheet dismissModal={() => {}} showCloseButton={false} HeaderComponent={() => null}>
        <Text>Product Data: {JSON.stringify(extensionData.product)}</Text>
        <Text>Product:{JSON.stringify(extensionData.product.id)}</Text>
        <Text>Variants:{JSON.stringify(extensionData.product.variants.id)}</Text>
    </Sheet>
  )
}
