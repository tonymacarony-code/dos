import React, { FC } from 'react';
import { MainProps } from '../types';

const Main: FC<MainProps> = ({ files, folders }) => {
    return (
        <div className="flex flex-col bg-lightCyan">
            <div className="grid grid-cols-2 w-full border-b-4 border-darkBlue">
                {/* 1 */}

                <div className="border-l-4 border-r-4 border-darkBlue border-collapse flex flex-col">
                    <div className="flex justify-center">
                        <div className="px-4 text-lightCyan bg-darkBlue text-4xl leading-9">C:\</div>
                    </div>
                    <div className="mb-1 mx-1 border-l-4 border-b-4 border-r-4  border-darkBlue px-[2px] ">
                        <div className="h-[calc(100vh_-_268px)] bg-darkBlue ">
                            <ul className="pl-12  relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-1 before:bg-lightCyan before:h-4/5 before:left-[1.625rem]">
                                {folders?.map((folder) => (
                                    <li key={folder.id} className="pl-[2px] text-lightCyan text-[2rem] leading-8 justify-between relative flex cursor-pointer hover:bg-lightCyan hover:text-darkBlue before:absolute before:top-1/2 before:-translate-y-1/2 before:left-[-1.375rem] before:w-6 before:h-1 before:bg-lightCyan">
                                        <span>{folder.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-darkBlue mt-1 mb-[2px] px-2 py-6">
                            <div className="text-lightCyan text-[2rem] leading-8 justify-between flex">
                                <span>DN</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="mb-1 border-r-4 border-darkBlue border-collapse flex flex-col">
                    <div className="flex justify-center">
                        <div className="px-4 text-lightCyan bg-darkBlue text-4xl leading-9">C:\</div>
                    </div>
                    <div className="mx-1 border-l-4 border-r-4 border-b-4 border-darkBlue px-[2px] ">
                        <div className="grid h-[calc(100vh_-_268px)] lg:grid-cols-1 xl:grid-cols-3 gap-x-1">
                            {files?.map((folder) => (
                                <div key={folder.id} className="bg-darkBlue flex flex-col">
                                    <div className="px-2 ">
                                        <div className="h-fit flex justify-center">
                                            <div className="text-yellow text-[2rem] leading-8">{folder.title}</div>
                                        </div>
                                        <ul>
                                            {folder.items?.map((file) => (
                                                <li key={file.id} className="text-lightCyan text-[2rem] leading-8 justify-between flex cursor-pointer hover:bg-lightCyan hover:text-darkBlue">
                                                    <span>{file.name}</span>
                                                    <span>{file.format}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-darkBlue mt-1 mb-[2px] px-2 py-6">
                            <div className="text-lightCyan text-[2rem] leading-8 justify-between flex">
                                <span>C:\</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
