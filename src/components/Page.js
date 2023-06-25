/** @format */
import classes from './styles.module.css';
import React from 'react';
import Header from './Header';
import FileInfo from './FileInfo';

const Page = () => {
  return (
    <div className={classes.pagecontainer}>
      <Header />
      <FileInfo />
    </div>
  );
};

export default Page;
