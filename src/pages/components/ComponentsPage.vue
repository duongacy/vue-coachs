<template>
  <div class="flex min-h-full gap-4 p-2">
    <div class="flex flex-grow flex-col gap-4">
      <ExampleSectionTemplate id="Typography" name="Typography">
        <TypographyExample></TypographyExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Button" name="Button">
        <ButtonExample></ButtonExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="avatar" name="Avatar">
        <AvatarExample></AvatarExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Input" name="Input">
        <InputExample></InputExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Textarea" name="Textarea">
        <TextareaExample></TextareaExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="RadioGroup" name="RadioGroup">
        <RadioGroupExample></RadioGroupExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Select" name="Select">
        <SelectExample></SelectExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="checkbox" name="Checkbox">
        <CheckboxGroupExample></CheckboxGroupExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Switch" name="Switch">
        <SwitchExample></SwitchExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="alert" name="Alert">
        <AlertExample></AlertExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="alert-dialog" name="Alert dialog">
        <AlertDialogExample></AlertDialogExample>
      </ExampleSectionTemplate>

      <ExampleSectionTemplate id="badge" name="Badge">
        <BadgeExample></BadgeExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="card" name="Card">
        <CardExample></CardExample>
      </ExampleSectionTemplate>

      <ExampleSectionTemplate id="collapsible" name="Collapsible">
        <CollapsibleExample></CollapsibleExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Dialog" name="Dialog">
        <DialogExample></DialogExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="DropdownMenu" name="DropdownMenu">
        <DropdownMenuExample></DropdownMenuExample>
      </ExampleSectionTemplate>

      <ExampleSectionTemplate id="Pagination" name="Pagination">
        <PaginationExample></PaginationExample>
      </ExampleSectionTemplate>

      <ExampleSectionTemplate id="Separator" name="Separator">
        <SeparatorExample></SeparatorExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Tabs" name="Tabs">
        <TabsExample></TabsExample>
      </ExampleSectionTemplate>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExampleSectionTemplate from './ExampleSectionTemplate.vue';
import AlertDialogExample from './examples/AlertDialogExample.vue';
import AlertExample from './examples/AlertExample.vue';
import AvatarExample from './examples/AvatarExample.vue';
import BadgeExample from './examples/BadgeExample.vue';
import ButtonExample from './examples/ButtonExample.vue';
import CardExample from './examples/CardExample.vue';
import CheckboxGroupExample from './examples/CheckboxGroupExample.vue';
import CollapsibleExample from './examples/CollapsibleExample.vue';
import DialogExample from './examples/DialogExample.vue';
import DropdownMenuExample from './examples/DropdownMenuExample.vue';
import InputExample from './examples/InputExample.vue';
import PaginationExample from './examples/PaginationExample.vue';
import RadioGroupExample from './examples/RadioGroupExample.vue';
import SelectExample from './examples/SelectExample.vue';
import SeparatorExample from './examples/SeparatorExample.vue';
import SwitchExample from './examples/SwitchExample.vue';
import TabsExample from './examples/TabsExample.vue';
import TextareaExample from './examples/TextareaExample.vue';
import TypographyExample from './examples/TypographyExample.vue';
</script>
