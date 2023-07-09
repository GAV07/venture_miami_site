import { useEffect, useState } from 'react'

function ScrollToTopButton() {
  // Visibility state
  const [isVisible, setIsVisible] = useState(false)

  // Functionality that allows button to show one user has scrolled passed a certain point
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Smooth scrolling functionality 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Renders only if isVIsible is true
  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          display: 'inline',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          border: 'none',
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      >
        ↑
      </button>
    )
  )
}

export default ScrollToTopButton
