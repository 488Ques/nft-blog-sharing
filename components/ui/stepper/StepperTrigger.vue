<script lang="ts" setup>
import { cn } from "@/lib/utils"
import type { StepperTriggerProps } from "radix-vue"
import { StepperTrigger, useForwardProps } from "radix-vue"
import { computed, type HTMLAttributes } from "vue"

const props = defineProps<
  StepperTriggerProps & { class?: HTMLAttributes["class"] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperTrigger
    v-bind="forwarded"
    :class="
      cn(
        'flex flex-col items-center gap-2 rounded-md p-2 text-center',
        props.class,
      )
    "
  >
    <slot />
  </StepperTrigger>
</template>
