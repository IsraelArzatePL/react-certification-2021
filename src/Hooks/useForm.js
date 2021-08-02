import { useState, useCallback } from 'react'

export const useForm = (initValue = '') => {
    const [value, setValue] = useState(initValue)
    const onChange = useCallback(e => setValue(e.target.value), [])

    return { value, onChange }
}