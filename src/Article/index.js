import "./style.css";

const Article = ({ form }) => (
    <article className="article">
        <h1 className="article__header">Kalkulator walut</h1>
        <form>
            {form}
        </form>
    </article>
);

export default Article;