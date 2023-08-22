
export const categoryfilter = (array , category) =>{
 const updated = array.filter((elem)=>{
      return elem.category === category
   })
  
  const remaining = array.filter((elem)=>{
    return !updated.includes(elem)
  })
//    console.log(updated);
//    return [...updated , ...remaining];
return updated;
}