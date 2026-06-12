
function AccordionItem({title , content , index, isOpen, setIsOpen}) {
  return (
    <div key={index} className=" border-gray-200 border-2">
      <div className={`flex p-2 ${isOpen ?  'bg-gray-50 border-b-2 border-gray-200' : 'bg-white'} cursor-pointer justify-between`} onClick={setIsOpen}>
        <span>{title}</span>
        <p>&#8681;</p>
      </div>
      <div className="p-1">
       {isOpen &&  content}
      </div>
    </div>
  )
}

export default AccordionItem