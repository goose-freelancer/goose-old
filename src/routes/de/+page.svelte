<script>
  import { differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';

  function timeUntilSeptember2024() {
    const currentDate = new Date();

    const targetDate = new Date('2024-09-01');

    const months = differenceInMonths(targetDate, currentDate);
    const days = differenceInDays(targetDate, currentDate) % 30;
    const hours = differenceInHours(targetDate, currentDate) % 24;
    const seconds = differenceInMinutes(targetDate, currentDate) % 60;

    return {
      months,
      days,
      hours,
      seconds
    };
  }

  let { months, days, hours, seconds } = timeUntilSeptember2024()

  setInterval(() => {
    ({ months, days, hours, seconds } = timeUntilSeptember2024());
  }, 60 * 1000);

</script>

<svelte:head>
  <title>Goose</title>
  <meta name="description" content="Goose is a service that offers support and protections around your key freelancing administrative needs.">
</svelte:head>

<div class="h-full grid md:grid-cols-4 md:grid-rows-3 gap-12 lg:gap-y-32 py-16 items-center">

  <div class="md:col-span-4 md:order-1">
    <img src="/images/logo-purple.svg" alt="Goose logo" class="w-1/2 mx-auto md:mx-0">
  </div>

  <div class="md:col-span-3 md:order-2">
    <p class="text-sm md:text-xl text-center md:text-left self-start">
      Wir kümmern uns um deine wichtigsten Probleme, damit du dich auf dein Wohlbefinden, deine beruflichen Prioritäten und deine Ziele konzentrieren kannst.
    </p>
  </div>
  <div class="md:col-span-3 grid md:grid-cols-3 gap-4 lg:mx-0 lg:gap-16 md:order-4 self-end">

    <a
      href="/de/about"
      class="text-lg lg:text-xl py-4 lg:py-6 text-center bg-mint-green border border-mighty-purple"
    >
      Motivation
    </a>

    <a
      href="/de/survey"
      class="text-lg lg:text-xl py-4 lg:py-6 text-center bg-mighty-purple text-mint-green"
    >
      Kurze Umfrage
    </a>

    <a
      href="/de/blog"
      class="text-lg lg:text-xl py-4 lg:py-6 text-center bg-mint-green border border-mighty-purple"
    >
      Blog
    </a>
  </div>

  <div class="
    -mx-4
    md:mx-0
    bg-mighty-purple
    text-mint-green
    md:row-span-2
    self-stretch
    grid
    grid-rows-2
    items-stretch
    px-2
    gap-1
    md:gap-2
    md:order-3
  ">
    <div class="text-center py-4 md:py-8">
      <h3 class="mb-2">
        Offizielle Website & Service
      </h3>
      <h2 class="md:text-xl font-bold">
        Einführung in
      </h2>
    </div>
    <div class="mx-16 md:mx-0 flex flex-col justify-stretch">
      <div class="grid grid-cols-4 justify-center gap-1 relative">
        <hr class="absolute w-full h-px bg-mighty-purple border-0 top-1/2" />

        <div class="flex items-center justify-center md:text-3xl font-bold bg-mint-green text-mighty-purple py-4">
          {months}
        </div>
        <div class="flex items-center justify-center md:text-3xl font-bold bg-mint-green text-mighty-purple py-4">
          {days}
        </div>
        <div class="flex items-center justify-center md:text-3xl font-bold bg-mint-green text-mighty-purple py-4">
          {hours}
        </div>
        <div class="flex items-center justify-center md:text-3xl font-bold bg-mint-green text-mighty-purple py-4">
          {seconds}
        </div>
      </div>

      <div class="grid grid-cols-4 justify-center gap-1">
        <div class="text-center text-xs md:text">
          monate
        </div>
        <div class="text-center text-xs md:text">
          tage
        </div>
        <div class="text-center text-xs md:text">
          stunden
        </div>
        <div class="text-center text-xs md:text">
          minuten
        </div>
      </div>
    </div>
  </div>
</div>