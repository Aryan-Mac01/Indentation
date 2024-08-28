import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId();
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
    </div>
  )
}

export default Select