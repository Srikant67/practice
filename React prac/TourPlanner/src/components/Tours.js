import Card from './Card'

function Tours({tours, removeTour, addTour}){
    return(
        <div className='container'>
            <div>
                <h2 className='title'>Tour Plans</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} removeTour={removeTour} addTour={addTour} {...tour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;