<template>
    <div class="hello">
        <ul>
            <li v-for="(item, index) of info" :key="index">
                姓名: {{ item.name }}
                年龄: {{ item.age }}
                性别: {{ item.sex }}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data(){
            return {
                info: null
            }
        },
        created() {
            axios.get("http://localhost:3000/data")
                .then(({data}) => {
                    console.log(data)
                    this.info = data;
                })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
