import React from 'react'
import Anime from 'react-anime'
import Waypoint from 'react-waypoint'

export default class OnLoadAnime extends React.PureComponent {
  constructor () {
    super()

    this.state = {
      show: false
    }
  }

  load () {
    this.setState({ show: true })
  }

  render () {
    if (this.state.show) {
      return (
        <Anime key='anime' {...this.props}>
          {this.props.children}
        </Anime>
      )
    } else {
      return (
        <Waypoint
          key='waypoint'
          onEnter={this.load.bind(this)}
          topOffset='-50%' />
      )
    }
  }
}
