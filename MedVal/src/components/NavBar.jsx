function NavBar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <a href="#home" style={styles.navLink}>
            Home
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#about" style={styles.navLink}>
            About
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#contact" style={styles.navLink}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '1rem',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};

export default NavBar;
