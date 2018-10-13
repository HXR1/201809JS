function down(e){
    this.x = this.offsetLeft;
    this.y = this.offsetTop;
    this.mx = e.clientX;
    this.my = e.clientY;
    this.MOVE = move.bind(this);
    this.UP = up.bind(this);
    document.addEventListener("mousemove",this.MOVE,false);
    document.addEventListener("mouseup",this.UP,false);
    e.preventDefault();
    fire.call(this,"dragStart",e)//把dragStart事件做的计划执行
}
function  move(e){
    this.style.left = this.x + (e.clientX - this.mx)+ "px";
    this.style.top = this.y + (e.clientY - this.my) + "px";
    fire.call(this,"draging",e)//把draging事件做的计划执行
}
function up(e){
    document.removeEventListener("mousemove",this.MOVE,false);
    document.removeEventListener("mouseup",this.UP,false);
    fire.call(this,"dragEnd",e);//把dragEnd事件做的计划执行
}