import React from 'react'
import fdtn from 'date-fns/formatDistanceToNow'
import {ru} from 'date-fns/locale'
import cn from 'classnames'
import readedSvg from '../../assets/readed.svg'
import noreadedSvg from '../../assets/noreaded.svg'
import TAttachments from '../../types'
import './Message.scss'

type TProps = {
  text: string
  avatar: string
  date: Date
  user?: any
  isMe?: boolean
  isRead?: boolean
  attachments?: TAttachments
}

const Message: React.FC<TProps> = ({attachments, avatar, text, date, isRead = false, isMe = false}) =>
  <div className={cn('message', {'message--me': isMe})}>
    <div className='message__content'>
      {isMe && isRead ?
        <img className='message__icon-read'
             src={readedSvg}
             alt='readed icon'/>

        : <img className='message__icon-read message__icon-read--no'
               src={noreadedSvg}
               alt='no read icon'/>
      }
      <div className='message__avatar'>
        <img src={avatar} alt='User Avatar'/>
      </div>
      <div className='message__inner'>
        <div className='message__bubble'>
          <p className='message__text'>{text}</p>
        </div>
        <div className="message__attachments">
          {attachments?.map((item, i) =>
            <div key={i} className="message__attachments-item">
              <img src={item.url} alt={item.filename}/>
            </div>)}
        </div>
        <div className='message__date'>{fdtn(date, {addSuffix: true, locale: ru})}</div>
      </div>
    </div>
  </div>

export default Message