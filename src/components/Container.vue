<template>
    <div class="container">
        <div class="row">
            <slot name="header"></slot>
            <slot name="body"></slot>
            <slot name="footer"></slot>
            <slot><h1>sdjflksdjfl</h1></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Container",
}
</script>

<style scoped>

</style>