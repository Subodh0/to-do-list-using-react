export default function List(props) {
    
    const { list, fireListEvent, buttonText, title } = props;
    
    const generateHTML = () => {
        if (!list)
            return <></>
        var html = Object.keys(list).map((item, index) => (
            <>
                <div className = "col-1">
                    <h6 className="fw-bold">{index + 1}</h6>
                </div>
                <div className='col-8'>
                    <p className="fw-bold float-start">{list[item].description}</p>
                </div>
                <div className = 'col-3'>
                    <button 
                        onClick = {() => {fireListEvent(item, list[item])}}
                        className = "btn btn-sm btn-success">{buttonText}
                    </button>
                </div>
            </>
        ))
        return html;
    }

    return (
        <section>
            <div className = "card">
                <div className = "card-title mt-4">
                    <h3 className = "font-weight-bold">{title}</h3>
                </div>
                <div className = "card-body">
                    <div className = "row">    
                        {generateHTML()}
                    </div>
                </div>
            </div>
        </section>
    );
}