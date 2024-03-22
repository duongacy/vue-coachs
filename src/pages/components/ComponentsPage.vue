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
      <ExampleSectionTemplate id="TagsInput" name="TagsInput">
        <TagsInputExample></TagsInputExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="PINInput" name="PINInput">
        <PINInputExample></PINInputExample>
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
      <ExampleSectionTemplate id="accordion" name="Accordion">
        <AccordionExample></AccordionExample>
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

      <ExampleSectionTemplate id="calendar" name="Calendar">
        <CalendarExample></CalendarExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="card" name="Card">
        <CardExample></CardExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="carousel" name="Carousel">
        <CarouselExample></CarouselExample>
      </ExampleSectionTemplate>

      <ExampleSectionTemplate id="collapsible" name="Collapsible">
        <CollapsibleExample></CollapsibleExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="combobox" name="Combobox">
        <ComboboxExample></ComboboxExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Command" name="Command">
        <CommandExample></CommandExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="ContextMenu" name="ContextMenu">
        <ContextMenuExample></ContextMenuExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="DatePicker" name="DatePicker">
        <DatePickerExample></DatePickerExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Dialog" name="Dialog">
        <DialogExample></DialogExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="DropdownMenu" name="DropdownMenu">
        <DropdownMenuExample></DropdownMenuExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Form" name="Form">
        <FormExample></FormExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="HoverCard" name="HoverCard">
        <HoverCardExample></HoverCardExample>
      </ExampleSectionTemplate>

      <ExampleSectionTemplate id="Menubar" name="Menubar">
        <MenubarExample></MenubarExample>
      </ExampleSectionTemplate>

      <ExampleSectionTemplate id="Pagination" name="Pagination">
        <PaginationExample></PaginationExample>
      </ExampleSectionTemplate>

      <ExampleSectionTemplate id="Popover" name="Popover">
        <PopoverExample></PopoverExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Progress" name="Progress">
        <ProgressExample></ProgressExample>
      </ExampleSectionTemplate>

      <ExampleSectionTemplate id="ScrollArea" name="ScrollArea">
        <ScrollAreaExample></ScrollAreaExample>
      </ExampleSectionTemplate>

      <ExampleSectionTemplate id="Separator" name="Separator">
        <SeparatorExample></SeparatorExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Sheet" name="Sheet">
        <SheetExample></SheetExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Skeleton" name="Skeleton">
        <SkeletonExample></SkeletonExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Slider" name="Slider">
        <SliderExample></SliderExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Sonner" name="Sonner">
        <SonnerExample></SonnerExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Switch" name="Switch">
        <SwitchExample></SwitchExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Table" name="Table">
        <TableExample></TableExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Tabs" name="Tabs">
        <TabsExample></TabsExample>
      </ExampleSectionTemplate>

      <ExampleSectionTemplate id="Toast" name="Toast">
        <ToastExample></ToastExample>
      </ExampleSectionTemplate>
      <ExampleSectionTemplate id="Tooltip" name="Tooltip">
        <TooltipExample></TooltipExample>
      </ExampleSectionTemplate>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExampleSectionTemplate from './ExampleSectionTemplate.vue';
import AccordionExample from './examples/AccordionExample.vue';
import AlertDialogExample from './examples/AlertDialogExample.vue';
import AlertExample from './examples/AlertExample.vue';
import AvatarExample from './examples/AvatarExample.vue';
import BadgeExample from './examples/BadgeExample.vue';
import ButtonExample from './examples/ButtonExample.vue';
import CardExample from './examples/CardExample.vue';
import CarouselExample from './examples/CarouselExample.vue';
import CheckboxGroupExample from './examples/CheckboxGroupExample.vue';
import CollapsibleExample from './examples/CollapsibleExample.vue';
import ComboboxExample from './examples/ComboboxExample.vue';
import ContextMenuExample from './examples/ContextMenuExample.vue';
import DatePickerExample from './examples/DatePickerExample.vue';
import DialogExample from './examples/DialogExample.vue';
import DropdownMenuExample from './examples/DropdownMenuExample.vue';
import FormExample from './examples/FormExample.vue';
import HoverCardExample from './examples/HoverCardExample.vue';
import InputExample from './examples/InputExample.vue';
import MenubarExample from './examples/MenubarExample.vue';
import PINInputExample from './examples/PINInputExample.vue';
// import PINInputExample from './examples/PINInputExample.vue';
import PaginationExample from './examples/PaginationExample.vue';
import PopoverExample from './examples/PopoverExample.vue';
import ProgressExample from './examples/ProgressExample.vue';
import RadioGroupExample from './examples/RadioGroupExample.vue';
import ScrollAreaExample from './examples/ScrollAreaExample.vue';
import SelectExample from './examples/SelectExample.vue';
import SeparatorExample from './examples/SeparatorExample.vue';
import SheetExample from './examples/SheetExample.vue';
import SkeletonExample from './examples/SkeletonExample.vue';
import SliderExample from './examples/SliderExample.vue';
import SonnerExample from './examples/SonnerExample.vue';
import SwitchExample from './examples/SwitchExample.vue';
import TableExample from './examples/TableExample.vue';
import TabsExample from './examples/TabsExample.vue';
import TagsInputExample from './examples/TagsInputExample.vue';
import TextareaExample from './examples/TextareaExample.vue';
import ToastExample from './examples/ToastExample.vue';
import TooltipExample from './examples/TooltipExample.vue';
import TypographyExample from './examples/TypographyExample.vue';
</script>
