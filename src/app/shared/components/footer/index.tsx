import React, { ReactElement } from 'react';
import styles from './footer.module.scss';

const Footer = (): ReactElement => {
    return (
        <div className={styles.footer}>
            Copyright &copy; {new Date().getFullYear()} <strong> Romarjo Balukja</strong>
        </div>
    );
};

export default Footer;
