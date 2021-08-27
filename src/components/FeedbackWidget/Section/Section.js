import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={Styles.section}>
      <h1 className={Styles.h1}>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;