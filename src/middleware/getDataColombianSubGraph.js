import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export function getDataColombianSubGraph () {
  const url = 'https://api.studio.thegraph.com/query/32331/colombian-dao-market/v0.0.1'

  const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache()
  })

  const queryItemsForSale = `
    query {
      dataOfferds {
        id
        itemId
        tokenId
        price
        nft
      }
    }
  `
  const queryPurchasedItems = `
    query {
      dataBoughts() {
        id
        itemId
        tokenId
        price
        nft
        buyer
      }
    }
  `
  const getItemsForSale = async () => {
    const response = await client.query({ query: gql(queryItemsForSale) })
    return response.data.dataOfferds
  }

  const getPurchasedItems = async () => {
    const response = await client.query({ query: gql(queryPurchasedItems) })
    return response.data.contributorQuotes
  }

  return {
    getItemsForSale,
    getPurchasedItems
  }
}
