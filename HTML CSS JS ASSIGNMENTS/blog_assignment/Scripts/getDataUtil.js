const getdata = async(url)=>{
    try {
        let res = await fetch(url)
        let data = res.json();
        // console.log(data)
        return data;

    } catch (error) {
        console.log("error")
    }
}

export {getdata} 