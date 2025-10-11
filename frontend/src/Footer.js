 import React from 'react';
 
 function Footer() {
  return (
    <>
    <footer>
      <nav class="navbar navbar-expand background">
        <div class="container">
          <div class=" navbar-collapse" >
            <p class="navbar-nav me-auto fs-6" style={{color:"#fff"}}>
              Built by&nbsp;<a href='' className="footer-a-links nav-links" >mon10</a>
              .For any inquiries or issues,&nbsp;
              <a href='' className="footer-a-links nav-links">contact us here</a>.
            </p>
            <form class="d-flex"  >
              <a href='' style={{ margin: "10px" }}><i class="fa-brands fa-instagram nav-links"></i>
              </a>
              <a href='' style={{ margin: "10px"}}><i class="fa-solid fa-stopwatch nav-links"></i>
              </a>
               <a href='' style={{ margin: "10px"}} className=' nav-links'>blog
              </a>
               <a href='' style={{ margin: "10px"}} className=' nav-links'>Privacy
              </a>
               <a href='' style={{ margin: "10px"}} className=' nav-links'>Terms
              </a>
            </form>
          </div>
        </div>
      </nav>
      </footer>
    </>
  );
}

export default Footer;