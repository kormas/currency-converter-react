import { Line } from "./styled.js";

const Container = ({ textAlign, body }) => (
    <Line textAlign={textAlign}>
        {body}
    </Line>
)

export default Container