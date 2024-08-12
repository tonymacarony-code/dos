import React from 'react'

const Prefooter = () => {
    return (
        <div className="relative text-4xl leading-9  before:left-0 before:top-1/2 before:-translate-y-1/2 before:absolute before:content-['C:\>'] before:text-lightGray">
            <input type="text" className="pl-16 w-full h-16 bg-black text-lightGray text-4xl leading-9 px-4 " />
        </div>
    )

}

export default Prefooter