function MenuList() {
    return (
        <div style={{backgroundColor: '#1B0E08'}}>
  <div className="container">
    <div className="row">
      <div className="col-10">
        <div className="input-group w-100" style={{marginTop: '10vh'}}>
          <input type="text" className="form-control rounded-start-pill border-end-0" placeholder="Search for anything" aria-label="Search for anything" aria-describedby="basic-addon2" />
          <span className="input-group-text bg-white rounded-end-4" id="basic-addon2"><i className="bi bi-search" /></span>
        </div>
      </div>
      <div className="col-2">
        <button type="button" className="btn w-100" style={{backgroundColor: '#B78042', color: '#1B0E08', marginTop: 70}} data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i className="bi bi-cart-check-fill" />
        </button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content" style={{backgroundColor: '#B78042'}}>
              <div className="modal-header" style={{justifyContent: 'center', borderColor: '#1B0E08'}}>
                <h1 className="modal-title fs-3 fw-semibold" style={{color: '#1B0E08'}} id="exampleModalLabel">Pesanan</h1>
                <button type="button" className="btn-close" style={{backgroundColor: 'white'}} data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body" style={{color: '#1B0E08'}}>
                <div className="row">
                  <div className="col-7 fw-medium">
                    <div>Coffe latte</div>
                    <div>Avocado Brunch</div>
                    <div>croissants</div>
                  </div>
                  <div className="col-2 fw-medium">
                    <div>-</div>
                    <div>2</div>
                    <div>-</div>
                  </div>
                  <div className="col-3 fw-medium">
                    <div>Rp. 20.000</div>
                    <div>Rp. 70.000</div>
                    <div>Rp. 20.000</div>
                  </div>
                </div>
                <div className="row mt-2" style={{borderTop: '#1B0E08 solid 2px'}}>
                  <div className="col-7 fw-medium mt-2">
                    <div>Tax</div>
                    <div>Total</div>
                  </div>
                  <div className="col-2 fw-medium mt-2">
                    <div>2%</div>
                  </div>
                  <div className="col-3 fw-medium mt-2">
                    <div>Rp. 2.200</div>
                    <div>Rp. 112.200</div>
                  </div>
                </div>
              </div>
              <div className="modal-footer" style={{borderColor: '#1B0E08'}}>
                <button type="button" className="btn fw-medium" style={{backgroundColor: '#1B0E08', color: 'white'}}>Order now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <p className="fs-1 fw-semibold text-center mt-5" style={{color: 'white'}}>Our <span style={{color: '#B78042'}}>Menu</span></p>
  </div>
  <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      <div className="col">
        <div className="card h-80" style={{backgroundColor: '#B78042'}}>
          <img src="https://images.unsplash.com/photo-1604423043492-41303788de80?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{height: '40vh', objectFit: 'cover', objectPosition: 'cener'}} alt="Coffe latte" />
          <div className="card-body">
            <h5 className="card-title fw-semibold fs-3" style={{color: '#1B0E08'}}>Coffe latte</h5>
            <div className="d-flex mb-4">
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-half" style={{color: '#1B0E08'}} />
              <i className="bi bi-star" style={{color: '#1B0E08'}} />
            </div>
            <button className="btn rounded-pill d-flex fw-semibold fs-5" style={{borderColor: '#1B0E08', backgroundColor: '#1B0E08', borderWidth: 2, color: 'white'}} type="value">Rp.20.000
              <p className="text-decoration-line-through mb-0 ms-2 mt-2" style={{color: 'grey', fontWeight: 100, fontSize: '70%'}}> Rp 25.000</p>
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100" style={{backgroundColor: '#B78042'}}>
          <img src="https://images.unsplash.com/photo-1633204339691-9d3645430e14?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{height: '40vh', objectFit: 'cover', objectPosition: 'center'}} alt="Avocado Brunch" />
          <div className="card-body">
            <h5 className="card-title fw-semibold fs-4" style={{color: '#1B0E08'}}>Avocado Brunch</h5>
            <div className="d-flex mb-4">
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star" style={{color: '#1B0E08'}} />
            </div>
            <button className="btn rounded-pill d-flex fw-semibold fs-5" style={{borderColor: '#1B0E08', backgroundColor: '#1B0E08', borderWidth: 2, color: 'white'}} type="value">Rp.35.000
              <p className="text-decoration-line-through mb-0 ms-2 mt-2" style={{color: 'grey', fontWeight: 100, fontSize: '70%'}}> Rp 25.000</p>
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-80" style={{backgroundColor: '#B78042'}}>
          <img src="https://images.unsplash.com/photo-1621939650348-2a4139949c7a?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{height: '40vh', objectFit: 'cover', objectPosition: 'center'}} alt="Croissants" />
          <div className="card-body">
            <h5 className="card-title fw-semibold fs-3" style={{color: '#1B0E08'}}>croissants</h5>
            <div className="d-flex mb-4">
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star" style={{color: '#1B0E08'}} />
            </div>
            <button className="btn rounded-pill d-flex fw-semibold fs-5" style={{borderColor: '#1B0E08', backgroundColor: '#1B0E08', borderWidth: 2, color: 'white'}} type="value">Rp.20.000
              <p className="text-decoration-line-through mb-0 ms-2 mt-2" style={{color: 'grey', fontWeight: 100, fontSize: '70%'}}> Rp 25.000</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
      <div className="col">
        <div className="card h-80" style={{backgroundColor: '#B78042'}}>
          <img src="https://images.unsplash.com/photo-1604423043492-41303788de80?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{height: '40vh', objectFit: 'cover', objectPosition: 'center'}} alt="Coffe latte" />
          <div className="card-body">
            <h5 className="card-title fw-semibold fs-3" style={{color: '#1B0E08'}}>Coffe latte</h5>
            <div className="d-flex mb-4">
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-half" style={{color: '#1B0E08'}} />
              <i className="bi bi-star" style={{color: '#1B0E08'}} />
            </div>
            <button className="btn rounded-pill d-flex fw-semibold fs-5" style={{borderColor: '#1B0E08', backgroundColor: '#1B0E08', borderWidth: 2, color: 'white'}} type="value">Rp.20.000
              <p className="text-decoration-line-through mb-0 ms-2 mt-2" style={{color: 'grey', fontWeight: 100, fontSize: '70%'}}> Rp 25.000</p>
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100" style={{backgroundColor: '#B78042'}}>
          <img src="https://images.unsplash.com/photo-1633204339691-9d3645430e14?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{height: '40vh', objectFit: 'cover', objectPosition: 'center'}} alt="Avocado Brunch" />
          <div className="card-body">
            <h5 className="card-title fw-semibold fs-4" style={{color: '#1B0E08'}}>Avocado Brunch</h5>
            <div className="d-flex mb-4">
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star" style={{color: '#1B0E08'}} />
            </div>
            <button className="btn rounded-pill d-flex fw-semibold fs-5" style={{borderColor: '#1B0E08', backgroundColor: '#1B0E08', borderWidth: 2, color: 'white'}} type="value">Rp.35.000
              <p className="text-decoration-line-through mb-0 ms-2 mt-2" style={{color: 'grey', fontWeight: 100, fontSize: '70%'}}> Rp 25.000</p>
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-80" style={{backgroundColor: '#B78042'}}>
          <img src="https://images.unsplash.com/photo-1621939650348-2a4139949c7a?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{height: '40vh', objectFit: 'cover', objectPosition: 'center'}} alt="Croissants" />
          <div className="card-body">
            <h5 className="card-title fw-semibold fs-3" style={{color: '#1B0E08'}}>croissants</h5>
            <div className="d-flex mb-4">
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star" style={{color: '#1B0E08'}} />
            </div>
            <button className="btn rounded-pill d-flex fw-semibold fs-5" style={{borderColor: '#1B0E08', backgroundColor: '#1B0E08', borderWidth: 2, color: 'white'}} type="value">Rp.20.000
              <p className="text-decoration-line-through mb-0 ms-2 mt-2" style={{color: 'grey', fontWeight: 100, fontSize: '70%'}}> Rp 25.000</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
      <div className="col">
        <div className="card h-80" style={{backgroundColor: '#B78042'}}>
          <img src="https://images.unsplash.com/photo-1604423043492-41303788de80?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{height: '40vh', objectFit: 'cover', objectPosition: 'center'}} alt="Coffe latte" />
          <div className="card-body">
            <h5 className="card-title fw-semibold fs-3" style={{color: '#1B0E08'}}>Coffe latte</h5>
            <div className="d-flex mb-4">
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-half" style={{color: '#1B0E08'}} />
              <i className="bi bi-star" style={{color: '#1B0E08'}} />
            </div>
            <button className="btn rounded-pill d-flex fw-semibold fs-5" style={{borderColor: '#1B0E08', backgroundColor: '#1B0E08', borderWidth: 2, color: 'white'}} type="value">Rp.20.000
              <p className="text-decoration-line-through mb-0 ms-2 mt-2" style={{color: 'grey', fontWeight: 100, fontSize: '70%'}}> Rp 25.000</p>
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100" style={{backgroundColor: '#B78042'}}>
          <img src="https://images.unsplash.com/photo-1633204339691-9d3645430e14?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{height: '40vh', objectFit: 'cover', objectPosition: 'center'}} alt="Avocado Brunch" />
          <div className="card-body">
            <h5 className="card-title fw-semibold fs-4" style={{color: '#1B0E08'}}>Avocado Brunch</h5>
            <div className="d-flex mb-4">
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star" style={{color: '#1B0E08'}} />
            </div>
            <button className="btn rounded-pill d-flex fw-semibold fs-5" style={{borderColor: '#1B0E08', backgroundColor: '#1B0E08', borderWidth: 2, color: 'white'}} type="value">Rp.35.000
              <p className="text-decoration-line-through mb-0 ms-2 mt-2" style={{color: 'grey', fontWeight: 100, fontSize: '70%'}}> Rp 25.000</p>
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-80" style={{backgroundColor: '#B78042'}}>
          <img src="https://images.unsplash.com/photo-1621939650348-2a4139949c7a?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{height: '40vh', objectFit: 'cover', objectPosition: 'center'}} alt="Croissants" />
          <div className="card-body">
            <h5 className="card-title fw-semibold fs-3" style={{color: '#1B0E08'}}>croissants</h5>
            <div className="d-flex mb-4">
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star" style={{color: '#1B0E08'}} />
            </div>
            <button className="btn rounded-pill d-flex fw-semibold fs-5" style={{borderColor: '#1B0E08', backgroundColor: '#1B0E08', borderWidth: 2, color: 'white'}} type="value">Rp.20.000
              <p className="text-decoration-line-through mb-0 ms-2 mt-2" style={{color: 'grey', fontWeight: 100, fontSize: '70%'}}> Rp 25.000</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
      <div className="col">
        <div className="card h-80" style={{backgroundColor: '#B78042'}}>
          <img src="https://images.unsplash.com/photo-1604423043492-41303788de80?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{height: '40vh', objectFit: 'cover', objectPosition: 'center'}} alt="Coffe latte" />
          <div className="card-body">
            <h5 className="card-title fw-semibold fs-3" style={{color: '#1B0E08'}}>Coffe latte</h5>
            <div className="d-flex mb-4">
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-half" style={{color: '#1B0E08'}} />
              <i className="bi bi-star" style={{color: '#1B0E08'}} />
            </div>
            <button className="btn rounded-pill d-flex fw-semibold fs-5" style={{borderColor: '#1B0E08', backgroundColor: '#1B0E08', borderWidth: 2, color: 'white'}} type="value">Rp.20.000
              <p className="text-decoration-line-through mb-0 ms-2 mt-2" style={{color: 'grey', fontWeight: 100, fontSize: '70%'}}> Rp 25.000</p>
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100" style={{backgroundColor: '#B78042'}}>
          <img src="https://images.unsplash.com/photo-1633204339691-9d3645430e14?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{height: '40vh', objectFit: 'cover', objectPosition: 'center'}} alt="Avocado Brunch" />
          <div className="card-body">
            <h5 className="card-title fw-semibold fs-4" style={{color: '#1B0E08'}}>Avocado Brunch</h5>
            <div className="d-flex mb-4">
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star" style={{color: '#1B0E08'}} />
            </div>
            <button className="btn rounded-pill d-flex fw-semibold fs-5" style={{borderColor: '#1B0E08', backgroundColor: '#1B0E08', borderWidth: 2, color: 'white'}} type="value">Rp.35.000
              <p className="text-decoration-line-through mb-0 ms-2 mt-2" style={{color: 'grey', fontWeight: 100, fontSize: '70%'}}> Rp 25.000</p>
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-80" style={{backgroundColor: '#B78042'}}>
          <img src="https://images.unsplash.com/photo-1621939650348-2a4139949c7a?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{height: '40vh', objectFit: 'cover', objectPosition: 'center'}} alt="Croissants" />
          <div className="card-body">
            <h5 className="card-title fw-semibold fs-3" style={{color: '#1B0E08'}}>croissants</h5>
            <div className="d-flex mb-4">
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star-fill" style={{color: '#1B0E08'}} />
              <i className="bi bi-star" style={{color: '#1B0E08'}} />
            </div>
            <button className="btn rounded-pill d-flex fw-semibold fs-5" style={{borderColor: '#1B0E08', backgroundColor: '#1B0E08', borderWidth: 2, color: 'white'}} type="value">Rp.20.000
              <p className="text-decoration-line-through mb-0 ms-2 mt-2" style={{color: 'grey', fontWeight: 100, fontSize: '70%'}}> Rp 25.000</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default MenuList