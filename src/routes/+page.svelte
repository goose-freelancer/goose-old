<script>
  import { differenceInMonths, addMonths, differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';

  function timeUntilSeptember2024() {
    const currentDate = new Date();

    const targetDate = new Date('2024-09-02');

    const months = differenceInMonths(targetDate, currentDate);

    const inXMonths = addMonths(currentDate, months);
    const days = differenceInDays(targetDate, inXMonths);
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
    <img src="/images/logo-green.svg" alt="Goose logo" class="w-1/2 mx-auto md:mx-0">
  </div>

  <div class="md:col-span-3 md:order-2 self-start">
    <p class="text-sm md:text-xl text-center md:text-left">
      We’ll take care of your key pain points so that you can focus on taking care of your wellbeing, your work priorities, and your goals.
    </p>
  </div>

  <div class="md:col-span-3 grid md:grid-cols-3 gap-4 lg:gap-16 md:order-4 self-end">
    <a
      href="/about"
      class="text-lg lg:text-xl bg-welsh-slate py-4 lg:py-6 text-center"
    >
      Tell Me More
    </a>

    <a
      href="/survey"
      class="text-lg lg:text-xl py-4 lg:py-6 text-center bg-mint-green text-mighty-purple"
    >
      Survey
    </a>

    <a
      href="/blog"
      class="text-lg lg:text-xl bg-welsh-slate py-4 lg:py-6 text-center"
    >
      Blog
    </a>
  </div>

  <div class="
    -mx-4
    md:mx-0
    bg-mint-green
    text-mighty-purple
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
        Official site & service
      </h3>
      <h2 class="md:text-xl font-bold">
        launching in
      </h2>
    </div>
    <div class="mx-16 md:mx-0 flex flex-col justify-stretch">
      <div class="grid grid-cols-4 justify-center gap-1 relative">
        <hr class="absolute w-full h-px bg-mint-green border-0 top-1/2" />

        <div class="flex items-center justify-center md:text-3xl font-bold bg-mighty-purple text-mint-green py-4">
          {months}
        </div>
        <div class="flex items-center justify-center md:text-3xl font-bold bg-mighty-purple text-mint-green py-4">
          {days}
        </div>
        <div class="flex items-center justify-center md:text-3xl font-bold bg-mighty-purple text-mint-green py-4">
          {hours}
        </div>
        <div class="flex items-center justify-center md:text-3xl font-bold bg-mighty-purple text-mint-green py-4">
          {seconds}
        </div>
      </div>

      <div class="grid grid-cols-4 justify-center gap-1">
        <div class="text-center text-xs md:text">
          months
        </div>
        <div class="text-center text-xs md:text">
          days
        </div>
        <div class="text-center text-xs md:text">
          hours
        </div>
        <div class="text-center text-xs md:text">
          minutes
        </div>
      </div>
    </div>
  </div>
</div>