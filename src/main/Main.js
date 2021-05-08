import './Main.css';

function Main(props) {
    let {db} = props;
    return (
        <div className="appMain">
            {
                Object.keys(db).map((elem, index) => (
                    <div className="appMain_icon" key={index}>
                        <img src={db[elem].icon} alt={db[elem].icon} />
                        <p>{db[elem].text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Main;