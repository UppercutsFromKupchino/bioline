<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Маркетплейс</h3>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">Навигация</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/products" class="text-gray-400 hover:text-white">Каталог</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">Контакты</h4>
          <p class="text-gray-400">Email: dmitry.kalmykov.it@mail.ru</p>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        © 2026 Маркетплейс. Все права защищены.
      </div>
    </div>
  </footer>
</template>