import { Food } from "./app/shared/models/Food";
import { Tag } from "./app/shared/models/Tag";

export const sample_food:Food[]=[
    {
        id:"1",
        name:"Vegetables Pizza",
        price:4,
        tags:['FastFood','Pizza','Lunch'],
        favorite:true,
        stars:4,
        imgUrl:"assets/food-1.jpg",
        origins:['Italy'],
        cookTime:"40-50",
    },
    {
        id:"2",
        name:"Tacos",
        price:2,
        tags:['FastFood','Burger','Lunch'],
        favorite:false,
        stars:5,
        imgUrl:"assets/food-2.jpg",
        origins:['England'],
        cookTime:"10-20",
    },
    {
        id:"3",
        name:"Hotdog Pizza",
        price:3,
        tags:['FastFood','Pizza','Lunch'],
        favorite:false,
        stars:3,
        imgUrl:"assets/food-3.jpg",
        origins:['Italy'],
        cookTime:"30-50",
    },
    {
        id:"4",
        name:"Chicken Soup",
        price:11,
        tags:['SlowFood','Soup'],
        favorite:true,
        stars:4,
        imgUrl:"assets/food-4.jpg",
        origins:['India','Asia'],
        cookTime:"30-50",
    },
]

export const sample_tags:Tag[]=[
    {name:'All',count:4},
    {name:'Pizza',count:2},
    {name:'Tacos',count:1},
    {name:'Soup',count:1},
    {name:'FastFood',count:3},
    {name:'SlowFood',count:1},
    {name:'Lunch',count:3},
]
