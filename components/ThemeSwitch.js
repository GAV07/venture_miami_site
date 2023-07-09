/**
Please note that this is a basic implementation of a theme switcher. It provides a way to toggle between 
light and dark modes and retains this information in the context so it's available to all components. 
However, due to limitations in access to Contentful and the scope of this technical skill demo, 
the actual changes to the site's styles/colors/images that would reflect the switch in themes are not 
(yet) implemented here. To implement fully, additional code would be needed to update the styles based on
the current theme. I already have ideas for this! Namely using 
inline styles or CSS in JS to directly tie the theme to existing Venture Miami aesthetic.
**/


import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

// Toggle component for light and dark themes
function ThemeSwitch() {
  // Get the current theme and the function to toggle it from context
  const { darkMode, toggleTheme } = useContext(ThemeContext)

  // Button Rendering
  return <button onClick={toggleTheme}>{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
}

export default ThemeSwitch
  //To expand upon this, local storage can be used to save the user's preference!
  //Local time can also be used to switch from light to dark themes :D