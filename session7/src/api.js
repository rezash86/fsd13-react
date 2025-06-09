const searchImages = async (term) => {
  //https://api.unsplash.com/search/photos

  const url = new URL("https://api.unsplash.com/search/photos");
  url.searchParams.append("query", term);
  const response = await fetch(url.toString(), {
    headers: {
      Authorization: "Client-ID Osb-HMD1IfrwsmGAXQO6kSMvHOmaRm23iK3fbke0JjM",
    },
  });

  if (!response.ok) {
    throw new Error(`Error : ${response.status}`);
  }

  const data = await response.json();
  return data.results;
};

export default searchImages;
