<template>
  <div class="blog">
    <div class="container">
      <div class="row">
        <div class="col-md-10 ml-auto mr-auto">
          <div class="card card-plain card-blog">
            <div class="row">
              <div class="col-md-4">
                <div class="card-image">
                  
                    <img class="img" :src="blog.photo" />
                  
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">{{ blog.title }}</h3>
                  <p class="card-description">{{ blog.text }}</p>
                  <p>by {{ blog.author }}</p>
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
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.blog {
  background-color: whitesmoke;
  margin-top: 50px;
  padding-top: 50px;
}
.row {
  border: none !important;
}
.title {
  margin-top: 20px;
  margin-bottom: 50px;
  min-height: 32px;
  font-size: 3rem;
  color: #333;
  text-decoration: none;
}

.card {
  border: none;
}

.card-title {
  color: #b8ab17;
  font-size: larger;
}
.card-title:hover {
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
.img:hover {
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
.author:hover {
  color: teal !important;
}

.read-more:hover {
  color: cornflowerblue !important;
}
</style>