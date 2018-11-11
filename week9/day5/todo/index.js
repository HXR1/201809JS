//这是我建立的模板

// localStorage
// 添加  localStorage.setItem('aaa',value) ,value 需要是一个字符串类型的； 直接打点也可以
// 获取  localStorage.getItem('aaa') 获取到的也是一个字符串； 直接通过打点方式获取也可以
let vm = new Vue({
    el:"#app",
    data:{
        thing:'',
        ary:[],
        hash:''
    },
    created(){
        if(localStorage.dataList){
            //前提是 该属性有值
            this.ary = JSON.parse(localStorage.dataList);
        }
        // this.ary = localStorage.dataList;
        this.hash = location.hash || '#/all';// 根据地址栏的hash来决定初始值
        window.onhashchange = () => {
            this.hash = location.hash;
        }
    },
    methods:{
        add(){
            this.thing = this.thing.trim();
            if(this.thing){
                let obj = {};
                obj.thing = this.thing;
                obj.isSelect = false; // 控制是否选中的
                obj.isShow = false; // 控制input是否显示
                this.ary.push(obj);
                this.thing = '';
            }

        },
        del(obj){
            // this.todoAry.splice(n,1)
            let temp = this.ary.filter((item)=>{
                return item != obj
            });
            this.ary = temp;
        },
        edit(obj){
            // obj 就是双击的那一条的数据
            obj.isShow = true;
        },
        hide(obj){
            obj.isShow = false;
        }
    },
    computed:{
        count(){
            // 只要 ary 有修改 我们就要向localStorage中存值
            let str = JSON.stringify(this.ary);
            localStorage.dataList = str;

            // count依赖于 this.ary ; 取决于 每一项中的isSelect
            let temp = this.ary.filter((item)=>{
                //筛选出没被选中的项
                return !item.isSelect
            });
            // temp 里边存的都是没被选中的
            return temp.length;
        },
        todoAry(){
            // 这个变量依赖于  hash 和  ary;
            // 在不同的 hash值下  从ary中筛选出不同数据
            switch (this.hash){
                case '#/all':
                    return this.ary;
                    break;
                case '#/finished':
                    let temp = this.ary.filter((item)=>{
                        return item.isSelect
                    });
                    return temp;
                    break;
                default:
                    let temp1 = this.ary.filter((item)=>{
                        return !item.isSelect
                    });
                    return temp1;
                    break;
            }
        }
    },
    directives:{
        focus(ele,obj){
            if(obj.value){
                ele.focus();
                // focus执行 ele 自动获取焦点
            }
        }
    }

});