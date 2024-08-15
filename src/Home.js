import React from "react";

const Home = () => (
  <div style={styles.container}>
    <header style={styles.header}>
      <h1 style={styles.title}>Devember</h1>
      <p style={styles.subtitle}>
        Building innovative solutions for a digital world.
      </p>
      <a href="#contact" style={styles.ctaButton}>
        Contact Us
      </a>
    </header>
    <section id="about" style={styles.section}>
      <h2>About Devember</h2>
      <p>
        Devember is a forward-thinking tech company specializing in software
        development, digital transformation, and innovative tech solutions. Our
        mission is to help businesses grow by leveraging cutting-edge
        technology.
      </p>
    </section>
    <section id="services" style={styles.section}>
      <h2>Our Services</h2>
      <ul style={styles.list}>
        <li>Custom Software Development</li>
        <li>Web and Mobile App Development</li>
        <li>Cloud Solutions</li>
        <li>Technology Consulting</li>
      </ul>
    </section>
    <section id="contact" style={styles.section}>
      <h2>Contact Us</h2>
      <p>Have a project in mind? Let’s talk!</p>
      <p>
        Email: <a href="mailto:info@devember.com">info@devember.com</a>
      </p>
      <p>Phone: +1 234 567 8901</p>
    </section>
  </div>
);

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    color: "#333",
    lineHeight: "1.6",
  },
  header: {
    backgroundColor: "#282c34",
    color: "#fff",
    padding: "50px 20px",
  },
  title: {
    fontSize: "3rem",
    margin: "0",
  },
  subtitle: {
    fontSize: "1.5rem",
    margin: "20px 0",
  },
  ctaButton: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    color: "#fff",
    backgroundColor: "#61dafb",
    textDecoration: "none",
    borderRadius: "5px",
  },
  section: {
    padding: "50px 20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "10px",
  },
};

export default Home;
