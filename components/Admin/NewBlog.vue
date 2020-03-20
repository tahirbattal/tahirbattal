<template name="component-name">
  <div>
    <div class="container-fluid mt-5 mb d-flex flex-wrap justify-content-center align-items-center">
      <PhotoUp class="mr-5" @photoUp="savePhoto($event)"/>
      <form style="width: 500px" @submit.prevent="onSubmit">
        <fieldset>
          <legend v-if="isUpdate">Blog Yazısı Düzenle</legend>
          <legend v-else>Yeni Blog Yazısı</legend>
          <div class="form-group">
            <label>Yazar Adı</label>
            <input
              v-model="blog.author"
              type="text"
              class="form-control"
              placeholder="Yazarın adını giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Baslık</label>
            <input
              v-model="blog.title"
              type="text"
              class="form-control"
              placeholder="Yazının baslıgını giriniz.."
            />
          </div>

          <div class="form-group">
            <label>Blog</label>
            <textarea v-model="blog.text" class="form-control" rows="5"></textarea>
          </div>


          <button @click="$router.push('/admin')" class="btn btn-danger">İptal</button>
          <button type="submit" class="btn btn-primary">Kaydet</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import PhotoUp from '@/components/Admin/PhotoUp'

export default {
  data() {
    return {
      blog: {
        title: null,
        author: null,
        text: null,
        photo: null
      },

    };
  },

  components:{
    PhotoUp
  },

  props: {
    isUpdate: {
      type: Boolean,
      required: false,
      default: false
    },
    blogs: {
      type: Object,
      required: false
    }
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.blog);
      console.log(this.blog);
      
    },
    savePhoto(photo){
      this.blog.photo = photo[0]
      
    }

  },
  created() {
    this.blog = this.blog
      ? this.blog
      : {
          id: null,
          title: null,
          author: null,
          text: null,
          photo: null
        };
  }
};
</script>
<style scoped>
  .mb{
    margin-bottom: 15%;
  }
</style>
