

class ApiFeatures {
    constructor(query, querystr) {
        this.query = query;
        this.querystr = querystr
    }

    search() {
        
        const keyword = this.querystr.name ?
            {
                name: {
                    $regex: this.querystr.name,
                    $options: 'i'
                }
            }
            : {}

       this.query = this.query.find({...keyword})

       return this
    }

    filter(){

        const querycopy = {...this.querystr}

        const removefield = ['page','name','limit']
        
        removefield.forEach(el => {delete querycopy[el]})

        let querystr = JSON.stringify(querycopy)
        
        querystr =  querystr.replace(/\b(gt|gte|lt|lte)\b/ , key=> `$${key}`)

        this.query = this.query.find(JSON.parse(querystr))
       

        return this

    }


    pagination(result){
    
     const currentpage =  Number(this.querystr.page)|| 1;
     
     const skip = (currentpage -1)*result

     this.query = this.query.skip(skip).limit(result)

     return this
    }
}



module.exports = ApiFeatures