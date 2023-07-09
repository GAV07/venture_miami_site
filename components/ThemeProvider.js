/**
Please note that this is a basic implementation of a theme switcher. It provides a way to toggle between 
light and dark modes and retains this information in the context so it's available to all components. 
However, due to limitations in access to Contentful and the scope of this technical skill demo, 
the actual changes to the site's styles/colors/images that would reflect the switch in themes are not 
(yet) implemented here. To implement fully, additional code would be needed to update the styles based on
the current theme. I already have ideas for this! Namely using 
inline styles or CSS in JS to directly tie the theme to existing Venture Miami aesthetic.
**/


import React, { useState, createContext } from 'react'

// Context and toggle function
export const ThemeContext = createContext()

// Application wrapper
export const ThemeProvider = ({ children }) => {
  // Enabling and disabling states
  const [darkMode, setDarkMode] = useState(false)

  // Toggles between dark and light modes
  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  // Render the provider component with the darkMode state and toggle function as its value
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
  //To expand upon this, local storage can be used to save the user's preference!
  //Local time can also be used to switch from light to dark themes :D
}
