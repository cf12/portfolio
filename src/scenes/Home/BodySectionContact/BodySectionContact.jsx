import React from 'react'
import OnLoadAnime from '../../../components/OnLoadAnime.jsx'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { TextField } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'

import './BodySectionContact.scss'

fontawesome.library.add(fab)

const textFieldTheme = createMuiTheme({
  palette: {
    primary: green
  }
})

export default class BodySectionContact extends React.Component {
  constructor () {
    super()

    this.handleChange = () => {

    }
  }

  render () {
    return (
      <div className='body__section body__section--contact flex--center'>

        <OnLoadAnime
          duration={600}
          delay={100}
          easing='easeOutElastic'
          translateY={[-100, 0]}
          opacity={[0, 1]} >

          <p className='body__title'>CONTACT ME</p>
          <div className='body__separator--big' />
        </OnLoadAnime>

        <div className='contact__wrapper flex--row flex--center'>

          <div className='side--left flex--column flex--center'>
            <p className='text--description'>
              You can contact me at the following social media, or by using the contact form on the right:
            </p>
            <div className='social-wrapper flex--center'>
              <a href='https://github.com/cf12' target='_blank'>
                <FontAwesomeIcon
                  icon={['fab', 'github']}
                  size='8x'
                  color='white'
                />
              </a>

              <a href='https://codepen.io/CF12' target='_blank'>
                <FontAwesomeIcon
                  icon={['fab', 'codepen']}
                  size='8x'
                  color='white'
                />
              </a>

              <a href='https://twitter.com/OfficialCF12' target='_blank'>
                <FontAwesomeIcon
                  icon={['fab', 'twitter']}
                  size='8x'
                  color='white'
                />
              </a>
            </div>
          </div>

          <div className='side--right flex--center'>
            <form className='contact-form flex--column flex--center'>
              <p className='text--form-header'>
                Contact Form
              </p>
              <MuiThemeProvider theme={textFieldTheme}>
                <TextField
                  id='name'
                  label='Full Name'
                  margin='dense'
                  className='field'
                  required
                />
                <TextField
                  id='email'
                  label='Email'
                  margin='dense'
                  className='field'
                  required
                />
                <TextField
                  id='description'
                  label='Description'
                  margin='dense'
                  className='field'
                  multiline
                  required
                  rows={4}
                />
              </MuiThemeProvider>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
