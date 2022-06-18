function Services(){
    this.getListPhonesAPI = function(){
        return axios({
            url: "https://62a5030b259aba8e10f0d912.mockapi.io/API/products",
            method: "GET"
        })    
    }

    this.getPhoneAPI = function(id){
        return axios({
            url: `https://62a5030b259aba8e10f0d912.mockapi.io/API/products/${id}`,
            method: "GET"
        })
    }
}

