import React, {useState} from 'react'
import {Grid} from '@material-ui/core'
import SearchField from '../components/SearchField'
import axios from 'axios'
import SearchResult from '../components/SearchResult'
import searchResultJson from '../data/searchResults.json'

export default function HomePage() {
  const [searchText, setSearchText] = useState('')
  const [searchResult, setSearchResult] = useState(searchResultJson)

  const onSearch = async (searchTxt) => {
    setSearchText(searchTxt)
    const {data} = axios.get('/')
    setSearchResult(data)
  }

  return (
    <>
      <Grid container direction="column" spacing={4}>
        <Grid item xs={6}>
          <SearchField onSearch={onSearch} />
          <Grid item xs={6} style={{paddingTop: 100}}>
            <SearchResult searchText={searchText} searchResult={searchResult} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
