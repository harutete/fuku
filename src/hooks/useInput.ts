import React, { useState, useCallback } from 'react'

export const useInput = (initialState: string) => {
  const [value, setValue] = useState(initialState)

  const handleSetValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }, [])

  return {
    value,
    handleSetValue
  }
}