<script setup>
import {useI18n} from 'vue-i18n';
const {t} = useI18n();
</script>

<template>
  <section>
    <div class="flex flex-column gap-3">
      <h1 class="font-bold text-xl">
        {{t('about.title')}}
      </h1>
    </div>
  </section>
</template>