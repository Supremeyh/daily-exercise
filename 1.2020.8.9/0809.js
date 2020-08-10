// 1.页面导入样式时，使用link和@import有什么区别？
// 区别：
// 1.link是HTML标签，@import是css提供的。
// 2.link引入的样式页面加载时同时加载，@import引入的样式需等页面加载完成后再加载。
// 3.link没有兼容性问题，@import不兼容ie5以下。
// 4.link可以通过js操作DOM动态引入样式表改变样式，而@import不可以。


// 2.圣杯布局和双飞翼布局的理解和区别
// 圣杯布局和双飞翼布局都是实现三栏布局的方法，左右定宽，中间自适应，是很常见的布局，其原理差不多，都有负边距的应用

// 圣杯布局，将中间div设置了左右padding-left和padding-right后，将左右两个div用相对布局position: relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div
// 双飞翼布局，直接在中间div内部创建子div用于放置内容，在该子div里用margin为左右两栏div留出位置。

// 布局没多大区别，就是middle的实现不一样，圣杯布局是 middle+padding，双飞翼采用 子元素+margin，最主要的还是负边距的使用


// 除此之外，flex/grid很轻松就能实现，甚至绝对定位也是很容易实现也更容易理解。

