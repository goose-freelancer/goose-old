<script>
  import "../app.css";

  import { page } from "$app/stores";

  $: routeId = $page.route.id.replace("/(pages)", "");
  $: isGerman = routeId.startsWith("/de");

  let enLink
  let deLink

  $: {
    if (routeId === "/" || routeId === "/de") {
      enLink = "/"
      deLink = "/de"
    } else if (routeId.startsWith("/de/")) {
      enLink = routeId.replace("/de/", "/")
      deLink = routeId
    } else {
      enLink = routeId
      deLink = "/de" + routeId
    }
  }
</script>

<div
  class="min-h-screen px-4 lg:px-24 pt-4 md:pt-16 bg-mighty-purple text-mint-green font-mono flex flex-col relative"
  class:!bg-mint-green={isGerman}
  class:!text-mighty-purple={isGerman}>
  <div class="absolute top-4 md:top-8 right-8 md:right-16 grid grid-cols-2 text-2xl">
    <div>
      {#if !routeId.startsWith("/de")}
        •
      {/if}
    </div>
    <a href="{enLink}">EN</a>
    <div>
      {#if routeId.startsWith("/de")}
        •
      {/if}
    </div>
    <a href="{deLink}">DE</a>
  </div>

  <slot />
</div>