import {Button} from '@shopify/shop-minis-ui-extensions'

import type {ProductVariantsRenderBeforeQueryData} from './input.graphql'

export function Render({
  extensionData,
}: {
  extensionData: ProductVariantsRenderBeforeQueryData | null
}) {
  return (
    <Button
      text="My extension"
      onPress={() => {
        console.log('Product data from input query:', extensionData?.product)
      }}
    />
  )
}
