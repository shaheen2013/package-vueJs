<template>
    <div id="app">
        <Nav></Nav>
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<style>

</style>
<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default {
    components: {Footer, Nav}
}
</script>