<script setup lang="ts">
import { DialogRoot, type DialogRootEmits, type DialogRootProps } from 'radix-vue';
import { computed } from 'vue';
import BaseButton from '../button/BaseButton.vue';
import DialogContent from './DialogContent.vue';
import DialogDescription from './DialogDescription.vue';
import DialogFooter from './DialogFooter.vue';
import DialogHeader from './DialogHeader.vue';
import DialogTitle from './DialogTitle.vue';

const props = withDefaults(
  defineProps<
    DialogRootProps & {
      class?: string;
      title?: string;
      description?: string;
      cancelText?: string;
      okText?: string;
    }
  >(),
  {
    class: '',
    title: '',
    description: '',
    cancelText: '',
    okText: '',
  },
);

defineOptions({
  inheritAttrs: false,
});

const emits = defineEmits<
  DialogRootEmits & {
    cancel: [];
    ok: [];
  }
>();

const openModel = defineModel('open', {
  type: Boolean,
});

const onOk = () => {
  emits('ok');
};
const onCancel = () => {
  emits('cancel');
};

const delegateProps = computed(() => {
  const { defaultOpen, modal } = props;
  return { defaultOpen, modal };
});
</script>

<template>
  <DialogRoot v-bind="delegateProps" v-model:open="openModel">
    <DialogContent :class="props.class">
      <slot name="header">
        <DialogHeader v-if="!!title || !!description">
          <DialogTitle v-if="!!title">{{ title }}</DialogTitle>
          <DialogDescription v-if="!!description"> {{ description }} </DialogDescription>
        </DialogHeader>
      </slot>
      <slot></slot>
      <slot name="footer">
        <DialogFooter v-if="!!okText || !!cancelText">
          <BaseButton v-if="!!cancelText" variant="outline" @click="onCancel">
            {{ cancelText }}
          </BaseButton>
          <BaseButton v-if="!!okText" @click="onOk"> {{ okText }} </BaseButton>
        </DialogFooter>
      </slot>
    </DialogContent>
  </DialogRoot>
</template>
