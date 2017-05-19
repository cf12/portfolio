import React, { Component } from 'react'
import Header from './Header'
import './PageMain.css'

class PageMain extends Component {
  render () {
    return (
      <div className="wrapper">
        <Header />

        <div className="wrapper-showcase">
          <p className="showcase-title"> CF12 </p>
          <p className="showcase-subtitle"> Placeholder text, and more placeholder text </p>
        </div>

        <div className="wrapper-body">
          <div className="body-main-1">
            <div className="body-main-1 left">
              <p className="main-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus massa, porttitor id ex quis, ullamcorper mollis neque. Aenean bibendum venenatis massa. Pellentesque et sodales ex. Nam varius ligula et ante suscipit, non posuere libero elementum. Maecenas ac justo sem. Vivamus euismod in risus vel dapibus. Nullam et urna eget tortor scelerisque feugiat ut et urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin aliquet tempus magna laoreet sagittis. Maecenas vulputate erat orci, ac euismod elit suscipit at. In consectetur laoreet turpis vitae maximus. Pellentesque finibus sed ipsum sed hendrerit. Morbi urna tellus, bibendum nec odio et, dictum vulputate nibh. </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageMain
