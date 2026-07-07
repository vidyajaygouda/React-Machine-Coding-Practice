import { useState } from 'react'
import   './File.css'
function List({data, handleAddNodeToList, handleDeleteNodeList}) {
    const [expanded, setIsExpanded] = useState({
        //proudut : name
    });


    

  return (
    <div className="container">

    {data?.length > 0 && data?.map((list) => (
        <div>
        <div key={list.id}>
          {list.isFolder && 
            <span onClick={() => setIsExpanded((prev) => ({...prev, [list.name] : !prev[list.name]}))}> {expanded?.[list.name] ? "-" : "+"}</span>
          }
           <span>{list.name}</span> 
           {
            list?.isFolder && 
            <span className='ml-3 cursor-pointer'>
                <button className='mr-2 cursor-pointer' onClick={() => handleAddNodeToList(list.id)}>Add</button>
            </span>
           }
            <span className='ml-3 cursor-pointer'>
                <button className='mr-2 cursor-pointer' onClick={() => handleDeleteNodeList(list.id)}>remove</button>
            </span>           
        </div>
        {expanded?.[list.name] &&  list.children && (<List data={list.children} handleAddNodeToList={handleAddNodeToList} handleDeleteNodeList= {handleDeleteNodeList}/>)}
        </div>
    ))}
    </div>
  )
}

export default List