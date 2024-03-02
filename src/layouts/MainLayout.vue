<template>
  <div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
    <div class="sticky w-full z-50 top-0 bg-white">
      <slot name="header"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
