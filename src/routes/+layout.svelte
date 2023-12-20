<script>
  import "../app.css";

  import { page } from "$app/stores";

  $: routeId = $page.route.id.replace("/(pages)", "");

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

<div class="h-screen px-4 lg:px-24 pt-4 md:pt-16 text-mint-green font-mono flex flex-col relative">
  <div class="absolute top-8 right-8 md:right-16 grid grid-cols-2 text-2xl">
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