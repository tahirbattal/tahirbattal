<template>
  <div id="portfolio" class>
    <div class="container">
      <div class="portfolio-top text-center">
        <h3 class="wow fadeInLeft">Projelerimiz</h3>
        <p class="paragraf wow fadeInRight">UI/UX Kullanıcı Deneyimli Web Tasarım</p>
      </div>
      <div class="portfolio-content text-center">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <img src="@/assets/image/portfolio/1.gif" alt height="250" />
            </div>
            <div class="card-body">
              <h4 class="card-title">Responsive Tasarım</h4>
              <p class="card-subtitle ">Responsive Tasarımlarla Mobil Uyumluluğunuzu Sağlayın ve Daha Fazla Kişiye Ulaşın! En Yenilikçi Tasarımlarla Kurumsal ve Bireysel Kimliğinizi Ortaya Koymaya Hazırlanın!</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <img src="@/assets/image/portfolio/2.gif" alt height="250" />
            </div>
            <div class="card-body">
              <h4 class="card-title">E-Ticaret Yazılımı</h4>
              <p class="card-subtitle ">Modern Tasarımı ve Alışveriş Kolaylığı İle Müşterilerinizin Vazgeçilmezi Olun! Sosyal Medya Üzerinde Markalarınızı Konumlanırarak, Bilinirliğinizi Artırın ve Kazanın!</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <img src="../assets/image/portfolio/3.gif" alt height="250" />
            </div>
            <div class="card-body">
              <h4 class="card-title">Arama Motoru Optimizasyonu</h4>
              <p class="card-subtitle ">Arama Motorlarında Zirvede Yer Almak ve Alanında En İyisi Olmak mı İstiyorsunuz? Profesyonel Reklam Yönetimi Hizmetimizden Yararlanarak Giderlerinizi Azaltabilirsiniz!</p>
            </div>
          </div>
        


        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#portfolio {
  background-color: #f7f7f7;
  padding-top: 110px;
  padding-bottom: 70px;
}

.card {
  border-style: none;
}

.portfolio-content .row {
  margin-bottom: 50px;
}

.portfolio-content .card-title {
  font-size: 28px;
  font-weight: 700;
}

.portfolio-content .card-subtitle {
  font-size: 14px;
  font-style: italic;
  font-family: "Droid Serif", Serif;
}
</style>