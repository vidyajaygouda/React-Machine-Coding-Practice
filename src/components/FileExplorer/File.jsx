import { useState } from 'react';
import json from './data.json';
import List from './List';

const initialData = [
  {
    id: 1,
    name: "public",
    isFolder: true,
    children: [{ id: 2, name: "index.html", isFolder: false }],
  },
  {
    id: 3,
    name: "src",
    isFolder: true,
    children: [
      { id: 4, name: "App.js", isFolder: false },
      { id: 5, name: "index.js", isFolder: false },
    ],
  },
  { id: 6, name: "package.json", isFolder: false },
];
const FileExplorer = () => {
    const [data, setData] = useState(initialData);

    const handleAddNodeToList = (parentId) => {
        const name = prompt('Enter file name')
        const updateNode = (list) => {
            return list?.map(node => {
                if(node.id === parentId){
                    return {
                        ...node, 
                       children:  [
                        ...node.children,
                        {
                            id: new Date().toString(),
                            name: name,
                            isFolder: true,
                            children: []
                        }
                       ]
                    }
                }
                // if we are adding new item to children
                if(node.children){
                    return {...node, children: updateNode(node.children)}
                }
                return node;
            })
        }
        
        setData((prev) => updateNode(prev))
    }
    const handleDeleteNodeList = (deleteId) => {
        console.log("deleteId", deleteId)
        const updateNode = (list) => {
            return list.filter(node => node.id !== deleteId)
            .map((node) => {
                if(node.children){
                    return {...node, children: updateNode(node.children)}
                }
                return node;
            })
        }
        setData(prev => updateNode(prev))
    }

    return (
        <div>
            <div>
                <List  data = {data} handleAddNodeToList = { handleAddNodeToList} handleDeleteNodeList = {handleDeleteNodeList}/>
            </div>
        </div>
    )
}

export default FileExplorer;