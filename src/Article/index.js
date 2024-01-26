import { StyledArticle, Header } from "./styled.js";

const Article = ({ form }) => (
    <StyledArticle>
        <Header>Kalkulator walut</Header>
        <form>
            {form}
        </form>
    </StyledArticle>
);

export default Article;