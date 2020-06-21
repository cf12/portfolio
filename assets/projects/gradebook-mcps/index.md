---
title: "Gradebook MCPS"
slug: gradebook-mcps
---
#### Notes
This project ~~is~~ **was** live at [gradebook.cf12.org](https://gradebook.cf12.org/). As of **July 18th, 2020**, MCPS has
retired the Powerschools platform, and have transferred grade services to another platform.

# Project Summary
Gradebook MCPS is an alternative to MCPS' own student grade viewer / portal, [MyMCPS Portal](https://portal.mcpsmd.org).
MyMCPS Portal is powered by Powerschools, and Gradebook MCPS utilizes the same backend and API as Powerschools.

I spent many weeks reversing the Powerschools API & the frontend of MyMCPS Portal in order to determine all the necessary
endpoints and requests required for a functional gradebook. A large portion of the project was mainly reconnaisance &
reversing the platform itself, but it wasn't too terribly difficult to locate & replicate all the endpoints I needed.

Building and designing the web application itself wasn't too bad either -- it was fun to experiment around with
unique component styles that I've never used before, and I wanted to make the design more simplistic and less cluttered
than MyMCPS Portal.