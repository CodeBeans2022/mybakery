<template>
    <div>
        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/products">Products</router-link>
                </li>
                <li>
                    <router-link to="/admin">Admin</router-link>
                </li>
                <li>
                    <router-link to="/contactus">Contact Us</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
nav {
    height: 70px;
    border: 1px solid black;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>