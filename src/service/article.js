import axios from "./api"

const ArticleService = {
    getArticle: async () => {
        const {data} = await axios.get('/articles')
        return data;
    }
}

export  default ArticleService;