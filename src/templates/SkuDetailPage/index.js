import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'

import { useProductsContext } from 'context/ProductsContext'
import ImageLocal from 'components/ImageLocal'

import * as S from './styles'

// import ProductColors from './ProductColors'
import SkuPrice from './SkuPrice'
import ProductName from './ProductName'

import AddToCartButton from './AddToCartButton'

const SkuDetailPage = ({ pageContext: { productId, skuId } }) => {
  const { products, skus } = useProductsContext()

  const product = products[productId]
  const sku = skus[skuId]

  return (
    <S.Main>
      <S.ProductImage>
        <ImageLocal localFiles={sku.localFiles} alt={product.name} />
      </S.ProductImage>
      <S.ProductDetails>
        <ProductName product={product} />
        <Divider />
        <SkuPrice sku={sku} />
        {/* <ProductColors product={product} /> */}
        {/* <Size product={product} /> */}
        <AddToCartButton product={product} />
        {/* <DeliveryConditions /> */}
      </S.ProductDetails>
    </S.Main>
  )
}

SkuDetailPage.propTypes = {
  pageContext: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    skuId: PropTypes.string.isRequired,
  }).isRequired,
}

export default SkuDetailPage