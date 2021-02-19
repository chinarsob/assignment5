new Vue({
    el:'#assignment',
    data(){
        return{
            inputval:'',
            tasks:[],
            isVisible:'true',
            buttonText:'Hide List'
        }
    },

    methods:{
        addTask()
        {
            this.tasks.push(this.inputval);
        },
        toggleList()
        {
            this.isVisible = !this.isVisible;
            if(this.isVisible)
                this.buttonText="Hide List";
            else
                this.buttonText="Show List";

        }
    }

});