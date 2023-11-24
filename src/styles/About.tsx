import { AboutStylesInterface } from "../interfaces/StylesInterface";

const AboutStyles: AboutStylesInterface = ({
  container: {
    width: "80%",
    marginLeft: "8%"
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
    paddingTop: '1rem',
    paddingBottom: '0.25rem',
  },
  paragraphs: {
    paddingBottom: '1.5rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    lineHeight: 1.2,
    fontSize: '1.25rem',
  },
  span: {
    color: 'black',
    fontWeight: 'bold'
  }
});

export default AboutStyles;