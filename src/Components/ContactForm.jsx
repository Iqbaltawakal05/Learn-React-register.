function ContactForm() {
    return (
        <div>
  <div className="d-flex justify-content-center fs-1 fw-semibold text-white" style={{marginTop: '10vh', marginBottom: '10vh'}}>Our<span style={{marginLeft: '1vh', color: '#B78042'}}>Contact</span></div>
  <div className="d-flex justify-content-center">
    <div className="card rounded-5" style={{width: '30rem', backgroundColor: '#B78042', marginBottom: '50vh'}}>
      <div className="card-body mt-4">
        <div className="mb-3 fs-4 text-center">
          <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold" style={{color: '#1B0E08'}}>Name</label>
          <input type="email" className="form-control text-center" id="exampleFormControlInput1" placeholder="Insert your name" />
        </div>
        <div className="mb-3 fs-4 text-center">
          <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold" style={{color: '#1B0E08'}}>Email</label>
          <input type="email" className="form-control text-center" id="exampleFormControlInput1" placeholder="Insert your email" />
        </div>
        <div className="mb-3 fs-4 text-center">
          <label htmlFor="exampleFormControlTextarea1" className="form-label fw-semibold" style={{color: '#1B0E08'}}>Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
        </div>
        <a href="#" className="btn fw-medium d-flex justify-content-center mt-4 p-2" style={{backgroundColor: '#1B0E08', color: '#B78042'}}>Contact</a>
      </div>
      <div>
        <p className="fs-5 d-flex justify-content-center fw-semibold" style={{color: '#1B0E08'}}>OR</p>
        <div className="d-flex justify-content-center mb-3">
          <p><i className="bi bi-whatsapp" style={{color: '#1B0E08', fontSize: '2vw'}} /><a className="link-offset-2 link-underline link-underline-opacity-0 fw-semibold" style={{color: '#1B0E08'}} href="#" target="_blank"> Click Here</a></p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default ContactForm