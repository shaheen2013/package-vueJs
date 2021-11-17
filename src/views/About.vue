<template>
    <div id="about">
        <container>
            <div class="col-3">
                <h2>Slot Component</h2>
                <action-btn to_name="home" title="Home" :cName="className"></action-btn>
                <action-btn to_name="view" title="User View" :cName="'btn-warning'"></action-btn>

            </div>
        </container>
    </div>
</template>

<script>
import Container from "../components/Container";
import ActionBtn from "../components/Action-btn";

export default {
    name                : "About",
    data: () =>({
            className: 'btn-primary',
        }),
    components: {ActionBtn, Container}
}
</script>

<style scoped>

</style>