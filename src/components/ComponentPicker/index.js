import React, { Component } from 'react'
import './index.scss'
import core from '../../core'
import { observer } from 'mobx-react'
import Typography from '@material-ui/core/Typography/Typography'
import Drawer from '@material-ui/core/Drawer/Drawer'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

@observer
class ComponentPicker extends Component {
  get renderComponents () {
    return (
      core.admin.componentsList.map(component => (
        <Card>
          <CardActionArea>
            <CardMedia
              image='/static/images/cards/contemplative-reptile.jpg'
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Lizard
              </Typography>
              <Typography component='p'>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))
    )
  }
  render () {
    return (
      <Drawer anchor='right' open={core.admin.isComponentPickerOpen} onClose={() => { core.admin.isComponentPickerOpen = false }}>
        <div className='component-picker'>
          <Toolbar>
            <Typography variant={'h6'}>Current section: Logo</Typography>
          </Toolbar>
          {this.renderComponents}
        </div>
      </Drawer>
    )
  }
}

export default ComponentPicker
