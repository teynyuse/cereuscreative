<template>
  <div
    class="flex flex-col box-border max-w-screen-2xl m-auto md:flex-row justify-between items-start gap-y-16 gap-x-16 p-10 mx-auto"
  >
    <div data-aos="fade-up" class="w-full md:w-1/2">
      <h1 class="text-4xl md:text-6xl font-bold text-darkgreen mb-6">
        Contact
      </h1>
      <p class="text-maingreen text-lg md:text-xl">
        Heb je een vraag, wil je een samenwerking bespreken, of wil je gewoon
        kennismaken?
      </p>
      <p class="text-maingreen text-lg md:text-xl mt-5">
        Vul het formulier in of gebruik de contactgegevens hieronder om direct
        contact op te nemen.
      </p>
      <div>
        <h2 class="text-2xl text-maingreen font-bold mt-10">Contactgegevens</h2>
        <h3 class="text-maingreen font-bold mt-2">E-mail</h3>
        <p class="text-maingreen">
          <a href="mailto:cereuscrtv@gmail.com" class="hover:text-middlegreen"
            >cereuscrtv@gmail.com</a
          >
        </p>
        <h3 class="text-maingreen mt-2 font-bold">Telefoon</h3>
        <p class="text-maingreen">Binnenkort</p>
      </div>
      <h2 class="text-maingreen font-bold mt-10">
        Altijd bereikbaar via social media! <br />
        Volg en blijf op hoogte.
      </h2>
      <div class="flex mt-5 gap-4">
        <NuxtLink to="https://www.instagram.com/cereuscrtv/"
          ><img src="../public/assets/images/instagram.svg" alt="Instagram"
        /></NuxtLink>
        <NuxtLink to="https://www.facebook.com/61568421422105"
          ><img src="../public/assets/images/facebook.svg" alt="Facebook"
        /></NuxtLink>
        <NuxtLink to="https://www.linkedin.com/in/teynuryuseinov/"
          ><img src="../public/assets/images/linkedin.svg" alt="LinkedIn"
        /></NuxtLink>
      </div>
      <div class="text-darkgreen mt-10 text-sm md:text-base">
        <p>Teynur Yuseinov</p>
        <p>
          <span class="font-semibold">©CereusCreative</span>
        </p>
      </div>
    </div>
    <div data-aos-duration="1000" data-aos="fade-up" class="w-full md:w-1/2">
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from '~/components/Items/ContactForm.vue';

export default {
  setup() {
    useHead({
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Cereus helpt bedrijven met WordPress of op maat gemaakte websites en sterke visuele identiteiten, zodat jouw verhaal krachtig en onvergetelijk wordt.',
        },
      ],
    });
  },
  components: {
    ContactForm,
  },
};
</script>
