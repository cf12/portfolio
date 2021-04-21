---
title: Gift Finder 2018
published: 20200703T000000-0400
---

#### Note
This project was created for the Hack Club Holiday Challenge (2018) - More info can be found here: <https://hackclub.com/challenge>

The original writeup can also be found on the project's github repository: <https://github.com/CF12/hack-club-competition-2018>

# Project Summary
I was browsing amazon for holiday gifts one fine evening, when I started wondering if there was an easier way to find a perfect gift without going through 200 pages of products. The idea of a gift finder service came to my mind!

The first thing I worked on was the snow. It was actually a lot easier to make than I initially thought it would be. I spent a few hours
learning JavaScript canvas and implementing individual snow particles before I scaled up the number of flakes.
The snow looked pretty weird at first (all of them were moving in the same direction) but after a few more revisions, I
implemented random velocities, opacities, and directions for the flakes.

After the snow was designed, everything else fell in place. I picked a suitable blue gradient for the backdrop, imported fonts, and styled it all w/ scss. I browsed the internet for a nice snowy background, and added a present along w/ the "Subscribe to PewDiePie" elf.

Afterwards, I browsed around amazon for some cool gifts and items. I stored the product IDs in a file (src/assets/products.json) and implemented code that would randomly pick a gift from the list. The hardest part of this project was probably picking the best font weights and colors for the text.