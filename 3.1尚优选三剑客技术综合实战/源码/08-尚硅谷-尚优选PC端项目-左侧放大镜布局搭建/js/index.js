//作用：需要将所有的DOM元素对象以及相关的资源全部都加载完毕之后，再来实现的事件函数
window.onload = function () {
    /**
     * 思路：
     * 1、先获取路径导航的页面元素（navPath）
     * 2、再来获取所需要的数据（data.js->goodData.path）
     * 3、由于数据是需要动态产生的，那么相应的DOM元素也应该是动态产生的，含义需要根据数据的数量来进行创建DOM元素
     * 4、在遍历数据创建DOM元素的最后一条，只创建a标签，而不创建i标签
     */

    //1.获取页面导航的元素对象
    var navPath = document.querySelector('#wrapper #content .contentMain #navPath');

    //2.获取数据
    var path = goodData.path;

    //3.遍历数据
    for (var i = 0; i < path.length; i++) {
        if (i == path.length - 1) {
            //只需要创建a且没有href属性
            var aNode = document.createElement("a");
            aNode.innerText = path[i].title;
            navPath.appendChild(aNode);
        } else {
            //4.创建a标签
            var aNode = document.createElement("a");
            aNode.href = path[i].url;
            aNode.innerText = path[i].title;

            //5.创建i标签
            var iNode = document.createElement('i');
            iNode.innerText = '/';

            //6.让navPath元素来追加a和i
            navPath.appendChild(aNode);
            navPath.appendChild(iNode);
        }


    }
}