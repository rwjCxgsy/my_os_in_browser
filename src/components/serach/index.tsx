import React, { Component } from 'react'
import styles from './index.module.less'
export default class SearchTop extends Component {
  render() {
    return (
      <div className={styles['search-top']}>
        <div className={styles.input}>
            <svg className={styles.icon} aria-hidden="true">
                <use xlinkHref={'#icon-baidu'} />
            </svg>
            <input type="text"/>
        </div>
      </div>
    )
  }
}