export const NewsAPIEverything=async()=>{
    const API_KEY='ebbbdff75baf47398fff8cda679b2338';
    let finalData: Array<any> = [];

    await fetch(`https://newsapi.org/v2/everything?q=apple&apiKey=` + API_KEY)
        .then(response => response.json())
        .then(data => {
            data.articles.map((data: any, index: number) => {
                if(data.title!='[Removed]'){
                let value = {
                    id: index,
                    date: data.publishedAt,
                    title: data.title,
                    description:data.description,
                    webUrl: data.url,

                }
            
                finalData.push(value);
            }

            })
        })
        .catch(error => console.error('Error:', error));
        return finalData;   


}
export const NewsAPISearch=async()=>{
    const API_KEY='ebbbdff75baf47398fff8cda679b2338';
    let finalData: Array<any> = [];

    await fetch(`https://newsapi.org/v2/everything?q=apple&apiKey=` + API_KEY)
        .then(response => response.json())
        .then(data => {
            data.articles.map((data: any, index: number) => {
                if(data.title!='[Removed]'){
                let value = {
                    id: index,
                    date: data.publishedAt,
                    title: data.title,
                    description:data.description,
                    webUrl: data.url,

                }
            
                finalData.push(value);
            }

            })
        })
        .catch(error => console.error('Error:', error));
        return finalData;   


}