import React, { useState } from 'react';
import styles from '../../styles/Icon';

const HeaderIcon = (
  { media }: {
    media: {
      link: string,
      styleIcon: React.CSSProperties,
      styleHover: React.CSSProperties,
    }
  }
) => {
  const { link, styleIcon, styleHover } = media
  const [iconStyle, setIconStyle] = useState(styleIcon)
  const handleMouse = (style: React.CSSProperties) => setIconStyle(style);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
      <input
        onMouseOver={() => handleMouse(styleHover)}
        onMouseLeave={() => handleMouse(styleIcon)}
        style={{ ...iconStyle, ...styles.icon }}
        type="button"
      />
    </a>
  )
}

export default HeaderIcon;
