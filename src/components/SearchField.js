import React, {useState, useCallback, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import debounce from 'lodash/debounce'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}))

export default function SearchField({onSearch}) {
  const classes = useStyles()
  const [searchTxt, setSearchTxt] = useState('')
  const debouncedOnSearch = useCallback(debounce(onSearch, 300), [onSearch])

  useEffect(() => {
    if (searchTxt.length) debouncedOnSearch(searchTxt)
  }, [debouncedOnSearch, searchTxt])

  return (
    <Paper component="form" className={classes.root} fullWidth>
      <InputBase
        className={classes.input}
        placeholder="Search"
        value={searchTxt}
        onChange={(e) => setSearchTxt(e.target.value)}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
