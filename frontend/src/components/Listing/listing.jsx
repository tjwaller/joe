import './listing.css'

function Listing (props) {
    return (
        <div className={'listing'}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}
export default Listing