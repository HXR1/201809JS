//这是我建立的模板
let vm = new Vue({
    el:"#app",
    data:{
       thing:'',
       ary:[]
    },
    methods:{
        add(){
            // 添加之前先判断是否是可添加的
            this.thing = this.thing.trim();
            if(this.thing){
                let obj = {};
                obj.thing = this.thing;
                obj.isSelect = false;
                this.ary.push(obj);
                this.thing = '';
            }
        },
        del(n){
            this.ary.splice(n,1)
        }
    }


});