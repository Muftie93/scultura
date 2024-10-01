<template>
    <div class="font-custom">
      <header class="flex items-center justify-between p-4 bg-gray-300 text-black">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center w-1/4">
          <img src="/scultura-logo.svg" alt="Logo" class="w-full h-auto object-contain" />
        </NuxtLink>
  
        <!-- Navigation Links -->
        <nav>
          <ul class="flex space-x-6">
            <li>
              <NuxtLink
                to="/impressum"
                class="hover:underline"
                :class="{ 'underline': $route.path === '/impressum' }"
              >
                Impressum
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/datenschutz"
                class="hover:underline"
                :class="{ 'underline': $route.path === '/datenschutz' }"
              >
                Datenschutz
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </header>
  
      <!-- Output Page Content -->
      <div>
        <slot />
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Add any additional custom styling here */
  </style>
  