import React from 'react'
import {Button as BaseButton} from 'antd'
import cn from 'classnames'
import {SizeType} from 'antd/es/config-provider/SizeContext'

import './Button.scss'

type TProps = {
  classN?: string
  size?: SizeType
}

const Button: React.FC<TProps> = props =>
  <BaseButton
    {...props}
    className={
      cn('button', props.classN,
        {'button--large': props.size === 'large'})
    }
    type='primary'
    size={props.size}
  />

export default Button