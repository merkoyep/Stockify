import React from 'react'
import {View, Text} from 'react-native'

export function InventoryDisplaySheet({data}: {data: any}) {
  const {extensionData} = data

  return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
      </View>
  )
}
