
// import {proDetailsmain} from './Products/proDetailsmain';

export function Aboutus() {

    return (
        <>
            <section className="home" style={{ backgroundColor: 'white' }} >
                <div className="content">
                    
                    <div className="" style={{ justifyContent: 'center' }}><h1><span style={{ fontSize: '43px', color: 'black' }}> About&nbsp;</span><span style={{ fontSize: '43px', color: '#ffc800' }}>Pune</span><span style={{ fontSize: '43px', color: 'black' }}>Metro</span>
                            {/* <span id="span2" style={{fontSize: '43px'}}> </span>  */}
                        </h1></div>
                        <p style={{ fontSize: '25px', marginRight: '20px' }}>
                            <br />Pune Metro is currently under construction and is expected to be completed by 2023. The work on the first phase of the project began in 2017. The estimated cost of the project is Rs. 11,420 crores. The metro will initially have two lines, Line 1 from Pimpri Chinchwad to Swargate and Line 2 from Vanaz to Ramwadi. It is expected to cater to a large number of commuters in the city and ease traffic congestion on the roads.
                            <br />
                        </p>
                </div>
                <div className="img">
                    <img src="https://th.bing.com/th/id/OIP.VJFiA1r5CkAAk7l5ZyJfcQHaEK?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                </div>
            </section>

            <div className="container mb-5 " id="product-cards">
                <h1 className="text-center"> Vision and Mission</h1>
                <div className="row" style={{ marginTop: '30px' }}>
                    <div className="col-md-6 ">
                        <div className="card vision">
                            {/* <img className="cardimg mt-4 " alt="" /> */}
                            <div className="card-body">
                                <h1 className="text-center" style={{ fontWeight: 'bold',color:'white'}}>Vision</h1>
                                <p className="text-center mt-5" style={{fontSize: '25px'}}>To connect places within Pune and provide with most delightful commuting experience. </p>
                                <br></br><br></br>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body mission">
                                <h1 className="text-center" style={{ fontWeight: 'bold',color:'white' }}>Mission</h1>
                                <p className="text-center mt-5 h-5" style={{fontSize: '25px'}}>To provide a Seamless, Safe, Comfortable, Faster and most Modern mode of commute.</p>
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

};
