<template>
  <div class="md:h-full flex items-center justify-center">
    <div class="md:container md:mx-auto my-16 px-4">
      <div>
      <div class="text-left md:text-center">
        <h1 class="text-3xl md:text-4xl font-extralight">
          <span class="text-gray-600">Reliable, efficient delivery</span>
          <span class="font-semibold block text-gray-700">Powered by Technology</span>
        </h1>
        <p class="text-gray-400 font-norma mt-6 md:max-w-lg mx-auto">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
    </div>

    <!-- grid -->
    <div class="flex flex-wrap mt-10 w-full items-center space-y-4 md:space-y-0">
      <!-- col -->
      <div class="md:w-1/3 px-4 w-full">
        <!-- card -->
        <div class="bg-white border-t-4 overflow-hidden rounded-md border-cyan shadow-lg">
          <div class="px-6 py-6">
            <div>
              <h2 class="text-lg font-semibold mb-2">Supervisor</h2>
            <p class="text-sm text-gray-500">Monitors activity to identify project roadblocks</p>
            </div>
            <div class="flex justify-end mt-6">
              <img class="w-14 h-14 bg-cover" src="../assets/images/icon-supervisor.svg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-1/3 px-4 w-full">
       <!-- grid -->
       <div class="flex flex-col space-y-4">
         <!-- col -->
         <div class="">
            <!-- card -->
        <div class="bg-white border-t-4 overflow-hidden rounded-md border-red shadow-lg">
          <div class="px-6 py-6">
            <div>
              <h2 class="text-lg font-semibold mb-2">Team Builder</h2>
            <p class="text-sm text-gray-500"> Scans our talent network to create the optimal team for your project</p>
            </div>
            <div class="flex justify-end mt-6">
              <img class="w-14 h-14 bg-cover" src="../assets/images/icon-team-builder.svg" alt="">
            </div>
          </div>
        </div>
         </div>
         <!-- col -->
         <div class="">
            <!-- card -->
        <div class="bg-white border-t-4 overflow-hidden rounded-md border-orange shadow-lg">
          <div class="px-6 py-6">
            <div>
              <h2 class="text-lg font-semibold mb-2">Karma</h2>
            <p class="text-sm text-gray-500">  Regularly evaluates our talent to ensure qualitys</p>
            </div>
            <div class="flex justify-end mt-6">
              <img class="w-14 h-14 bg-cover" src="../assets/images/icon-karma.svg" alt="">
            </div>
          </div>
        </div>
         </div>
       </div>
      </div>
      <div class="md:w-1/3 px-4 w-full">
        <!-- card -->
        <div class="bg-white border-t-4 overflow-hidden rounded-md border-blue shadow-lg">
          <div class="px-6 py-6">
            <div>
              <h2 class="text-lg font-semibold mb-2">Calculator</h2>
            <p class="text-sm text-gray-500">Uses data from past projects to provide better delivery estimates</p>
            </div>
            <div class="flex justify-end mt-6">
              <img class="w-14 h-14 bg-cover" src="../assets/images/icon-calculator.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body, html {
  height: 100%;
  /* background: red; */
  /* overflow: hidden; */
}
</style>
