import queryString from 'query-string'
const parsed = queryString.parse(window.location.search);
export const searchAndFilter = (searchArr ,types=parsed.typesFilter||[],searchValue=parsed.search||"" ) => {
    let result = searchArr
    if(searchValue){
    result =  result.filter((item)=>item.name.search(searchValue) >= 0)
    }

    if(types.length >= 1){
      result =  result.filter((item)=>{
            return item.type.some(item => types.includes(item))
        })
    }

    return result

}