import React from 'react'

import './Block.scss'

type TProps = {}

const Block: React.FC<TProps> = ({children}) =>
  <div className='block'>{children}</div>

export default Block