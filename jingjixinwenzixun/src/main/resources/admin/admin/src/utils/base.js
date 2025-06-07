const base = {
    get() {
        return {
            url : "http://localhost:8080/jingjixinwenzixun/",
            name: "jingjixinwenzixun",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jingjixinwenzixun/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "经济新闻资讯"
        } 
    }
}
export default base
