import {Sheet} from '@shopify/shop-minis-platform-sdk/src/components/Sheet/Sheet'
import {ProductLocations} from '../Data/ProductLocations'
import React, {useState, useMemo} from 'react'
import {Text, View, HStack} from 'react-native'
import {Picker} from '@react-native-picker/picker'

// interface Inventory{
//   store: string,
//   inventoryLevel: number,
// }

export function InventoryDisplaySheet({data}: {data: {extensionData: any}}) {

  // const [inventory, setInventory] = useState<Inventory[]>([
  //  {store: 'Store 1', inventoryLevel: 10},
  //  {store: 'Store 2', inventoryLevel: 20},
  // ])
  const {extensionData} = data

  // Memoize the variant items array so it doesn't get recreated on every render
  const variantItems = useMemo(() => {
    return extensionData.product.variants.nodes.map((variant: any) => ({
      label: variant.title,
      value: variant.id,
    }))
  }, [extensionData.product.variants.nodes])

  const [variant, setVariant] = useState(variantItems[0].value)

  return (
    <Sheet
      key={1}
      dismissModal={() => {}}
      showCloseButton={false}
      HeaderComponent={() => null}
    >
      {/* <Text>Product Data: {JSON.stringify(extensionData.product)}</Text>
        <Text>Product:{JSON.stringify(extensionData.product.id)}</Text>
        <Text>Variants:{JSON.stringify(extensionData.product.variants.id)}</Text>*/}


      <View>
      {variant && <ProductLocations productId={variant} />}
        {variantItems.length > 1 && (
          <Picker
            selectedValue={variant}
            onValueChange={itemValue => {
              setVariant(itemValue)
              console.log(itemValue)
            }}
          >
            {variantItems.map((item: any) => (
              <Picker.Item
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        )}
        
        {/* {variantItems.map((item) => (
              <HStack key={item.value} alignItems="center" padding={8}>
                <Text
                  onPress={() => setVariant(item.value)}
                  style={{
                    padding: 10,
                    backgroundColor: variant === item.value ? '#e6e6e6' : 'transparent',
                    borderRadius: 4
                  }}
                >
                  {item.label}
                </Text>
              </HStack>
            ))} */}
        {/* <Picker
              selectedValue={variant}
              onValueChange={(itemValue) => {
                console.log(itemValue)
              }}
              items={variantItems}
              handleDismiss={() => {}}
            >
            </Picker> */}
      </View>
    </Sheet>
  )
}
