function Footer() {
    return (
        <div>
        <footer>
        <div className="card mt-5" style={{backgroundColor: '#B78042'}}>
            <div className="card-body container mt-4">
            <div className="row">
                <div className="col-6">
                <div className="d-flex flex-row mb-3" style={{marginTop: '15vh'}}>
                    <span className="me-3" style={{borderLeft: '1vw', borderLeftStyle: 'solid', borderColor: '#1B0E08'}} />
                    <h1 className="text-white">Terima kasih sudah <span style={{color: '#1B0E08'}}>Berkunjung</span></h1>
                </div>
                </div>
                <div className="col-6 text-center">
                <p className="card-title fw-semibold fs-3 mb-3" style={{color: '#1B0E08'}}>Dapatkan info event dan diskon</p>
                <form>
                    <div className="mb-3">
                    <input type="email" className="form-control text-center" style={{height: '7vh'}} id="exampleInputEmail1" placeholder="Enter email address" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn w-100" style={{backgroundColor: '#1B0E08', color: 'white', height: '7vh'}}>Subscribe</button>
                </form>
                <p className="fw-semibold fs-5 mt-4" style={{color: '#1B0E08'}}>OR</p>
                <div className="row mt-4">
                    <div className="col-4">
                    <p><i className="bi bi-instagram fs-5" style={{color: '#1B0E08'}} /><a className="link-offset-2 link-underline link-underline-opacity-0 fw-semibold fs-5" style={{color: '#1B0E08'}} href="https://www.instagram.com/lqbaltw/" target="_blank"> @Iqbaltw</a></p>
                    </div>
                    <div className="col-4">
                    <p><i className="bi bi-facebook fs-5" style={{color: '#1B0E08'}} /><a className="link-offset-2 link-underline link-underline-opacity-0 fw-semibold fs-5" style={{color: '#1B0E08'}} href="https://www.instagram.com/lqbaltw/" target="_blank"> @Iqbaltw</a></p>
                    </div>
                    <div className="col-4">
                    <p><i className="bi bi-twitter-x fs-5" style={{color: '#1B0E08'}} /><a className="link-offset-2 link-underline link-underline-opacity-0 fw-semibold fs-5" style={{color: '#1B0E08'}} href="https://www.instagram.com/lqbaltw/" target="_blank"> @Iqbaltw</a></p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </footer>
        </div>
    )
}

export default Footer