import { useState, useCallback } from 'react'

export const useDisplayErrorMessage = (initialState: string) => {
  const [errorMessage, setErrorMessage] = useState(initialState)

  const handleSetErrorMessage = useCallback((errorMessage: string) => {
    setErrorMessage(errorMessage)
  }, [])

  return {
    errorMessage,
    handleSetErrorMessage
  }
}