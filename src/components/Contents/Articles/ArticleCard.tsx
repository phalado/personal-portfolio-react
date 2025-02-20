import styles from '../../../styles/Articles';

const ArticleCard = (props: { article: any }) => {
  const { article } = props;

  return (
    <a href={article.link} style={styles.articleContainer} target="_blank" rel="noreferrer">
      <img src={article.coverUrl} alt={article.name} style={styles.coverImage} />
      <h2 style={{ textAlign: 'center' }}>{article.name}</h2>
    </a>
  );
};

export default ArticleCard;
