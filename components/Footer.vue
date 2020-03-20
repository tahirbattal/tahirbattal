<template>
  <footer class="container-fluid bg-grey py-5 sticky-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
              <div class="logo-part">
				<router-link tag="div" to="/" >
                <img src="@/assets/image/gezegen.png" class="w-50 logo-footer" />
				</router-link>
                <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                <p>Use this tool as test data for an automated system or find your next pen</p>
              </div>
            </div>
            <div class="col-md-6 px-4">
              <h6>About Company</h6>
              <p>But horizontal lines can only be a full pixel high.</p>
			  <router-link tag="a" to="/" class="btn-footer">
              	More Info
			  </router-link>
              <br />
			  <router-link tag="a" to="/" class="btn-footer">
              	Contact Us
			  </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 px-4">
              <h6>Help us</h6>
              <div class="row">
                <div class="col-md-6">
                  <ul>
					<router-link tag="li" to="/">
                      <a href="#">Home</a>
					</router-link>
					<router-link tag="li" to="/">
                      <a href="#">About</a>
					</router-link>
					<router-link tag="li" to="/">
                      <a href="#">Service</a>
					</router-link>
					<router-link tag="li" to="/">
                      <a href="#">Team</a>
					</router-link>
					<router-link tag="li" to="/">
                      <a href="#">Help</a>
					</router-link>
					<router-link tag="li" to="/">
                      <a href="#">Contact</a>
					</router-link>
                  </ul>
                </div>
                <div class="col-md-6 px-4">
                  <ul>
					<router-link tag="li" to="/">
                      <a href="#">Cab Faciliy</a>
					</router-link>
					<router-link tag="li" to="/">
                      <a href="#">Fax</a>
					</router-link>
					<router-link tag="li" to="/">
                      <a href="#">Terms</a>
					</router-link>
					<router-link tag="li" to="/">
                      <a href="#">Policy</a>
					</router-link>
					<router-link tag="li" to="/">
                      <a href="#">Refunds</a>
					</router-link>
					<router-link tag="li" to="/">
                      <a href="#">Paypal</a>
					</router-link>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <h6>Newsletter</h6>
              <div class="social">
				<router-link tag="a" to="/">
                  <i class="fab fa-facebook"></i>
				</router-link>
				<router-link tag="a" to="/">
                  <i class="fab fa-instagram" aria-hidden="true"></i>
				</router-link>
              </div>
              <form class="form-footer my-3">
                <input type="text" placeholder="Arama yap...." name="search" />
                <input type="button" value="Git" />
              </form>
              <p>That's technology limitation of LCD monitors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bg-grey {
  background: #292929;
}
.logo-footer {
  margin-bottom: 40px;
}
footer {
  color: grey;
}
footer p,
a {
  font-size: 12px;
  font-family: "Roboto", sans-serif;
}
footer h6 {
  font-family: "Playfair Display", serif;
  margin-bottom: 40px;
  position: relative;
}
footer h6:after {
  position: absolute;
  content: "";
  background: grey;
  width: 12%;
  height: 1px;
  left: 0;
  bottom: -20px;
}
.btn-footer {
  color: grey;
  text-decoration: none;
  border: 1px solid;
  border-radius: 43px;
  font-size: 13px;
  padding: 7px 30px;
  line-height: 47px;
}
.btn-footer:hover {
  text-decoration: none;
}
.form-footer input[type="text"] {
  border: none;
  border-radius: 16px 0 0 16px;
  outline: none;
  padding-left: 10px;
}
::placeholder {
  font-size: 10px;
  padding-left: 10px;
  font-style: italic;
}
.form-footer input[type="button"] {
  border: none;
  background: #232323;
  margin-left: -5px;
  color: #fff;
  outline: none;
  border-radius: 0 16px 16px 0;
  padding: 2px 12px;
}
.social .fab {
  color: grey;
  font-size: 22px;
  padding: 10px 15px;
  background: #3c3c3c;
}
.fab:hover{
	color: wheat;
}
footer ul li {
  list-style: none;
  display: block;
}
footer ul {
  padding-left: 0;
}
footer ul li a {
  text-decoration: none;
  color: grey;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  color: #f5f5f5 !important;
}
.logo-part {
  border-right: 1px solid grey;
  height: 100%;
}
</style>