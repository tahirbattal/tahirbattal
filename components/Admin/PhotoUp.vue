<template>
  <!-- storage -->
  <div>
    <div>
      <p>Upload an image to Firebase:</p>
      
      <input class="" type="file" @change="previewImage" accept="image/*" />
    </div>
    <div>
      <p>
        Progress: {{uploadValue.toFixed()+"%"}}
        <progress
          id="progress"
          :value="uploadValue"
          max="100"
        ></progress>
      </p>
    </div>
    <div v-if="imageData!=null">
      <img class="preview" :src="picture" />
      
      <button class="btn btn-info my-5 col-12" @click="onUpload">Upload</button>
    </div>
  </div>

  <!-- storage -->
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
      //   console.log(this.imageData);
    },
    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);

      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
            let photo = [];
            photo.push(this.picture);
            this.$emit("photoUp", photo);
          });
        }
      );
    }
  }
};
</script>
<style scoped>
img.preview {
  width: 200px;
}
</style>