<script setup lang="ts"></script>
<template>
  <div
    class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
    style="background-image: url('/public/login/bg_login.webp')"
  >
    <div class="rounded-xl bg-white/30 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div class="text-white">
        <div class="mb-8 flex flex-col items-center">
          <img src="/logo.webp" width="150" alt="Logo" />
          <h1 class="mb-2 text-2xl">Hotel</h1>
          <span class="text-gray-300">Ingrese sus datos de inicio de sesión</span>
        </div>
        <form action="#">
          <div class="mb-4 text-lg">
            <input
              class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="text"
              name="name"
              placeholder="id@email.com"
            />
          </div>

          <div class="mb-4 text-lg">
            <input
              class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="Password"
              name="name"
              placeholder="*********"
            />
          </div>
          <div class="mt-8 flex justify-center text-lg text-black">
            <button
              type="submit"
              class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
