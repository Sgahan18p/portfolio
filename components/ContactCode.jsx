import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'Shubhankar.com',
    href: '',
  },
  {
    social: 'email',
    link: 'sgahan18p@gmail.com',
    href: 'mailto:sgahan18p@gmail.com',
  },
  {
    social: 'github',
    link: 'Sgahan18p',
    href: 'https://github.com/sgahan18p',
  },
  {
    social: 'linkedin',
    link: 'Shubhankar Gahan',
    href: 'https://www.linkedin.com/in/shubhankar-gahan-650a2b2a7/',
  },
  {
    social: 'instagram',
    link: 'Shubhankar_official__',
    href: 'https://www.instagram.com/shubhankar_official__/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
