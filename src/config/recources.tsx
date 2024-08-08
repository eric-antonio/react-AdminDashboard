import { CompassFilled, DashOutlined, ProjectFilled, ProjectOutlined, ShopFilled, ShopOutlined, SpotifyOutlined, ToolOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";
import { List } from "antd";

export const resources : IResourceItem[]=[
    {
        name:'dashboard',
        list:'/',
        meta:{
            label:'Dashboard',
            icon: <DashOutlined/>
        }
    },
    {
        name:'companies',
        list:'./companies',
        show:'/companies/:id',
        create:'/companies/new',
        edit:'/companies/edit/:id',
        meta:{
            label:'Company',
            icon: <ShopOutlined/>
        }
    },
    {
        name:'tasks',
        list:'./tasks',
        create:'/tasks/new',
        edit:'/tasks/edit/:id',
        meta:{
            label:'Tasks',
            icon: <ProjectOutlined/>
        }
    },
    {
        name:'tasks',
        list:'./tasks',
        create:'/tasks/new',
        edit:'/tasks/edit/:id',
        meta:{
            label:'Tasks',
            icon: <ProjectFilled/>
        }
    }
]