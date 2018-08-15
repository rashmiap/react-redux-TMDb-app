export const headerStyles = {
  root: {
    flexGrow: 1,
  },
  logo: {
    width: '120px',
  },
  appBar: {
    backgroundColor: '#000',
    padding: '10px 0',
  }
};

export const cardTileStyles = {
  card: {
    maxWidth: 300,
    marginRight: 20,
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: '83.25%', // 16:9
  },
  actions: {
    justifyContent: 'space-between',
  },
  title: {
    minHeight: 64,
    maxHeight: 64,
    overflow: 'hidden',
  },
  overview: {
    WebkitBoxOrient: 'vertical',
    maxHeight: 64,
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
  },
  saveIcon: {
    color: '#f92727ab',
  },
};
export const detailsStyles = {
  saveIcon: {
    color: '#f92727ab',
    fontSize: '45px',
  },
};

export const cardDetails = {
  headerStyles: {
      width: "100%",
      height: "55vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: 'black',
  },
  castHeader: {
    backgroundSize: "cover",
    height: '175px',
    backgroundColor: 'black',
    backgroundPosition: "center"
  },
  castText: {
    width: '100%',
  }
}
