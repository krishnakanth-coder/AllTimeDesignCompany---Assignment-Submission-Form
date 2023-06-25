/** @format */

import React from 'react';
import classes from './styles.module.css';
import { HiCamera } from 'react-icons/hi';
import { AiFillFile } from 'react-icons/ai';
import { BsFiletypeMp4 } from 'react-icons/bs';
const data = [
  {
    id: 2,
    name: 'FigmaOutput.fig',
    img: AiFillFile,
    lmc: ' Jun 14, 2023',
    size: '53 KB',
  },
  {
    id: 3,
    name: 'Output 1.png',
    img: HiCamera,
    lmc: 'Jun 8,2023',
    size: '14 KB',
  },
  {
    id: 4,
    name: 'Output 2.png',
    img: HiCamera,
    lmc: 'Jun 8,2023',
    size: '7 KB',
  },
  {
    id: 5,
    name: 'Output.mp4',
    img: BsFiletypeMp4,
    lmc: 'Jun 9,2023',
    size: '11 MB',
  },
  {
    id: 6,
    name: 'TEST.txt',
    img: AiFillFile,
    lmc: 'Jun 9,2023',
    size: '4 KB',
  },
];

const renderData = () => (
  <>
    {data.map((each) => (
      <div className={classes.fileheader} key={each.id}>
        <p className={classes.logoname}>
          <span>
            <each.img></each.img>
          </span>

          {each.name}
        </p>

        <div className={classes.filesize}>
          <p>{each.lmc}</p>
          <p>{each.size}</p>
        </div>
      </div>
    ))}
  </>
);

const FileInfo = () => {
  return (
    <>
      <div className={classes.fileheader}>
        <p className={classes.logoname}>Name</p>
        <div className={classes.filesize}>
          <p>Last modification</p>
          <p>File size</p>
        </div>
      </div>
      {renderData()}
    </>
  );
};

export default FileInfo;
