'use client';

import { useState } from 'react';

export default function Home() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const lessons = [
    {
      title: 'Fillimi i Udhëtimit',
      description: 'Çdo udhëtim fillon me një hap të vogël. Kur mësojmë, ne zbulojmë botën përreth nesh dhe brenda nesh.',
      icon: '🌟',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Fuqia e Diturisë',
      description: 'Dituria është drita që ndriçon errësirën e panjohjes. Me çdo mësim të ri, ne bëhemi më të fortë dhe më të zgjuar.',
      icon: '📚',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Udhëtimi i Vazhdueshëm',
      description: 'Mësimi nuk mbaron kurrë. Është një përvijim që zgjat gjithë jetën, plot me zbulime dhe mrekulli.',
      icon: '🚀',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Ëndrrat dhe Qëllimet',
      description: 'Me përpjekje dhe përkushtim, çdo ëndërr mund të bëhet realitet. Mos u dorëzo kurrë!',
      icon: '✨',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'Bukuria e të Mësuarit',
      description: 'Kur mësojmë, ne rritemi. Çdo ditë është një mundësi e re për të zbuluar diçka të mrekullueshme.',
      icon: '🌸',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  const nextLesson = () => {
    setCurrentLesson((prev) => (prev + 1) % lessons.length);
    setShowDescription(false);
  };

  const prevLesson = () => {
    setCurrentLesson((prev) => (prev - 1 + lessons.length) % lessons.length);
    setShowDescription(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>Jam Duke Mësuar</h1>
        <p style={styles.subtitle}>Një Mbishkrim i Bukur</p>
      </div>

      <div style={styles.cardContainer}>
        <div style={{
          ...styles.card,
          background: lessons[currentLesson].color
        }}>
          <div style={styles.iconContainer}>
            <span style={styles.icon}>{lessons[currentLesson].icon}</span>
          </div>

          <h2 style={styles.lessonTitle}>{lessons[currentLesson].title}</h2>

          <div style={styles.progressContainer}>
            {lessons.map((_, index) => (
              <div
                key={index}
                style={{
                  ...styles.progressDot,
                  backgroundColor: index === currentLesson ? '#fff' : 'rgba(255,255,255,0.3)'
                }}
              />
            ))}
          </div>

          <button
            style={styles.revealButton}
            onClick={() => setShowDescription(!showDescription)}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {showDescription ? 'Fshih Mbishkrimin' : 'Zbulo Mbishkrimin'}
          </button>

          {showDescription && (
            <div style={styles.descriptionBox}>
              <p style={styles.description}>{lessons[currentLesson].description}</p>
            </div>
          )}

          <div style={styles.navigation}>
            <button
              style={styles.navButton}
              onClick={prevLesson}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
            >
              ← Mbrapa
            </button>
            <button
              style={styles.navButton}
              onClick={nextLesson}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
            >
              Para →
            </button>
          </div>
        </div>
      </div>

      <div style={styles.footer}>
        <p style={styles.footerText}>
          ✨ Çdo ditë është një mundësi e re për të mësuar diçka të bukur ✨
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    animation: 'fadeIn 1s ease-in',
  },
  mainTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#fff',
    margin: '0 0 10px 0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: 'rgba(255,255,255,0.9)',
    margin: 0,
    fontStyle: 'italic',
  },
  cardContainer: {
    width: '100%',
    maxWidth: '600px',
    marginBottom: '30px',
  },
  card: {
    borderRadius: '30px',
    padding: '60px 40px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '25px',
    transition: 'transform 0.3s ease',
  },
  iconContainer: {
    fontSize: '5rem',
    marginBottom: '10px',
    animation: 'bounce 2s infinite',
  },
  icon: {
    display: 'inline-block',
  },
  lessonTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#fff',
    margin: 0,
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  },
  progressContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  progressDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
  },
  revealButton: {
    padding: '15px 40px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.2)',
    border: '2px solid #fff',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
  descriptionBox: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: '20px',
    padding: '30px',
    width: '100%',
    animation: 'slideIn 0.3s ease',
  },
  description: {
    fontSize: '1.3rem',
    lineHeight: '1.8',
    color: '#333',
    margin: 0,
    textAlign: 'center',
  },
  navigation: {
    display: 'flex',
    gap: '20px',
    marginTop: '10px',
  },
  navButton: {
    padding: '12px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.2)',
    border: '2px solid rgba(255,255,255,0.5)',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  footer: {
    textAlign: 'center',
    marginTop: '20px',
  },
  footerText: {
    fontSize: '1.2rem',
    color: 'rgba(255,255,255,0.9)',
    margin: 0,
  },
};
