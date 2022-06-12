# Pixel Pixtures

## Overview

Inspired by r/place, I built my own project that allows a user to create and download pictures arranged with simple pixels. The user has a selection of popular colours displayed in a row above a 10x10 grid. Once a colour is selected, the user can click on any square within the grid to assign it the selected colour. Below the grid, 3 buttons are displayed. The first allows the user to toggle dark mode on/off. The second allows the user to refresh the page and display a crisp new canvas. The final button downloads the pixel picture in PNG format so the user can hang it on their wall to admire. 

## What I Learned

In this project I incorporated CSS Grid for the first time. I hard coded all the CSS responsible for the styling of the grid and pixels which wasn't the best approach as the grid contains 100 divs total. If I were to rebuild this project in the future, I would use a loop to assign the styling to each grid div dynamically instead. Styled Components would also be a great approach for flexibile grib/pixel styling. 

I levaraged a library for the first time. I installed HTML2Canvas to assist with the logic responsible for croping and downloading the pixel picture which was pretty neat! 

This is also my first React project that included a dark mode button as I wanted to get some more practice with the ternary operator and dynamically changing component styles via the virtual DOM. 

## Technologies

HTML, CSS, JaveScript, React, HTML2Canvas
