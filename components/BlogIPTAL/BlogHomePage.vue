<template>
  <div class="blog">
    <div class="container">
      <div class="row">
        <div class="col-md-10 ml-auto mr-auto">
          <h2 class="title">Latest Blogposts 3</h2>
          <br />
          <div class="card card-plain card-blog">
            <div class="row">
              <div class="col-md-4">
                <div class="card-image">
                  <router-link tag="a" to="/Blog">
                    <img class="img" src="../../assets/image/blogImage/cont1.jpg" />
                  </router-link>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  
                  <h3 class="card-title">
                    <router-link class="card-title" tag="a" to="/Blog">SoundCloud says it’s going to survive, but how?</router-link>
                  </h3>
                  <p class="card-description">
                    No matter what happens — funding versus acquisition versus who knows what — Ljung says SoundCloud is not going away “anytime in the foreseeable future.” I hope that’s true, but I can’t help but feel a bit skeptical. — and…
                    <router-link class="read-more" tag="a" to="/Blog">Read More</router-link>
                  </p>
                  <p>
                    by
                    <router-link class="author" tag="a" to="/Blog">
                      <b>Megan Rose Dickey</b>
                    </router-link>, 11 days ago
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-plain card-blog">
            <div class="row">
              <div class="col-md-8">
                <div class="card-body">
                  
                  <h3 class="card-title">
                    <router-link class="card-title" tag="a" to="/#">Uber acqui-hires social app studio Swipe Labs</router-link>
                  </h3>
                  <p class="card-description">
                    These issues might be making it a bit harder for Uber to hire right now in the competitive Silicon Valley job market. Acqui-hiring companies like it’s doing here with Swipe Labs lets it roll up a bunch of good talent — and…
                    <router-link class="read-more" tag="a" to="/#">Read More</router-link>
                  </p>
                  <p>
                    by
                    <router-link class="author" tag="a" to="/#">
                      <b>Josh Constine</b>
                    </router-link>, 2 days ago
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card-image">
                  <router-link tag="a" to="/#">
                    <img class="img" src="../../assets/image/blogImage/cont2.jpg" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-plain card-blog">
            <div class="row">
              <div class="col-md-4">
                <div class="card-image">
                  <router-link tag="a" to="/#">
                    <img class="img" src="../../assets/image/blogImage/cont3.jpg" />
                  </router-link>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-category text-success">
                    <i class="fas fa-charging-station"></i>Startups
                  </h3>
                  <h3 class="card-title">
                    <router-link class="card-title" tag="a" to="/#">HBO and Netflix lead this year’s nominations</router-link>
                  </h3>
                  <p class="card-description">
                    Streaming services once again top the list of this year’s Emmy nominations – another indicator of the shift in how today’s consumers are watching TV. HBO, which has been available.
                    <router-link class="read-more" tag="a" to="/#">Read More</router-link>
                  </p>
                  <p>
                    by
                    <router-link class="author" tag="a" to="/#">
                      <b>Sarah Perez</b>
                    </router-link>, 14 Jul 2017
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.blog {
  background-color: whitesmoke;
  margin-top: 150px;
  padding-top: 50px;
}
.row {
  border: none !important;
}
.title {
  margin-top: 30px;
  margin-bottom: 25px;
  min-height: 32px;
  color: #333;
  text-decoration: none;
}

.card {
  border: none;
}

.card-title{
  color: #b8ab17;
  font-size: larger;
}
.card-title:hover{
  color: #42cce1 !important;
}

.card-blog {
  margin-bottom: 40px;
  margin-top: 5px;
}

.card-plain {
  background-color: transparent;
  box-shadow: none;
  border-radius: 0;
}

.card-image {
  border-radius: 12px;
}

img {
  vertical-align: middle;
  border-style: none;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}
.img:hover{
  box-shadow: -8px 14px 30px 2px rgba(0, 0, 0, 0.4);

}

.card-category {
  padding-top: 10px;
  color: #9a9a9a;
}

.text-info {
  color: #17a2b8 !important;
}

.text-info:hover {
  color: #51bcda !important;
}

.card-description {
  color: #9a9a9a;
  margin-bottom: 5px;
  margin-top: 15px;
}

.author {
  display: inline-block;
}
.author:hover{
  color: teal !important;
}

.read-more:hover{
  color:cornflowerblue !important;
}
</style>