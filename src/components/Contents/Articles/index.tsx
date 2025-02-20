import { Container } from '@mui/system';
import getArticles from '../../../constants/articles';
import styles from '../../../styles/Articles';
import ArticleCard from './ArticleCard';

const Articles = () => {
  const articlesConstant = getArticles;

  return (
    <Container style={styles.container}>
      <h1 style={styles.title}>My articles on medium:</h1>
      <div style={styles.articlesContainer}>
        {articlesConstant.map((article) => (
          <ArticleCard key={article.name} article={article} />
        ))}
      </div>
    </Container>
  );
};

export default Articles;
