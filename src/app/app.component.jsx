import React from 'react';
import styles from './app.component.scss';
import './app.component.css';
import logo from '../assets/u4bi.png';

const AppComponent = () => (
  <div className={styles.wrapper}>
    <img src={logo} alt="u4bi logo" />
    <h1 className={styles.color}>U4BI TEST</h1>
  </div>
);

export default AppComponent;
