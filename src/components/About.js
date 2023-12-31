import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
     
     <div className="container-fluid mt-5 ">
        <div class="p-4 p-md-5 m-4  text-white rounded bg-dark">
    <div class="col-md-6 px-0">
      <h1 class="display-4 fst-italic">Daily news</h1>
      <p class="lead my-3">A web page that displays daily news short posts for users.A simple short news viewing application.</p>
     
    </div>
  </div>
  <div class="row mb-2">
  <div class="col-md-6">
  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="col p-4 d-flex flex-column position-static">
      <strong class="d-inline-block mb-2 text-primary">Author</strong>
      <h3 class="mb-0">Teja Swaroop</h3>
      <div class="mb-1 text-muted">Nov 12</div>
      <p class="card-text mb-auto">A passionate and experienced web developer with a strong focus on crafting remarkable digital experiences. I have honed my skills and expertise to deliver high-quality and visually stunning websites.</p>
      <a href="https://www.linkedin.com/in/teja-swaroop-b984b4244/" class="stretched-link">Continue reading</a>
    </div>
    <div class="col-auto d-none d-lg-block">
      <img src="https://wallpapercave.com/dwp2x/wp2144596.jpg" class="bd-placeholder-img" width="200" height="250" alt="Thumbnail"/>
    </div>
  </div>
</div>

    <div class="col-md-6">
  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="col p-4 d-flex flex-column position-static">
      <strong class="d-inline-block mb-2 text-success">Contact</strong>
      <h3 class="mb-0">Teja Swaroop</h3>
      <div class="mb-1 text-muted">Nov 11</div>
      <p class="mb-auto">Email: tejaswaroop0507@gmail.com <br/> LinkedIn: <a href="https://www.linkedin.com/in/teja-swaroop-b984b4244/">https://www.linkedin.com/in/teja-swaroop-b984b4244/</a></p>
      <a href="https://www.linkedin.com/in/teja-swaroop-b984b4244/" class="stretched-link">Continue reading</a>
    </div>
    <div class="col-auto d-none d-lg-block">
      <img src="https://wallpapercave.com/dwp2x/wp3279790.jpg" class="bd-placeholder-img" width="200" height="250" alt="Thumbnail"/>
    </div>
  </div>
</div>

  </div>
    </div>
     
    )
  }
}
