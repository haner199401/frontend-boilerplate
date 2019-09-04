
# Frontend Boilerplate
一个静态网站开发模板,基于 [https://github.com/ViZhe/frontend-boilerplate](https://github.com/ViZhe/frontend-boilerplate) 进行二次修改
 - 添加 静态文件夹copy
 - 删除 webpack编译文件
 - 移除 scss,添加 less
 - 
## Browser Support

* latest Chrome & Firefox & Safari
* IE10+

## Setup

```bash
git clone https://github.com/haner199401/frontend-boilerplate.git <projectname>
cd <projectname>
rm -rf .git
npm ci
```

## Gulp commands

```bash
gulp       // Run build & watch & browserSync
gulp build
gulp build --prod
```
