<template>
  <div class="bg-white mb-96">
    <div class="max-w-screen-2xl m-auto">
      <div
        class="flex px-10 justify-between flex-col lg:flex-row md:flex-col md:items-start lg:items-center"
      >
        <div>
          <h2
            data-aos="fade-up"
            class="lg:text-6xl text-4xl mb-5 text-darkgreen"
          >
            Recente<br /><span class="font-semibold italic">Projecten</span>
          </h2>
        </div>
        <div class="md:hidden hidden lg:block">
          <NuxtLink
            to="/portfolio"
            class="hover:bg-lightgreen px-2 py-3 text-darkgreen border border-darkgreen ease-out duration-500 transform text-xl"
          >
            Alle projecten
          </NuxtLink>
        </div>
      </div>
      <div
        data-aos="fade-up"
        class="grid grid-cols-1 mt-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="project in recentProjects"
          :key="project.id"
          class="relative group w-full h-96 overflow-hidden text-darkgreen"
        >
          <NuxtLink
            :to="`/portfolio/${project.slug}`"
            class="block w-full h-full"
          >
            <div
              class="w-full h-full transition-transform duration-300 group-hover:scale-105"
            >
              <NuxtImg
                class="w-full h-full object-cover transition-opacity duration-300"
                :src="project.image || '/images/covers/noimage.jpg'"
                alt="project image"
                :sizes="['320px', '640px', '1024px']"
                format="webp"
                loading="lazy"
              />
            </div>
            <div
              :style="{ backgroundColor: project.color }"
              class="absolute inset-0 bg-opacity-0 flex flex-col items-center justify-center opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
            >
              <h3 class="text-4xl font-semibold text-white">
                {{ project.title }}
              </h3>
              <p class="text-xl text-white mt-2">{{ project.description }}</p>
            </div>
          </NuxtLink>
        </div>
        <NuxtLink
          to="/portfolio"
          class="hover:bg-lightgreen px-2 py-3 block md:text-lightgreen md:block md:bg-darkgreen lg:hidden md:text-7xl text-darkgreen border border-darkgreen ease-out duration-500 transform text-xl"
        >
          Alle projecten
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '../../public/assets/data/projects.json';

export default {
  data() {
    return {
      projects,
    };
  },
  computed: {
    recentProjects() {
      return this.projects
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
    },
  },
};
</script>
