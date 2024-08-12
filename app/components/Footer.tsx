import React, { FC } from 'react'
import { FooterProps } from '../types'

const Footer: FC<FooterProps> = ({ controls }) => {
    return (
        <div className='flex bg-darkCyan  overflow-x-scroll'>
            {controls.map(({ id, title }, index) => (
                <div
                    key={id}
                    className='pr-6 bg-darkCya cu text-lightCyan text-4xl leading-9 cursor-pointer hover:bg-black hover:text-white'
                >
                    <span className={`bg-black text-lightGray ${index != 0 ? 'pl-2.5' : ''}`}>{index + 1}</span>{title}
                </div>
            ))}
        </div>
    )
}

export default Footer
