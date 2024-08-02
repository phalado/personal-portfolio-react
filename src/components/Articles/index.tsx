import { Container } from '@mui/system';
import getArticles from '../../constants/articles';
import styles from '../../styles/Articles';

const Articles = () => {
  const articlesConstant = getArticles;

  return (
    <Container style={styles.container}>
      <h1 style={styles.title}>My articles on medium:</h1>
      {articlesConstant.map((article) => (
        <div style={styles.articleContainer}>
          <img src={article.coverUrl} alt={article.name} style={styles.coverImage} />
          <h2><a href={article.link} style={styles.articleName}>{article.name}</a></h2>
        </div>
      ))}
    </Container>
  )
}

export default Articles;
