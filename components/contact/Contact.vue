<template>
  <div class="back">
    <div class="contact-form">
      <div class="contact-image">
        <img src="@/assets/image/contactImage/contact.png" />
      </div>
      <form method="post">
        <h3>İletişim</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="text"
                name="txtName"
                class="form-control"
                placeholder="İsminiz ve Soyisminiz *"
                value
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtEmail"
                class="form-control"
                placeholder="E-Posta Adresniz *"
                value
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtPhone"
                class="form-control"
                placeholder="Telefon Numaranız *"
                value
              />
            </div>
            <div class="form-group">
              <input type="submit" name="btnSubmit" class="btnContact" value="Gönder" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <textarea
                name="txtMsg"
                class="form-control"
                placeholder="Mesajınız *"
                style="width: 100%; height: 150px;"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.back {
  width: 100%;
  height: 600px;
  margin: 0;
  background-image: url("../../assets/image/contactImage/back6.jpg");
  background-size: cover;
  background-position: center center;
  position: relative;
  background-attachment: fixed;
  background-blend-mode: soft-light;
  background-color: rgba(0, 0, 0, 0.447);
  left: 0;
  top: 0;
}
@media only screen and (min-width: 1600px) {
  /* XL */
  .back {
    height: 800px;
  }
}

.contact-form {
  background: transparent;
  margin-top: 0;
  margin-bottom: 5%;
  width: 100%;
}
.contact-form .form-control {
  border-radius: 1rem;
}
.contact-image {
  text-align: center;
}
.contact-image img {
  border-radius: 6rem;
  width: 11%;
  margin-top: -5%;
  background-color: rgba(0, 0, 0, 0.32);
}
.contact-form form {
  padding: 14%;
}
.contact-form form .row {
  margin-bottom: -7%;
}
.contact-form h3 {
  margin-bottom: 8%;
  margin-top: -10%;
  text-align: center;
  color: white;
}
.contact-form .btnContact {
  width: 50%;
  border: none;
  border-radius: 1rem;
  padding: 1.5%;
  background: #dc3545;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
}
.btnContact:hover {
  background-color: #b52937;
}
.btnContactSubmit {
  width: 50%;
  border-radius: 1rem;
  padding: 1.5%;
  color: #fff;
  background-color: #0062cc;
  border: none;
  cursor: pointer;
}
</style>