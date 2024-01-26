import { Line } from "./styled";

const Container = ({ textAlign, body }) => (
    <Line textAlign={textAlign}>
        {body}
    </Line>
)

export default Container