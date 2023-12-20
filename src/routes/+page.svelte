<script>
  import { differenceInMonths, differenceInDays, differenceInHours, differenceInSeconds } from 'date-fns';

  function timeUntilSeptember2024() {
    const currentDate = new Date();

    const targetDate = new Date('2024-09-01');

    const months = differenceInMonths(targetDate, currentDate);
    const days = differenceInDays(targetDate, currentDate) % 30;
    const hours = differenceInHours(targetDate, currentDate) % 24;
    const seconds = differenceInSeconds(targetDate, currentDate) % 60;

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
  }, 1000);

</script>

<svelte:head>
  <title>GOOSE</title>
  <meta name="description" content="GOOSE is a platform for freelancers to find work and for clients to find freelancers.">
</svelte:head>

<div class="h-full grid grid-cols-4 grid-rows-3 gap-16 py-16 items-center">

  <h1 class="col-span-4 text-9xl font-bold">
    GOOSE
  </h1>

  <div class="col-span-3">
    <p class="text-xl">
      Our mission is to support you as a freelancer by taking care of your key pain points, so you can focus on taking care of your wellbeing, and work goals.
    </p>
  </div>

  <div class="bg-mint-green row-span-2 self-stretch text-mighty-purple grid grid-rows-3 items-stretch px-4 gap-2">
    <h2 class="text-4xl font-medium text-center py-8">
      Launching in
    </h2>
    <div class="grid grid-cols-4 justify-center gap-1">
      <div class="flex items-center justify-center text-4xl font-bold bg-mighty-purple text-mint-green">
        {months}
      </div>
      <div class="flex items-center justify-center text-4xl font-bold bg-mighty-purple text-mint-green">
        {days}
      </div>
      <div class="flex items-center justify-center text-4xl font-bold bg-mighty-purple text-mint-green">
        {hours}
      </div>
      <div class="flex items-center justify-center text-4xl font-bold bg-mighty-purple text-mint-green">
        {seconds}
      </div>
    </div>
    <div class="grid grid-cols-4 font-bold">
      <div class="text-center">
        months
      </div>
      <div class="text-center">
        days
      </div>
      <div class="text-center">
        hours
      </div>
      <div class="text-center">
        seconds
      </div>
    </div>
  </div>

    <a
      href="/about"
      class="font-bold text-4xl bg-welsh-slate py-8 text-center hover:bg-mint-green hover:text-mighty-purple transition"
    >
      Tell Me More
    </a>

    <a
      href="/survey"
      class="font-bold text-4xl bg-welsh-slate py-8 text-center hover:bg-mint-green hover:text-mighty-purple transition"
    >
      Sign Up
    </a>

    <a
      href="/blog"
      class="font-bold text-4xl bg-welsh-slate py-8 text-center hover:bg-mint-green hover:text-mighty-purple transition"
    >
      Blog
    </a>
</div>