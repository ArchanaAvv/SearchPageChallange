import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function SearchResult({searchText, searchResult}) {
  const classes = useStyles()
  debugger
  return (
    <List
      component="nav"
      subheader={<ListSubheader component="div">Search Results for "{searchText}"</ListSubheader>}
      className={classes.root}
    >
      {searchResult.map((data) => (
        <ListItem>
          <ListItemText primary={data.name} />
          <ListItemText secondary={`${data.address}`} />
        </ListItem>
      ))}
    </List>
  )
}
