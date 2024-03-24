<template>
  <div class="mx-auto min-h-screen w-full max-w-[1200px] px-8 py-6">
    <div class="flex flex-grow flex-col gap-10 mb-10">
      <ProfileHeader />
      <ProfileTechstack/>
      <ProfileDevelopment />
      <ProfileLibraries />
      <ProfileExperience />
      <ProfileProjects />
      <ProfileCertifications />
      <ProfileEducation />
      <ProfileCommunity />
    </div>
  </div>
</template>
<script setup lang="ts">
import ProfileExperience from './ProfileExperience.vue';
import ProfileHeader from './ProfileHeader.vue';
import ProfileEducation from './ProfileEducation.vue';
import ProfileCommunity from './ProfileCommunity.vue';
import ProfileProjects from './ProfileProjects.vue';
import ProfileDevelopment from './ProfileDevelopment.vue';
import ProfileCertifications from './ProfileCertifications.vue';
import ProfileLibraries from './ProfileLibraries.vue';
import ProfileTechstack from './ProfileTechstack.vue';
</script>
