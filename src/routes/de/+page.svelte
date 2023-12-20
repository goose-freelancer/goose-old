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
  <meta name="description" content="Goose is a platform for freelancers to find work and for clients to find freelancers.">
</svelte:head>

<div class="h-full grid md:grid-cols-4 md:grid-rows-3 gap-8 lg:gap-16 py-16 items-center">

  <div class="md:col-span-4 md:order-1">
    <img src="/images/logo-purple.svg" alt="Goose logo" class="w-1/2 mx-auto md:mx-0">
  </div>

  <div class="md:col-span-3 md:order-2">
    <p class="text-sm md:text-xl">
      Unser Ziel ist es, Sie als Freiberufler zu unterstützen, indem wir uns um Ihre wichtigsten Probleme kümmern, damit Sie sich auf Ihr Wohlbefinden und Ihre beruflichen Ziele konzentrieren können.
    </p>
  </div>

  <div class="md:col-span-3 grid md:grid-cols-3 gap-4 mx-16 lg:mx-0 lg:gap-16 md:order-4">
    <a
      href="/de/about"
      class="font-bold text-lg lg:text-2xl bg-mint-green border border-mighty-purple py-4 md:py-8 text-center"
    >
      Motivation
    </a>

    <a
      href="/de/survey"
      class="font-bold text-lg lg:text-2xl border py-4 md:py-8 text-center bg-mighty-purple text-mint-green"
    >
      Kurze Umfrage
    </a>

    <a
      href="/de/blog"
      class="font-bold text-lg lg:text-2xl bg-mint-green border border-mighty-purple py-4 md:py-8 text-center"
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
    grid-rows-3
    items-stretch
    px-4
    gap-1
    md:gap-2
    md:order-3
  ">
    <h2 class="md:text-2xl font-bold text-center py-4 md:py-8">
      Einführung in
    </h2>
    <div class="mx-16 md:mx-0 grid grid-cols-4 justify-center gap-1 relative">
      <hr class="absolute w-full h-px bg-mighty-purple border-0 top-1/2" />

      <div class="flex items-center justify-center md:text-3xl font-bold bg-mint-green text-mighty-purple">
        {months}
      </div>
      <div class="flex items-center justify-center md:text-3xl font-bold bg-mint-green text-mighty-purple">
        {days}
      </div>
      <div class="flex items-center justify-center md:text-3xl font-bold bg-mint-green text-mighty-purple">
        {hours}
      </div>
      <div class="flex items-center justify-center md:text-3xl font-bold bg-mint-green text-mighty-purple">
        {seconds}
      </div>
    </div>
    <div class="mx-16 md:mx-0 grid grid-cols-4 font-bold gap-1">
      <div class="text-center text-xs">
        monate
      </div>
      <div class="text-center text-xs">
        tage
      </div>
      <div class="text-center text-xs">
        stunden
      </div>
      <div class="text-center text-xs">
        minuten
      </div>
    </div>
  </div>
</div>