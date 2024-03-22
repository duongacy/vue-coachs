<template>
  <div class="mx-auto flex min-h-screen w-full max-w-[1200px] gap-x-4 px-8 py-6">
    <div class="flex flex-grow flex-col gap-10">
      <ProfileHeader />
      <ProfileSkill />
      <ProfileDevelopment />
      <ProfileWorkExperience />
      <ProfileProjects />
      <ProfileEducation />
      <ProfileCommunity />
    </div>
    <div class="flex w-[260px] flex-col gap-8">
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ProfileWorkExperience from './ProfileWorkExperience.vue';
import ProfileSkill from './ProfileSkill.vue';
import ProfileHeader from './ProfileHeader.vue';
import ProfileEducation from './ProfileEducation.vue';
import ProfileCommunity from './ProfileCommunity.vue';
import ProfileProjects from './ProfileProjects.vue';
import ProfileDevelopment from './ProfileDevelopment.vue';
</script>
