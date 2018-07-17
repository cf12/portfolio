import React from 'react'
import axios from 'axios'
import querystring from 'querystring'
import OnLoadAnime from 'components/OnLoadAnime.jsx'
import ReCAPTCHA from 'react-google-recaptcha'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TextField, Button, CircularProgress } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, blue } from '@material-ui/core/colors'

import './BodySectionContact.scss'

import config from 'assets/config.json'

const _ = require('lodash')
const textFieldTheme = createMuiTheme({
  palette: {
    primary: green,
    secondary: blue
  }
})

export default class BodySectionContact extends React.Component {
  constructor () {
    super()

    this.onVerify = this.onVerify.bind(this)
    this.isFulfilled = this.isFulfilled.bind(this)
    this.submit = this.submit.bind(this)

    // STATUS CODE REFERENCE
    // 0: Not submitted
    // 1: Submitting
    // 2: Successfully submitted
    // 3: Error occurred

    this.state = {
      fields: {
        name: null,
        email: null,
        description: null
      },
      verified: false,
      fulfilled: false,
      status: 0
    }
  }

  submit () {
    this.setState({
      status: 1
    })

    axios.get(config.contactEndpoint + '?' + querystring.stringify(this.state.fields))
    .then((res) => {
      if (res.status !== 200) {
        this.setState({
          status: 3
        })
        return
      }

      this.setState({
        status: 2
      })
    })
    .catch ((err) => {
      this.setState({
        status: 3
      })
    })
  }

  isFulfilled () {
    const fieldsVerified = _.values(this.state.fields).every(entry => { return entry })
    this.setState({ fulfilled: (fieldsVerified && this.state.verified) })
  }

  onFieldUpdate (field, event) {
    this.setState(_.merge(this.state, {
      fields: {
        [field]: event.target.value
      }
    }))

    this.isFulfilled()
  }

  onVerify (token) {
    this.setState({ verified: !this.state.verified })
    this.isFulfilled()
  }

  render () {
    let submitBuffer

    switch (this.state.status) {
      case 0:
        submitBuffer = (
          <Button
            color='secondary'
            size='large'
            variant='contained'
            onClick={this.submit}
            disabled={(!this.state.fulfilled || (this.state.status === 1))} >

            Submit
            <FontAwesomeIcon
              className='submit-button__icon'
              icon={['fas', 'paper-plane']} />
          </Button>
        )
        break

      case 1:
        submitBuffer = (
          <div className='flex--center'>
            <Button
              color='secondary'
              size='large'
              variant='contained'
              onClick={this.submit}
              disabled >

              Submit
              <FontAwesomeIcon
                className='submit-button__icon'
                icon={['fas', 'paper-plane']} />
            </Button>

            <CircularProgress
              style={{ position: 'absolute' }}
              color='secondary'
              size={24}
              thickness={4} />
          </div>
        )
        break
      case 2:
        submitBuffer = [
          <FontAwesomeIcon color='green' size='2x' icon={['fas', 'check-circle']} />,
          <p className='text--green'>All set! I'll try to get back to you ASAP!</p>
        ]
        break
      case 3:
        submitBuffer = [
          <FontAwesomeIcon color='red' size='2x' icon={['fas', 'times-circle']} />,
          <p className='text--red'>Looks like an error occurred. Please refresh to try again.</p>
        ]
        break
      default:
    }

    return (
      <div className='body__section body__section--contact flex--center'>
        <div className='body__title-wrapper flex--center flex--column'>
          <OnLoadAnime
            duration={600}
            delay={100}
            easing='easeOutElastic'
            translateY={[-100, 0]}
            opacity={[0, 1]} >

            <p className='body__title'>CONTACT ME</p>
            <div className='body__separator--big' />
          </OnLoadAnime>
        </div>

        <div className='contact__wrapper flex--row flex--center'>

          <div className='side--left flex--column flex--center'>
            <OnLoadAnime
              duration={800}
              delay={200}
              easing='easeOutElastic'
              translateX={[200, 0]}
              opacity={[0, 1]} >

              <p className='text--description'>
                You can contact me on my social media platforms, or by using the contact form on the right:
              </p>
            </OnLoadAnime>

            <OnLoadAnime
              duration={800}
              delay={300}
              easing='easeOutElastic'
              translateY={[100, 0]}
              opacity={[0, 1]} >

              <div className='social-wrapper flex--center'>
                <a href='https://github.com/cf12'>
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    size='8x'
                    color='white'
                  />
                </a>

                <a href='https://codepen.io/CF12'>
                  <FontAwesomeIcon
                    icon={['fab', 'codepen']}
                    size='8x'
                    color='white'
                  />
                </a>

                <a href='https://twitter.com/OfficialCF12'>
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    size='8x'
                    color='white'
                  />
                </a>
              </div>
          </OnLoadAnime>
        </div>

          <div className='side--right flex--center'>
            <form className='contact-form flex--column flex--center'>
              <p className='text--form-header'>Contact Form</p>
              <MuiThemeProvider theme={textFieldTheme}>
                <TextField
                  id='name'
                  className='field'
                  onChange={(event) => { this.onFieldUpdate('name', event) }}
                  error={this.state.fields.name === ''}
                  margin='dense'
                  label='Full Name'
                  required />

                <TextField
                  id='email'
                  className='field'
                  onChange={(event) => { this.onFieldUpdate('email', event) }}
                  error={this.state.fields.email === ''}
                  margin='dense'
                  label='Email'
                  required />

                <TextField
                  id='description'
                  className='field'
                  onChange={(event) => { this.onFieldUpdate('description', event) }}
                  error={this.state.fields.description === ''}
                  margin='dense'
                  label='Description'
                  multiline
                  required
                  rows={6} />

                <ReCAPTCHA
                  className='submit-recaptcha'
                  sitekey={config.reCaptchaToken}
                  onChange={this.onVerify} />

                { submitBuffer }
              </MuiThemeProvider>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
