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

<div class="h-full flex flex-col justify-center">
  <div class="h-4/5 flex flex-col justify-center">
    <h1 class="text-8xl font-bold mb-8">GOOSE</h1>
    <p>Here's some text about our product it's named after an aggressive bird but actually it's about freelancers</p>
  </div>

  <div class="h-1/5 grid grid-cols-5 items-center justify-center">
    <div>
      <a href="/about" class="font-medium text-cyan-500">Tell me more</a>
    </div>

    <div>
      <a href="/survey" class="font-medium text-cyan-500">Sign up</a>
    </div>

    <div>
      <a href="/blog" class="font-medium text-cyan-500">Blog</a>
    </div>

    <div class="bg-yellow-200 col-span-4 md:col-span-2 h-full flex flex-col justify-center p-4">
      <h2 class="text-xl font-bold mb-2">
        Hatching in
        <span class="text-sm">
          {months} months, {days} days, {hours} hours and {seconds} seconds!
        </span>
      </h2>
      <p class="text-sm">
        September 2024
      </p>
    </div>
  </div>
</div>
