<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner"
</script>

<template>
  <Html>
    <Body>
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
      <ClientOnly>
        <Toaster />
      </ClientOnly>
    </Body>
  </Html>
</template>
