<template>
  <div class="p-10 mb-72 box-border max-w-screen-2xl m-auto">
    <div data-aos="fade-up">
      <h1 class="text-4xl md:text-6xl font-bold text-darkgreen mb-6">
        Teynur Yuseinov
      </h1>
      <p class="text-lg md:text-xl text-maingreen mb-10">
        Hallo! Ik ben een jonge
        <span class="font-semibold italic">webdesigner</span> en
        <span class="font-semibold italic">branding-specialist</span> met <br />
        een achtergrond in grafisch ontwerp en programmeren.
      </p>
    </div>

    <div
      data-aos-duration="1000"
      data-aos="fade-up"
      class="grid border-b-4 border-maingreen pb-14 grid-cols-1 md:grid-cols-3 gap-10 mt-10"
    >
      <div data-aos-duration="1000" data-aos="fade-up">
        <h3 class="text-3xl text-darkgreen mb-4">Opleiding</h3>
        <div class="text-maingreen space-y-6">
          <div>
            <p class="text-sm">09/2022 - 06/2023</p>
            <h4 class="font-bold text-lg">Arteveldehogeschool</h4>
            <p class="text-sm">Cloud Application Development</p>
            <p class="text-sm">Full-Stack Developer</p>
          </div>
          <div>
            <p class="text-sm">09/2015 - 06/2021</p>
            <h4 class="font-bold text-lg">Viso Mariakerke</h4>
            <p class="text-sm">
              TSO Printmedia / Tekst- en beeldintegratietechnieken
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <h3 class="text-3xl text-darkgreen mb-4">Ervaring</h3>
        <div class="text-maingreen space-y-6">
          <div>
            <p class="text-sm">10/2024 - heden</p>
            <h4 class="font-bold text-lg">Cereus Creative</h4>
            <p class="text-sm">Freelance Ontwikkelaar / Oprichter</p>
          </div>
          <div>
            <p class="text-sm">09/2021 - 12/2021</p>
            <h4 class="font-bold text-lg">Make Your Own Spirit</h4>
            <p class="text-sm">Grafisch Ontwerper</p>
          </div>
        </div>
      </div>

      <div data-aos-duration="1000" data-aos="fade-up">
        <h3 class="text-3xl text-darkgreen mb-4">Stage</h3>
        <div class="text-maingreen space-y-6">
          <div>
            <p class="text-sm">02/2024 - 05/2024</p>
            <h4 class="font-bold text-lg">Techbirds / Techjane</h4>
            <p class="text-sm">Webdeveloper</p>
          </div>
          <div>
            <p class="text-sm">03/2022 - 02/2022</p>
            <h4 class="font-bold text-lg">3 Plus NV</h4>
            <p class="text-sm">Drukker / Grafisch Ontwerper</p>
          </div>
        </div>
      </div>
    </div>

    <div
      data-aos="fade-up"
      class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      <div>
        <h3 class="text-3xl text-darkgreen mb-4">Vaardigheden</h3>
        <div class="text-maingreen space-y-2 text-lg">
          <p>Branding & Identiteit</p>
          <p>Webdesign</p>
          <p>Front-end Development</p>
          <p>Back-end Development</p>
        </div>
      </div>

      <div data-aos-duration="1000" data-aos="fade-up">
        <h3 class="text-3xl text-darkgreen mb-4">Programmeertalen</h3>
        <div class="text-maingreen space-y-2 text-lg">
          <p>JavaScript / TypeScript</p>
          <p>PHP</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>C#</p>
        </div>
      </div>

      <div data-aos="fade-up">
        <h3 class="text-3xl text-darkgreen mb-4">Frameworks</h3>
        <div class="text-maingreen space-y-2 text-lg">
          <p>ReactJS / NextJS</p>
          <p>NodeJS / ExpressJS</p>
          <p>Vue.js / Nuxt</p>
          <p>Laravel</p>
        </div>
      </div>

      <div data-aos-duration="1000" data-aos="fade-up">
        <h3 class="text-3xl text-darkgreen mb-4">CMS</h3>
        <div class="text-maingreen space-y-2 text-lg">
          <p>WordPress</p>
          <p>Strapi</p>
          <p>CraftCMS</p>
        </div>
      </div>

      <div data-aos="fade-up">
        <h3 class="text-3xl text-darkgreen mb-4">Database/ORM</h3>
        <div class="text-maingreen space-y-2 text-lg">
          <p>PostgreSQL</p>
          <p>Strapi</p>
          <p>Prisma</p>
        </div>
      </div>

      <div data-aos-duration="1000" data-aos="fade-up">
        <h3 class="text-3xl text-darkgreen mb-4">Design</h3>
        <div class="text-maingreen space-y-2 text-lg">
          <p>Figma</p>
          <p>Adobe Creative</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: 'Teynur Yuseinov',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Leer meer over Teynur Yuseinov, oprichter van Cereus Creative. Gespecialiseerd in webdesign, branding, en full-stack development in Vlaanderen.',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Teynur Yuseinov',
            jobTitle: ' Webdesigner & Branding Specialist',
            worksFor: {
              '@type': 'Organization',
              name: 'Cereus Creative',
              url: 'https://www.cereuscreative.be',
            },
            sameAs: [
              'https://www.linkedin.com/in/teynuryuseinov/',
              'https://www.instagram.com/cereuscrtv/',
            ],
            url: 'https://www.cereuscreative.be/about',
          },
        },
      ],
    });
  },
};
</script>
