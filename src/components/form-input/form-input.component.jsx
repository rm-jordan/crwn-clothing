import React from 'react';

import './form-input.styles.scss'

// functional components, we dont want any state on this component

//destructure spread into the input


const FormInput = ({handleChange, label, ...otherProps}) => (
  <div className = 'group'>
  <input className='form-input' onChange={handleChange} {...otherProps}/>

  {
    label ?
    (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label `}>
    {label}

    </label>)
    :null
  }

  </div>
)







export default FormInput;