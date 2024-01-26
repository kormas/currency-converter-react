import "./style.css";

const Container = ({body, textAlign}) => (
    <p className="container"
        style={{textAlign: textAlign}}>
        {body}
    </p>
)

export default Container