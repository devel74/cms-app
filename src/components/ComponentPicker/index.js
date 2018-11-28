import React, { Component } from 'react'
import './index.scss'
import core from '../../core'
import { observer } from 'mobx-react'
import Typography from '@material-ui/core/Typography/Typography'
import Drawer from '@material-ui/core/Drawer/Drawer'
import Card from '@material-ui/core/Card'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import defaultImg from './img/default.svg'

@observer
class ComponentPicker extends Component {
  get renderComponents () {
    return (
      core.admin.componentsList.map(component => (
        <div key={component.name}>
          <Card>
            <CardActionArea>
              <CardMedia
                className='component-picker__image'
                image={defaultImg}
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Logo
                </Typography>
                <Typography component='p'>
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Add
              </Button>
            </CardActions>
          </Card>
          <Divider />
        </div>
      ))
    )
  }
  get currentSection () {
    const current = core.admin.activeSection
    const sections = core.admin.sections
    return (
      <div>
        <h4>Current section:</h4>
        <Select
          value={current}
          onChange={e => { core.admin.activeSection = e.target.value }}
          inputProps={{
            name: 'age',
            id: 'age-simple'
          }}
        >
          {Object.keys(sections).map(section => (
            <MenuItem value={section} key={`select-${section}`}>
              {section}
            </MenuItem>
          ))}
        </Select>
      </div>
    )
  }
  render () {
    return (
      <Drawer anchor='right' open={core.admin.isComponentPickerOpen} onClose={() => { core.admin.isComponentPickerOpen = false }}>
        <div className='component-picker'>
          <Toolbar>
            {this.currentSection}
          </Toolbar>
          {this.renderComponents}
        </div>
      </Drawer>
    )
  }
}

export default ComponentPicker
