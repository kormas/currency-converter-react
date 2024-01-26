import { StyledArticle, Header } from "./styled";

const Article = ({ form }) => (
    <StyledArticle>
        <Header>Kalkulator walut</Header>
        <form>
            {form}
        </form>
    </StyledArticle>
);

export default Article;