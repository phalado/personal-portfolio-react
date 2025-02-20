import { CSSProperties } from 'react';

const ArticlesStyles: { [key: string]: CSSProperties } = {
  container: {
    width: '80%',
    marginLeft: '8%',
    overflowY: 'auto',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
    paddingTop: '1rem',
    paddingBottom: '2rem',
    color: 'white',
    textDecoration: 'none',
  },
  articlesContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  coverImage: {
    width: '250px',
    height: '150px',
    borderRadius: '5px',
  },
  articleContainer: {
    width: '250px',
    color: 'white',
    height: '275px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  },
};

export default ArticlesStyles;
