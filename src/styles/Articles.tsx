import { CSSProperties } from "react";

const ArticlesStyles: { [key: string]: CSSProperties } = ({
  container: {
    width: "80%",
    marginLeft: "8%",
    overflowY: 'auto',
    height: '100%'
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
    paddingTop: '1rem',
    paddingBottom: '2rem',
  },
  coverImage: {
    width: '150px',
    height: '150px',
    marginRight: '20px',
  },
  articleContainer: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center'
  },
  articleName: {
    color: 'white',
  }
})

export default ArticlesStyles;
