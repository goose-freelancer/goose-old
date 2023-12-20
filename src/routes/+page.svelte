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
  <title>GOOSE</title>
  <meta name="description" content="GOOSE is a platform for freelancers to find work and for clients to find freelancers.">
</svelte:head>

<div class="h-full grid sm:grid-cols-4 sm:grid-rows-3 gap-8 sm:gap-16 py-16 items-center">

  <h1 class="sm:col-span-4 text-8xl sm:text-9xl font-bold">
    GOOSE
  </h1>

  <div class="sm:col-span-3">
    <p class="text-xl">
      Our mission is to support you as a freelancer by taking care of your key pain points, so you can focus on taking care of your wellbeing, and work goals.
    </p>
  </div>

  <div class="bg-mint-green sm:row-span-2 self-stretch text-mighty-purple grid grid-rows-3 items-stretch px-4 gap-1 sm:gap-2">
    <h2 class="text-2xl font-bold text-center py-8">
      Launching in
    </h2>
    <div class="grid grid-cols-4 justify-center gap-1 relative">
      <hr class="absolute w-full h-px bg-mint-green border-0 top-1/2" />

      <div class="flex items-center justify-center text-3xl font-bold bg-mighty-purple text-mint-green">
        {months}
      </div>
      <div class="flex items-center justify-center text-3xl font-bold bg-mighty-purple text-mint-green">
        {days}
      </div>
      <div class="flex items-center justify-center text-3xl font-bold bg-mighty-purple text-mint-green">
        {hours}
      </div>
      <div class="flex items-center justify-center text-3xl font-bold bg-mighty-purple text-mint-green">
        {seconds}
      </div>
    </div>
    <div class="grid grid-cols-4 font-bold gap-1">
      <div class="text-center text-xs">
        months
      </div>
      <div class="text-center text-xs">
        days
      </div>
      <div class="text-center text-xs">
        hours
      </div>
      <div class="text-center text-xs">
        minutes
      </div>
    </div>
  </div>

  <a
    href="/about"
    class="font-bold text-xl md:text-3xl bg-welsh-slate py-8 text-center hover:bg-mint-green hover:text-mighty-purple transition"
  >
    Tell Me More
  </a>

  <a
    href="/survey"
    class="font-bold text-xl md:text-3xl bg-welsh-slate py-8 text-center hover:bg-mint-green hover:text-mighty-purple transition"
  >
    Sign Up
  </a>

  <a
    href="/blog"
    class="font-bold text-xl md:text-3xl bg-welsh-slate py-8 text-center hover:bg-mint-green hover:text-mighty-purple transition"
  >
    Blog
  </a>
</div>