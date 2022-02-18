export const get_label=(data)=>{
    return new Promise((resolve,reject)=>{
        uniCloud.callFunction({
            name:'geT_label',
            data
        }).then(res=>{
            if(res.result.code===200){
                resolve(res.result)
            }else{
                reject(res.result)
            }
         
    
        }).catch(err=>{
        reject(err)    
        })
    })

}

