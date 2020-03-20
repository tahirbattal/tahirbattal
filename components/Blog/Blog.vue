<template>
  <div class="card card-plain card-blog">
    <div class="row">
      <div class="col-md-4">
        <div class="card-image">
          <router-link tag="a" :to="'/blogs/' + blog.id">
            <img class="img" :src="blog.photo" />
            
          </router-link>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
            <a
              v-if="!isAdmin"
              href="#"
              @click.prevent="$router.push('/blogs/' + blog.id)"
              class="card-title"
            >{{ blog.title }}</a>
          
          <p class="card-description text-truncate " >{{ blog.text }}</p>
          <p>
            by
            <b class="author">{{ blog.author }}</b>
          </p>
        </div>
      </div>

      <div class="admin-button-container" v-if="isAdmin">
        <a
          href="#"
          @click.prevent="$router.push('/admin/' + blog.id)"
          class="btn btn-outline-warning btn-sm"
        >Düzenle</a>
        <a href="#" class="btn btn-outline-danger btn-sm">Sil</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      required: true
    },
    blog: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>


.row {
  border: none !important;
}

.card {
  border: none;
}

.card-title {
  color: #b8ab17;
  font-size: 2rem;
  text-decoration: none;

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

.line{
  line-break: anywhere;
}
</style>