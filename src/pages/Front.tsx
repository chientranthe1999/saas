import React, { FC } from 'react';
import { AiFillAliwangwang, AiFillAmazonSquare } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/hooks';

type IFront = {};
const Front: FC<IFront> = () => {
  console.log('admin rendered...');
  const counter = useAppSelector((state) => state.counter);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  return (
    <div className="wrapper h-screen w-screen text-center p-10">
      <div className="front w-96 mx-auto p-5 rounded border border-gray-300">
        <div className="font-bold text-lg text-gray-700">Front Page</div>
      </div>

      <div className="icons mt-4 w-96 mx-auto p-5 rounded border border-gray-300">
        <div className="title font-bold text-left mb-3">React Icons:</div>
        <p className="text-center flex space-x-1">
          <AiFillAliwangwang />
          <AiFillAmazonSquare />
        </p>
      </div>
    </div>
  );
};

export default Front;
