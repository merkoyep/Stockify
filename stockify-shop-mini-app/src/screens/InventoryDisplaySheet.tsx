
import { Sheet } from '@shopify/shop-minis-platform-sdk/src/components/Sheet/Sheet'
import React, { useState } from 'react'
import {Text, View, HStack} from 'react-native'

interface Inventory{
  store: string,
  inventoryLevel: number,
}

export function InventoryDisplaySheet({
  data,
}: {data: {extensionData: any}}) {
  // const [variant, setVariant] = useState('');
  const [inventory, setInventory] = useState<Inventory[]>([
    {store: 'Store 1', inventoryLevel: 10},
    {store: 'Store 2', inventoryLevel: 20},
  ])
  const {extensionData} = data

  return (
    <Sheet dismissModal={() => {}} showCloseButton={false} HeaderComponent={() => null}>
        {/* <Text>Product Data: {JSON.stringify(extensionData.product)}</Text>
        <Text>Product:{JSON.stringify(extensionData.product.id)}</Text> */}
        <Text>Variants:{JSON.stringify(extensionData.product.variants.id)}</Text>
        <View>
          {inventory.map((item) => (
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text key={item.store}>{item.store}</Text>
              <Text key={item.inventoryLevel}>{item.inventoryLevel}</Text>
            </View>
          ))}
        </View>
    </Sheet>
  )
}
