function Services(){
    //Lấy cả mãng dữ liệu từ API
    this.getListPhonesAPI = function(){
        return axios({
            url: "https://62a5030b259aba8e10f0d912.mockapi.io/API/products",
            method: "GET"
        });
    }

    //Xóa một dữ liệu từ API
    this.deletePhoneAPI = function(id){
        return axios({
            url: `https://62a5030b259aba8e10f0d912.mockapi.io/API/products/${id}`,
            method: "DELETE"
        })
    }

    //Thêm cả mãng dữ liệu lên API
    this.addPhoneAPI = function(newPhone){
        return axios({
            url: `https://62a5030b259aba8e10f0d912.mockapi.io/API/products`,
            method: "POST",
            data: newPhone
        })
    }

    //Thêm một dữ liệu lên API
    this.editPhoneAPI = function(id, Phone){
        return axios({
            url: `https://62a5030b259aba8e10f0d912.mockapi.io/API/products/${id}`,
            method: "PUT",
            data: Phone
        })
    }

    //Lấy một dữ liệu từ API
    this.getPhoneAPI = function(id){
        return axios({
            url: `https://62a5030b259aba8e10f0d912.mockapi.io/API/products/${id}`,
            method: "GET",
        })
    }
}