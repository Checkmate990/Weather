import React, { useState, useEffect } from 'react';

function Header() {
  const [fact, setFact] = useState("");
  const [factHidden, setFactHidden] = useState(true);

  useEffect(() => {
    const getRandomFact = async () => {
      const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
      const data = await response.json();
      setFact(data.text);
    };
    getRandomFact();
  }, []);

  const styles = {
    container: {
      position: 'absolute',
      bottom: 520,
      left: 500,
      width: '100%',
      height: '40px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fact: {
      fontSize: '1.2rem',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  };

  const toggleFactHidden = () => {
    setFactHidden(!factHidden);
  };

  return (
    <div style={styles.container}>
      <p style={styles.fact} onClick={toggleFactHidden}>
        {factHidden ? "Click to reveal a random fact" : fact}
      </p>
    </div>
  );
}

export default Header;
