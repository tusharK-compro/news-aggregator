export const NYEverything = async() =>{
    let finalData: Array<any> = [];

    const API_KEY = "58BLGdQmfqvBkcnJhlNRI23znYnLIl6y";
    await fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=` + API_KEY)
        .then(response => response.json())
        .then(data => {
            data.results.map((data: any, index: number) => {
                let value = {
                    id: index,
                    category: data.section,
                    date: data.published_date,
                    title: data.title,
                    description:data.abstract,
                    webUrl: data.url,

                }
                finalData.push(value);

            })
        })
        .catch(error => console.error('Error:', error));
        return finalData;   


    

}
export const NYSearch = async(searchQuery:string) =>{
    let finalData: Array<any> = [];

    const API_KEY = "58BLGdQmfqvBkcnJhlNRI23znYnLIl6y";
    await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            data.response.docs.map((data: any, index: number) => {
                let value = {
                    id: index,
                    date: data.pub_date,
                    title: data.headline?.main,
                    description:data.abstract,
                    webUrl: data.url,

                }
                finalData.push(value);

            })
        })
        .catch(error => console.error('Error:', error));
        return finalData;   


    

}
