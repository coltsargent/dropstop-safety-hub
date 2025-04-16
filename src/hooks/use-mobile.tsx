
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
  
  // Allow forcing mobile view via localStorage
  const forceMobileView = localStorage.getItem('forceMobileView') === 'true'

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT || forceMobileView)
    return () => mql.removeEventListener("change", onChange)
  }, [forceMobileView])

  return !!isMobile
}

// Helper function to toggle mobile view
export function toggleMobileView() {
  const currentSetting = localStorage.getItem('forceMobileView') === 'true'
  localStorage.setItem('forceMobileView', (!currentSetting).toString())
  window.location.reload()
}
