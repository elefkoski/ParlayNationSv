<script lang="ts">
	export let text: string = '';
	export let href: string = '';
</script>

<a data-track="link-{href}" {href} class="text-blue-500 hover:text-blue-700">{text}</a>
