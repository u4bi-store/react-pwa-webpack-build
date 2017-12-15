import React from 'react'
import styles from './app.component.scss';
import styles2 from './app.component.css';
import logo from '../assets/u4bi.png';

export default class AppComponent extends React.Component {
    render() {
        return (
            <div className={ styles.wrapper }>
                <img src={ logo } />
                <h1 className={ styles.color}>U4BI TEST</h1>
            </div>
        )
    }
}