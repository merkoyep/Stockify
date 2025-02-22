import { DocumentNode } from "graphql-typed";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
export namespace ProductVariantsRenderBeforeQueryPartialData {
  export interface ProductVariantsNodesSelectedOptions {
    __typename?: "SelectedOption" | null;
    name?: string | null;
    value?: string | null;
  }
  export interface ProductVariantsNodes {
    __typename?: "ProductVariant" | null;
    id?: string | null;
    title?: string | null;
    selectedOptions?: (ProductVariantsRenderBeforeQueryPartialData.ProductVariantsNodesSelectedOptions | null)[] | null;
  }
  export interface ProductVariants {
    __typename?: "ProductVariantConnection" | null;
    nodes?: (ProductVariantsRenderBeforeQueryPartialData.ProductVariantsNodes | null)[] | null;
  }
  export interface Product {
    __typename?: "Product" | null;
    id?: string | null;
    title?: string | null;
    variants?: ProductVariantsRenderBeforeQueryPartialData.ProductVariants | null;
  }
  export interface Shop {
    __typename?: "Shop" | null;
    id?: string | null;
  }
}
export interface ProductVariantsRenderBeforeQueryPartialData {
  product?: ProductVariantsRenderBeforeQueryPartialData.Product | null;
  shop?: ProductVariantsRenderBeforeQueryPartialData.Shop | null;
}
export namespace ProductVariantsRenderBeforeQueryData {
  export interface ProductVariantsNodesSelectedOptions {
    __typename: "SelectedOption";
    name: string;
    value: string;
  }
  export interface ProductVariantsNodes {
    __typename: "ProductVariant";
    id: string;
    title: string;
    selectedOptions: ProductVariantsRenderBeforeQueryData.ProductVariantsNodesSelectedOptions[];
  }
  export interface ProductVariants {
    __typename: "ProductVariantConnection";
    nodes: ProductVariantsRenderBeforeQueryData.ProductVariantsNodes[];
  }
  export interface Product {
    __typename: "Product";
    id: string;
    title: string;
    variants: ProductVariantsRenderBeforeQueryData.ProductVariants;
  }
  export interface Shop {
    __typename: "Shop";
    id: string;
  }
}
export interface ProductVariantsRenderBeforeQueryData {
  product?: ProductVariantsRenderBeforeQueryData.Product | null;
  shop?: ProductVariantsRenderBeforeQueryData.Shop | null;
}
declare const document: DocumentNode<ProductVariantsRenderBeforeQueryData, never, ProductVariantsRenderBeforeQueryPartialData> & TypedDocumentNode<ProductVariantsRenderBeforeQueryData, {
  [key: string]: never;
}>;
export default document;