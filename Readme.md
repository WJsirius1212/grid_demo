# Readme



课程表储存方式

```json
let schedule: {
    period: number;//一周几天
    lessonsum: number;//一天几节课
    lesson: {
        name: string;
        teacher: string;
        time: number[,];//第几节课开始
        duration: number;//持续几节课
    }[];
}
```



+ 删除修改功能类似todolist，直接修改数据以后重新渲染（手动react），不太用加了（写过了

+ 没啥好写的，注意一下bug，反正课程安排出bug是老师的问题，跟我前段有啥关系呢？