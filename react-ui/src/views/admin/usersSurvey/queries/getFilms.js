import { gql } from "@apollo/client";

export const query = gql`
  query GetAllFilms {
     allFilms{
     pageInfo{
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
      totalCount
      films{
        title
        episodeID
        openingCrawl
        openingCrawl
        director
        releaseDate
        speciesConnection{
          totalCount
        }
        starshipConnection{
          totalCount
        }
        id
      }
    }
  }
`