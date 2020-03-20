<template>
  <div>
    <section id="ourHistory">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="mt-3 mb-4">Arama Yap</h2>
            <form class="form-inline ml-3">
              <input
                class="form-control mr-sm-2 rounded-pill col-10"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <br />
              <button class="btn btn-info my-2 my-sm-0 rounded-pill" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#ourHistory {
  background-color: #fff;
  padding: 100px 0 100px 0;
  height: 100%;
}

#ourHistory h2 {
  border-left: 6px solid #1886c7;
  padding-left: 30px;
}

#ourHistory p {
  text-align: justify;
  line-height: 25px;
}

.container {
  height: 100%;
}
</style>